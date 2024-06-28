# node-typescript-starter
A very opinionated template for Node.js applications written in TypeScript.

## Features
- Dev Server with automatic restart on file changes and fast transpilation
- Uses ECMAScript Modules (ESM)
- Automatic SemVer release management using `semantic-release`
- Testing using `vitest`
- Fast formatting and linting powered by Biome
- GitHub actions for PR testing and releases
- Renovate bot for dependency management 
- Lightweight docker image
- Editor configuration for Visual Studio Code

## Using this template
This is a GitHub template repository. You can create a new repository from this template by clicking the green **Use this template** button.
See https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template.

### First steps
- Install recommended Visual Studio Code extensions
- Update the `name`, `description`, `version`, and `license` fields in the `package.json` file 
- Update the `LICENSE` file according to your needs
- Update or remove the `CHANGELOG.md` file
- Update this `README.md` file according to your needs
- Install dependencies using `pnpm i` (see below)
- Start writing code in the `/src` directory. The `/src/main.ts` file is the entrypoint of your application.

## Version information
* Node.js **20**
* TypeScript **5**
* PNPM **9**

See `package.json` for details.

## pnpm package manager
This project uses pnpm. You can use it via corepack, which is a Node.js built-in tool for managing package managers. Run `corepack install` if you have not used corepack before. Learn more at https://nodejs.org/api/corepack.html.

Documentation: https://pnpm.io/pnpm-cli 

```
pnpm add -E package # Install package to dependencies
pnpm add -DE package # Install package to devDependencies
# The -E flag is used for dependency pinning (see below).
```

## Important commands
```sh
# Install dependencies
pnpm i

# Run app in development mode with hot reload
pnpm dev

# Test app
pnpm test

# Build app. JavaScript is emitted to the /dist directory.
pnpm build

# Serve app in production
pnpm start
```
See the `scripts` section in `package.json` for a full list.

## Static code analysis and code formatting
This project uses the Rust-based toolchain [Biome](https://biomejs.dev) for linting and formatting. It is used in favor of ESLint and Prettier due to its speed and ease of use.
Visual Studio Code is configured to format TypeScript, JavaScript and JSON files automatically on save using the Biome VSCode extension.
You can also run Biome from the command line.
```sh
# Check for formatting or linting issues
pnpm check

# Format files and fix linting issues
pnpm check --write
```

## Testing
The testing framework [vitest](https://vitest.dev) is used in this project. It is configured using the `vitest.config.ts` file.
Tests are written in the `/test` subdirectory. Coverage is collected for the `/src/lib` subdirectory.
```
# Run tests once
pnpm test

# Run tests and automatically re-run tests on file changes
pnpm test:watch

# Like test:watch but exposes a browser UI
pnpm test:ui

# Run tests and collect coverage
pnpm test:coverage
```

**Don't want to use tests?**
1. Run `pnpm remove vitest @vitest/ui`
2. Remove the `test` directory and `vitest.config.ts`
3. Change the `test` script in `package.json` to execute `pnpm run tsc:check` instead.
4. Remove the `test:watch`, `test:coverage`, and `test:ui` scripts in `package.json`

## Environment variables
You can create a `.env` file in the root directory. It is ignored from git and contains secrets that the application uses. Never hardcode secrets into your code! Update the `nodemon.json` file to run node with the `--env-file` flag: `node --env-file=.env` to automatically load the entries from the `.env` file.

## GitHub actions
This template comes with 2 actions pre-configured.
There is a free tier to GitHub actions, but depending on the usage, you might be charged. To avoid this, update the spending limit of your GitHub account.
More information: https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions

### Test workflow
Every pull request automatically gets tested by running `pnpm test`. Results will be visible in the Actions tab in the repository and under the pull request.

**Don't want to use the test workflow?** Remove the file `.github/workflows/test.yml`

### Release workflow
On every push to the branches `main`, `next`, `alpha`, and `beta`, the code will be tested using `pnpm test` and afterwards `semantic-release` will be run.
[semantic-release](https://semantic-release.gitbook.io/semantic-release/) is a tool to fully automate version management and package publishing.
What this means is on every push this will:
1. Analyze your commit history to find out whether this is a patch, minor or major (breaking) release. This uses the [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format), so you must author your commits in this format.
2. Bump the version in your `package.json`
3. Generate a changelog which will be written to `CHANGELOG.md`
4. Create a git tag and a release in GitHub which includes the changelog.
5. Notify every PR author if their changes are released.

Different releases are created, depending on the branch you commit to. Check out https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#branch-types to learn more.

**Want to publish your package to npm automatically?** Install `@semantic-release/npm` and update the `package.json` `release` configuration. Check out https://github.com/semantic-release/npm for more information. Make sure to remove the `"private": true` setting from `package.json`.

Because every commit will lead to a new release automatically, you typically work on fix and feature branches (or a general dev branch) and only merge your work over to main when you want to draft a release.
See the `semantic-release` website for additional help.

**Don't want to use semantic-release?**
I recommend you to try it out, but I agree that it can be very challenging if you dont have any experience with it, to start writing commits in angular format and working with multiple branches. You can remove the release workflow by doing the following:
1. `pnpm remove semantic-release @types/semantic-release @semantic-release/changelog @semantic-release/git`
2. Remove the `release` section in `package.json`
3. Remove the file `.github/workflows/release.yml`

## Renovate bot
[Renovate](https://www.mend.io/renovate/) is pre-configured to keep dependencies pinned and up-to-date.
Renovate will make PRs against the `main` branch. This and more can be configured in `.github/renovate.json`. You have to install Renovate in your GitHub repo for this to work.

**Don't want to use Renovate?** Remove the file `.github/renovate.json`

## Dependency pinning
It is recommended that you always pin your dependencies and let Renovate author PRs to update your dependencies.
See https://docs.renovatebot.com/dependency-pinning/ for more information.
If you use Renovate, it is pre-configured to pin your dependencies and you can use the `-E` flag of `pnpm` to pin dependencies during installation.

However if you are authoring a library to be used by others or dont want to use a tool like Renovate, it might be better to not pin your dependencies, but use version ranges.
Just leave out the `-E` flag when installing dependencies. If you are using renovate, edit the `.github/renovate.json` file and remove `:pinVersions` in line 5.

## Docker
There is a sample `Dockerfile` which will produce a lightweight image of your application, which only includes production dependencies and compiled code. It is based on `node:20.14.0-bullseye-slim`.

```
# Build docker image
docker build -t myapplication .
```

You might want to use the `@semantic-release/exec` plugin or a specific plugin for docker to automatically build and push images during a release.

## Don't like something that is configured in this repo?
This repository is meant to be a good starting point for Node.js applications written in TypeScript.
It is very opinionated, but can save a lot of time. You can customize everything to your liking after using this template.
You think there's something that could be changed which would help everybody? Feel free to open a pull request!
