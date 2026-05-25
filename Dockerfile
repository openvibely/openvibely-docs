# =============================================================================
# Stage 1: Build the static docs site
# =============================================================================
FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json ./
COPY scripts ./scripts
COPY public ./public
COPY src ./src

RUN npm run build

# =============================================================================
# Stage 2: Collect the minimal Node runtime files needed by scratch
# =============================================================================
FROM node:22-alpine AS node-runtime

# =============================================================================
# Stage 3: Scratch runtime for the generated static site
# =============================================================================
FROM scratch AS runtime

LABEL org.opencontainers.image.title="OpenVibely Docs" \
      org.opencontainers.image.description="Static documentation website for OpenVibely" \
      org.opencontainers.image.url="https://github.com/openvibely/openvibely" \
      org.opencontainers.image.source="https://github.com/openvibely/openvibely" \
      org.opencontainers.image.licenses="MIT"

WORKDIR /app

ENV NODE_ENV=production \
    PORT=4173 \
    DOCS_ROOT=/app/dist

COPY --from=node-runtime /lib/ld-musl-*.so.1 /lib/
COPY --from=node-runtime /usr/lib/libgcc_s.so.1 /usr/lib/
COPY --from=node-runtime /usr/lib/libstdc++.so.6* /usr/lib/
COPY --from=node-runtime /usr/local/bin/node /usr/local/bin/node
COPY --from=builder /app/dist /app/dist
COPY scripts/serve.mjs /app/scripts/serve.mjs

EXPOSE 4173

USER 10001:10001

CMD ["/usr/local/bin/node", "/app/scripts/serve.mjs"]
