# node-typescript-starter
A very opinionated template for Node.js applications written in TypeScript.

## Version information
* Node.js **14**
* TypeScript **4.2**
* ESLint **7**
* Yarn **berry**

## Yarn package manager
You need to have `yarn` installed. To install, run `npm install -g yarn`.

This template uses the `yarn` package manager in the version `berry` with the `nodeLinker` for maximum compatibility.
Dependency installations are nearly instant and work offline due to the use of a cache in `.yarn/cache`.

Documentation: https://yarnpkg.com/getting-started

```
# With dependency pinning
yarn add -E package # Install package to dependencies
yarn add -DE package # Install package to devDependencies

# Without dependency pinning
yarn add package # Install package to dependencies
yarn add -D package # Install package to devDependencies
```
`yarn` is configured to automatically install corresponding `@types/` packages. (See https://yarnpkg.com/api/modules/plugin_typescript.html)

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
You have to install Renovate in your GitHub repo for this to work.

**Don't want to use Renovate?** Remove the file `.github/renovate.json`

## Dependency pinning
It is recommended that you always pin your dependencies and let Renovate author PRs to update your dependencies.
See https://docs.renovatebot.com/dependency-pinning/ for more information.
If you use Renovate, it is pre-configured to pin your dependencies and you can use the `-E` flag of `yarn` to pin dependencies during installation.

However if you are authoring a library to be used by others or dont want to use a tool like Renovate, it might be better to not pin your dependencies, but use version ranges.
Just leave out the `-E` flag when installing dependencies. If you are using renovate, edit the `.github/renovate.json` file and remove `:pinVersions` in line 5.

## Docker
There is a sample `Dockerfile` which will produce a lightweight image of your application, which only includes production dependencies and code. It is based on alpine Linux.

```
# Build docker image
docker build -t myapplication .
```

## Other recommendations
Automate version management and package publishing e.g. using [semantic-release](https://semantic-release.gitbook.io/semantic-release/).

## Don't like something that is configured in this repo?
This repository is meant to be a good starting point for Node.js applications written in TypeScript.
It is very opinionated, but can save a lot of time. You can customize everything to your liking after using this template.
You think there's something that could be changed which would help everybody? Feel free to open a pull requeqst!
