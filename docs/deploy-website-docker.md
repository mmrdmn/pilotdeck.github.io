# Website Docker image (GHCR)

Public image for the docs site + V2 demo SPA (nginx).

| Field | Value |
|-------|--------|
| Registry | `ghcr.io/mmrdmn/pilotdeck-website` |
| Moving tag | `latest` (main branch only) |
| Pinned tag | `sha-<short-commit>` (recommended for production) |

## Rainbond / self-host

1. Wait for [Build & publish Docker image](https://github.com/mmrdmn/pilotdeck.github.io/actions/workflows/docker.yml) to finish successfully.
2. Set the component image to **`ghcr.io/mmrdmn/pilotdeck-website:sha-<commit>`** (not only `latest`) so each deploy pulls the intended digest.
3. Enable **pull image on every deploy** if your platform caches `latest` locally.
4. Site base path: **`/pilotdeck.github.io/`** (not `/`).

## Local smoke test

```bash
docker pull ghcr.io/mmrdmn/pilotdeck-website:latest
docker run --rm -p 8080:80 ghcr.io/mmrdmn/pilotdeck-website:latest
# http://localhost:8080/pilotdeck.github.io/
```
