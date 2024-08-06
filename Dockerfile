# syntax = docker/dockerfile:1.8

# BASE
FROM node:21.7.3-bullseye-slim AS base

## Setup pnpm
RUN corepack enable

## Let pnpm think we are in a CI environment so interactive prompts are skipped.
ENV CI=true

# BUILDER
FROM base as builder

## Build as non-root user
USER node
WORKDIR /home/node/build
RUN pnpm config set store-dir /home/node/.pnpm-store

## Fetch dependencies: https://pnpm.io/cli/fetch
COPY --chown=node:node pnpm-lock.yaml ./
RUN --mount=type=cache,target=/home/node/.pnpm-store,id=pnpm-store,uid=1000,gid=1000 \
    pnpm fetch

## Install dependencies
COPY --chown=node:node package.json ./
RUN --mount=type=cache,target=/home/node/.pnpm-store,id=pnpm-store,uid=1000,gid=1000 \
    pnpm install --offline

## Build app
COPY --chown=node:node . .
RUN pnpm run build

## Prune dev dependencies
RUN --mount=type=cache,target=/home/node/.pnpm-store,id=pnpm-store,uid=1000,gid=1000 \
    pnpm prune --prod

# FINAL IMAGE
FROM base

## Runtime environment
ENV NODE_ENV=production

## Run as non-root user
USER node
WORKDIR /home/node/app
RUN pnpm config set store-dir /home/node/.pnpm-store

EXPOSE 8080/tcp

## Copy runtime files from builder to final image
COPY --from=builder --chown=node:node /home/node/build/package.json ./
COPY --from=builder --chown=node:node /home/node/build/pnpm-lock.yaml ./
COPY --from=builder --chown=node:node /home/node/build/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/build/dist/ ./dist/

CMD ["pnpm", "run", "start"]
