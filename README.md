# node-typescript-starter
A very opinionated template for Node.js applications written in TypeScript.

## Using this template
This is a GitHub template repository. You can create a new repository from this template by clicking the green **Use this template** button.
See https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template.

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

## Testing
The testing framework [jest](https://jestjs.io) is pre-configured to work with TypeScript.
Write tests in the test directory and configure jest with the `jest.config.js`.
```
# Run tests
yarn test
# Run tests and watch for file changes
yarn test:watch
```
**Don't need tests?**
1. Run `yarn remove jest ts-jest @types/jest`
2. Remove the `test` directory and `jest.config.js`
3. Change the `test` script in `package.json` to execute `yarn tsc:check` instead.
4. Remove the `test:watch` script in `package.json`

## Environment variables
You can create a `.env` file in the root of the directory. The variables will be automatically available in development when using `yarn dev`. This uses the `dotenv` package under the hood by running `node -r dotenv/config` (see `nodemon.json`).

## GitHub actions
This template comes with 2 actions pre-configured.
There is a free tier to GitHub actions, but depending on the usage, you might be charged. To avoid this, update the spending limit of your GitHub account.
More information: https://docs.github.com/en/github/setting-up-and-managing-billing-and-payments-on-github/managing-your-spending-limit-for-github-actions

### Test workflow
Every pull request automatically gets tested by running `yarn test`. Results will be visible in the Actions tab in the repository and under the pull request.

**Don't want to use the test workflow?** Remove the file `.github/workflows/test.yml`

### Release workflow
On every push to the branches `main` and `next`, the code will be tested using `yarn test` and afterwards `semantic-release` will be run.
[semantic-release](https://semantic-release.gitbook.io/semantic-release/) is a tool to fully automate version management and package publishing.
What this means is on every push this will:
1. Analyze your commit history to find out whether this is a patch, minor or major (breaking) release. This uses the [Angular commit message format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format), so you must author your commits in this format.
2. Bump the version in your `package.json`
3. Generate a changelog which will be written to `CHANGELOG.md`
4. Create a git tag and a release in GitHub which includes the changelog.
5. Notify every PR author if their changes are released.

When pushing to the `next` branch, a pre-release is created.

**Want to publish your package to npm automatically?** Update the `package.json` and configure [@semantic-release/npm](https://github.com/semantic-release/npm).

Because every commit will lead to a new release automatically, you need to work on the `dev` branch and feature branches and only merge your work over to main when you want to draft a release.
See the `semantic-release` website for additional help.

**Don't want to use semantic-release?**
I recommend you to try it out, but I agree that it can be very challenging if you dont have any experience with it, to start writing commits in angular format and working with multiple branches. You can remove the release workflow by doing the following:
1. `yarn remove semantic-release @types/semantic-release @semantic-release/changelog @semantic-release/git`
2. Remove the `release` section in `package.json`
3. Remove the file `.github/workflows/release.yml`

## Renovate bot
[Renovate](https://www.whitesourcesoftware.com/free-developer-tools/renovate) is pre-configured to keep dependencies pinned and up-to-date.
Renovate will make PRs against the `dev`branch. This and more can be configured in `.github/renovate.json`. You have to install Renovate in your GitHub repo for this to work.

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

## Don't like something that is configured in this repo?
This repository is meant to be a good starting point for Node.js applications written in TypeScript.
It is very opinionated, but can save a lot of time. You can customize everything to your liking after using this template.
You think there's something that could be changed which would help everybody? Feel free to open a pull requeqst!
