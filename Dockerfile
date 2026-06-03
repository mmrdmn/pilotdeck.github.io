#
# PilotDeck documentation site — docs + V2 demo SPA, served by nginx.
#
# Two-stage build:
#   1. Node 22 builder: installs root and pilotdeck-ui deps, runs the
#      vite demo build (static/demo/), then the docusaurus build (build/).
#   2. nginx runtime: copies build/ under the baseUrl path
#      (/pilotdeck.github.io/) so URL hierarchy matches GitHub Pages.
#
# Defaults preserve the GitHub-Pages-style baseUrl. Override via
#     docker run -p 8080:80 ghcr.io/mmrdmn/pilotdeck-website:latest
#
# Final image is ~30 MB (nginx-alpine + a few MB of static assets).

# Use Docker Hub by default for CI reliability. Builders in regions that need
# a registry mirror can still override this with `--build-arg MIRROR=...`.
ARG MIRROR=docker.io
ARG NODE_VERSION=22-alpine
ARG NGINX_VERSION=1.27-alpine

# ─── Stage 1: builder ────────────────────────────────────────────────────
FROM ${MIRROR}/library/node:${NODE_VERSION} AS builder

# pilotdeck-ui pulls in several native modules (better-sqlite3, bcrypt,
# node-pty, sharp) for its server runtime. The vite demo build doesn't
# exercise those code paths, but npm install still tries to compile
# them on platforms without prebuilt binaries. Provide the toolchain
# so the install step never falls back to source-build failures.
RUN apk add --no-cache --virtual .build-toolchain python3 make g++ git

WORKDIR /app

# Copy and install root dependencies first — these change less often,
# so the layer is reused on most rebuilds.
COPY package.json package-lock.json ./
RUN npm install --no-audit --no-fund

# pilotdeck-ui dependencies next — same caching idea, but separate so a
# docs-only edit doesn't bust the V2 frontend's install layer. The
# scripts/ directory must be present BEFORE `npm install` because
# pilotdeck-ui/package.json declares a `postinstall` that runs
# scripts/fix-node-pty.js; without it npm aborts the install.
COPY pilotdeck-ui/package.json pilotdeck-ui/package-lock.json ./pilotdeck-ui/
COPY pilotdeck-ui/scripts/ ./pilotdeck-ui/scripts/
WORKDIR /app/pilotdeck-ui
RUN npm install --no-audit --no-fund
WORKDIR /app

# Now bring in the rest of the source. .dockerignore should already
# exclude node_modules, build artifacts, and .git so the COPY is small.
COPY . .

# Build the V2 demo into static/demo/, then the docusaurus site itself.
# The order matters: docusaurus build copies static/* into build/* so
# the demo bundle must exist on disk before the site build runs.
RUN npm run build:demo
RUN npm run build

# ─── Stage 2: runtime ────────────────────────────────────────────────────
FROM ${MIRROR}/library/nginx:${NGINX_VERSION} AS runtime

# Drop nginx's stock site config so ours is the only one active.
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/site.conf

# Mirror GitHub Pages' URL hierarchy: the site lives at
# /pilotdeck.github.io/<path> so absolute asset URLs baked into the
# build keep resolving without rewrites.
COPY --from=builder /app/build/ /usr/share/nginx/html/pilotdeck.github.io/

# Tiny root index so a visitor hitting http://host/ doesn't see a 404
# — meta-refresh forwards them to the baseUrl path.
RUN printf '%s\n' \
    '<!doctype html>' \
    '<meta charset="utf-8">' \
    '<meta http-equiv="refresh" content="0;url=/pilotdeck.github.io/">' \
    '<title>PilotDeck</title>' \
    '<link rel="canonical" href="/pilotdeck.github.io/">' \
    > /usr/share/nginx/html/index.html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -q --spider http://localhost/pilotdeck.github.io/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
