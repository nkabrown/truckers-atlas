# Engineering Mindset

This document presents my general engineering philosophy and rationale behind selected project decisions. Consider it an engineering best practices guide.

I'm also creating content for several other guides. Much of this material is prepared for apprentices at my company to help them become strong individual contributors.

-   [Skill Development](./docs/skill-development.md) - engineering is much more than coding
-   [Helpful Habits](./docs/helpful-habits.md) - small practices for compounding gains
-   [Tools of the Trade](./docs/tools-of-trade.md) - utilizing the power of your toolkit

## Setting a Browser Support Baseline

-   [browserslist](https://github.com/browserslist/browserslist) - targeted browser list for tooling
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns

Only support relatively modern browsers. The simplest way to test user agent support is through the `@support` CSS conditional rule and I am checking for CSS feature support in `outdated-browser-wall.css`. Supporting relatively modern browsers enables usage of new JS, CSS, and Web API features without the need to polyfill. Users on outdated browsers are gently reminded to update or switch improving the future for both users and developers.

Using the browser support baseline I've set in `outdated-browser-wall.css` with [browserslist](https://github.com/browserslist/browserslist) I can improve the targeting accuracy of some specific frontend tools. The browser support baseline is replicated in my `.browserslistrc` file.

## Code Formatting

-   [prettier](https://prettier.io/) - low configuration opinionated code formatter
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier

I am using [prettier](https://prettier.io) to format this project code, particularly when files are staged to be commited. Prettier is a low configuration tool which strictly limits what can be configured. In this sense it's opinionated and makes many code formatting decisions for you. I use a simple configuration file with minimal exceptions to prettier's defaults, such as, avoiding parentheses in arrow functions, using single quotes in JavaScript and TypeScript files, and setting a 4 space indentation level on markdown files.

Formatting code is an important step to complete before code review to eliminate whole classes of nit-picky issues. Reviewers can focus on more substantive issues. Rework is minimized.

The formatter can be run manually over all files with `npx prettier --write .` or via `npm run format` or over any subset of files with `npx prettier --write "src/**/*.css"` as one example.

When manually formatting files it's polite to keep formatting changes in a separate commit from other code changes. This makes formatting changes easy to isolate during code reviews.

## Linting

-   [eslint](https://eslint.org) - static analysis to find and fix JavaScript problems
-   [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - turn off linting rules that conflict with prettier
-   [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat) - linting for browser compatible code patterns
-   [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) - linting rules for inline scripts in html
-   [eslint-plugin-lit](https://github.com/43081j/eslint-plugin-lit) - linting rules for Lit templating library
-   [eslint-plugin-lit-a11y](https://open-wc.org/docs/linting/eslint-plugin-lit-a11y/overview/) - linting rules for accessibility in lit components
-   [eslint-plugin-wc](https://github.com/43081j/eslint-plugin-wc) - linting rules for custom elements (web components)

I am using [eslint](https://eslint.org) to lint project frontend code, particularly files that are staged to be committed. Eslint statically analyzes JavaScript code looking for code patterns that may cause errors, fall short of best practices, or cause code formatting issues. Each file of code is parsed into an abstract syntax tree (AST). The linter walks down the AST and then back up visiting each node twice. Each node's type triggers related linting rules and the linter collects and reports observed errors and warnings.

I use rules from the `eslint:recommend` configuration file to report common problems. I'm using `eslint-config-prettier` to turn off the layout linting rules related to code formatting since `prettier` handles those issues. I have web component/Lit specific rules from the `wc` and `lit` plugins and extend their recommended rules with a few additions. The `lit-a11y` plugin spots accessibility issues within web components/Lit. I'm using `eslint-plugin-compat` to provide IDE support and linting against my browser support baseline. My JS linting rules are applied to inline scripts in HTML by the `html` plugin.

## Why do I prefer YAML for my configuration files?

Both JSON and YAML are data serialization languages, but YAML supports comments. YAML is also becoming the preferred configuration language for infrastructure, being perceived as more human readable and simpler than JSON. I've chosen to configure my tooling with YAML wherever possible to align myself with current trends in configuration and to build familiarity with this configuration language.

**Resources to learn YAML**

-   [Learn YAML in Y minutes](https://learnxinyminutes.com/docs/yaml/)
-   [Learn YAML](https://www.yaml.info/learn/index.html)
