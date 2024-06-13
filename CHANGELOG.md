# [2.0.0](https://github.com/IPS-Hosting/node-typescript-starter/compare/v1.0.1...v2.0.0) (2024-06-13)


### Features

* update starter template ([e57dba3](https://github.com/IPS-Hosting/node-typescript-starter/commit/e57dba37d72b32ae5476853e130f41a1ed8b5895))


### BREAKING CHANGES

* Replace yarn with pnpm 9
* replaced eslint and prettier with biome
Use the pnpm check and pnpm check —write commands and install the Biome VSCode extension
* Minimum Node.js version set to 20
* Replace jest with vitest
vitest is mostly compatible with jest API. You need to import test functions from vitest manually. There is a new pnpm test:ui command to visualize tests and their result.
* Removed dotenv dependency
Node.js now supports .env files natively using the —env-file=.env flag.
* Moved from CJS to ESM
* renovate is now run against main instead of dev

- moved fibonacci.ts to lib/ subdirectory (test coverage is calculated for the lib/ subdirectory)
- updated CI to Ubuntu 22 LTS and Node.js 20 LTS
- Updated all dependencies
- Update tsconfig.json to use @tsconfig/strictest and @tsconfig/node-lts
- Renamed src/index.ts to src/main.ts
- Use Top Level Await in main.ts
- Correctly configure semantic release for next, alpha and beta releases

Signed-off-by: Pascal Sthamer <10992664+P4sca1@users.noreply.github.com>

## [1.0.1](https://github.com/IPS-Hosting/node-typescript-starter/compare/v1.0.0...v1.0.1) (2021-04-22)


### Bug Fixes

* update package.json version with every release ([a6ed2f4](https://github.com/IPS-Hosting/node-typescript-starter/commit/a6ed2f4eaa826561b780cfd20d32872d57174104))

# 1.0.0 (2021-04-11)


### Bug Fixes

* update lockfile ([c578607](https://github.com/IPS-Hosting/node-typescript-starter/commit/c578607246654bcc41da07064402710d9d4296ad))


### Features

* add jest setup and example ([fd9f781](https://github.com/IPS-Hosting/node-typescript-starter/commit/fd9f781d2fa25a2faee5dacb8512b08da70a698a)), closes [#1](https://github.com/IPS-Hosting/node-typescript-starter/issues/1)
