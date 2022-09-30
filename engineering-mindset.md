# Engineering Mindset

This document presents my general engineering philosophy and rationale behind selected project decisions. Consider it an engineering best practices guide.

I'm also creating content for several other guides. Much of this material is prepared for apprentices at my company to help them become strong individual contributors.

-   [Skill Development](./docs/skill-development.md) - engineering is much more than coding
-   [Helpful Habits](./docs/helpful-habits.md) - small practices for compounding gains
-   [Tools of the Trade](./docs/tools-of-trade.md) - utilizing the power of your toolkit

## Setting a Browser Support Baseline

Only support relatively modern browsers. The simplest way to test user agent support is through the `@support` CSS conditional rule. Supporting relatively modern browsers enables usage of new JS, CSS, and Web API features without the need to polyfill. Users on outdated browsers are gently reminded to update or switch improving the future for both users and developers.

Using the browser support baseline I've set in `outdated-browser-wall.css` with [browserslist](https://github.com/browserslist/browserslist) I can improve the targeting accuracy of some specific frontend tools. The browser support baseline is replicated in my `.browserslistrc` file.

## Code Formatting

I am using [prettier](https://prettier.io) to format this project code, particularly when files are staged to be commited. Prettier is a low configuration tool with very limited config options. In this sense it's opinionated and makes many code formatting decisions for you. I use a simple configuration file with two exceptions to prettier's defaults: using single quotes in JavaScript and TypeScript files and setting a 4 space indentation level on markdown files.

Formatting code is an important step to complete before code review to eliminate whole classes of nit-picky issues. Reviewers can focus on more substantive issues. Rework is minimized.

The formatter can be run manually over all files with `npx prettier --write .` or via `npm run format` or over any subset of files with `npx prettier --write "src/**/*.css"` as one example.

When manually formatting files it's polite to keep formatting changes in a separate commit from other code changes. This makes formatting changes easy to isolate during code reviews.

## Why do I prefer YAML for my configuration files?

Both JSON and YAML are data serialization languages, but YAML supports comments. YAML is also becoming the preferred configuration language for infrastructure, being perceived as more human readable and simpler than JSON. I've chosen to configure my tooling with YAML wherever possible to align myself with current trends in configuration and to build familiarity with this configuration language.

**Resources to learn YAML**

-   [Learn YAML in Y minutes](https://learnxinyminutes.com/docs/yaml/)
-   [Learn YAML](https://www.yaml.info/learn/index.html)
