# Base
FROM node:14-alpine as base

# Builder
FROM base as builder

# Install yarn.
RUN apk add --update --no-cache yarn

WORKDIR /home/node

# Install dependencies
COPY --chown=node:node .yarn/ .yarn/
COPY --chown=node:node ["package.json", "yarn.lock", ".yarnrc.yml", "./"]
RUN yarn install

# Build code and remove dev dependencies
COPY --chown=node:node . .
RUN yarn build && yarn workspaces focus --production

# Final image
FROM base

USER node
WORKDIR /home/node

ENV NODE_ENV=production

# Copy only required files from builder to final image.
COPY --from=builder --chown=node:node /home/node/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /home/node/package.json ./
COPY --from=builder --chown=node:node /home/node/dist/ ./dist/

CMD ["yarn", "start"]
