# node-typescript
A very opinionated template for Node.js applications written in TypeScript.

## Yarn package manager
You need to have `yarn` installed. To install, run `npm install -g yarn`.

This template uses the `yarn` package manager in the version `berry` with the `nodeLinker` for maximum compatibility.
Dependency installations are nearly instant and work offline due to the use of a cache in `.yarn/cache`.

Documentation: https://yarnpkg.com/getting-started

It is recommended to always pin dependencies except peer dependencies to a specific version.
```
# Install a package to dependencies.
yarn add -E package
# Install a package to devDependencies.
yarn add -DE package
```

## Important commands
```
# Install dependencies
yarn

# Run app in development mode with hot reload (powered by nodemon and ts-node)
yarn dev

# Build app
yarn build

# Check for TypeScript errors
yarn tsc:check

# Serve app in production
yarn start
```

## Static code analysis and code formatting
We use the opinionated [Prettier](https://prettier.io) code formatter along with [ESLint](https://eslint.org) for static code analysis.
ESLint is configured to automatically format the code based on Prettier rules and apply recommended rules based on `eslint` and `@typescript-eslint`.

This template automatically configures IntelliJ based IDEs (PHPStorm, Webstorm, ...) and Visual Studio Code to apply ESLint fixes on every file save.

You can also run ESLint from the command line. Remember that this also runs prettier, so you should never need to run prettier manually.
```
# Lint all files
yarn lint
# Lint and auto-fix all files
yarn lint:fix
```

## Environment variables
You can create a `.env` file in the root of the directory. The variables will be automatically available in development when using `yarn dev`. This uses the `dotenv` package under the hood by running `node -r dotenv/config` (see `nodemon.json`).

## Renovate bot
[Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate) is pre-configured to keep dependencies pinned and up-to-date.
You have to install Renovate in your GitHub repo for this to work. Renovate can be configured in `.github/renovate.json`.
Delete the file if you dont want to use the Renovate bot.

## Docker
There is a sample `Dockerfile` which will produce a lightweight image of your application, which only includes production dependencies and code. It is based on alpine Linux.

```
# Build docker image
docker build -t myapplication .
```

## Don't like something that is configured in this repo?
This repository is meant to be a good starting point for Node.js applications written in TypeScript.
It is very opinionated, but can save a lot of time.
You think there's something that could be changed which would help everybody? Feel free to open a pull requeqst!
