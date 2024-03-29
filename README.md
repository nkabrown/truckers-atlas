# Trucker's Atlas

**Portfolio Product**

A portfolio product that represents who I am and reflects the level of work I can accomplish.

## Quickstart

```shell
# test npm version, if version < 7 run 'npm install -g npm@latest'
npm --version

# installs exact dependencies and sets up git hooks
npm ci

# start watchers for file changes and run buildless development server
npm run dev

# run test runner
npm run test
```

## Supporting Documentation

**Development Dependencies**

-   [browserslist](https://github.com/browserslist/browserslist) - targeted browser list for tooling
-   [chai](https://www.chaijs.com/) - make testing assertions
-   [concurrently](https://github.com/open-cli-tools/concurrently) - run multiple npm scripts simultaneously
-   [copyfiles](https://github.com/calvinmetcalf/copyfiles) - copy files with the command line
-   [ESLint](https://eslint.org) - static analysis to find and fix JavaScript problems
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns
-   [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - apply linting rules to inline scripts in html
-   [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) - linting rules for Lit templating library
-   [eslint-plugin-lit-a11y](https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/overview/) - linting rules for accessibility in lit components
-   [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) - linting rules for custom elements (web components)
-   [husky](https://github.com/typicode/husky) - easily setup git hooks
-   [lint-staged](https://github.com/okonet/lint-staged) - execute scripts on staged files via git pre-commit hook
-   [lit-analyzer](https://github.com/runem/lit-analyzer/tree/master/packages/lit-analyzer) - static analysis of lit templates
-   [prettier](https://prettier.io) - low configuration opinionated code formatter
-   [TypeScript](https://www.typescriptlang.org/) - strongly typed superset of JavaScript that compiles down to working JavaScript
-   [typescript-lit-html-plugin](https://github.com/microsoft/typescript-lit-html-plugin) - adds intelliSense to VS Code for Lit TypeScript projects
-   [web-dev-server](https://modern-web.dev/docs/dev-server/overview/) - buildless development server
-   [web-test-runner](https://modern-web.dev/docs/test-runner/overview/) - test runner for web applications
-   [wireit](https://github.com/google/wireit) - additional performance and control for npm scripts

**Dependencies**

-   [Lit](https://lit.dev) - web component template rendering library

## Updating Dependencies

Regularly updating dependencies and dev dependencies is very beneficial for long lasting codebases.

-   Run `npm outdated` to list dependencies in need of review.
-   Review release notes and/or change logs for list of dependencies with new updates.
    -   Is there new functionality this codebase can use?
    -   Do changes need to be made to upgrade?
    -   Are any problematic issues associated with these changes?
-   Run `npx update-browserslist-db` to update `caniuse-lite` database.
