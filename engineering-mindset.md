## Code Formatting

I am using [prettier](https://prettier.io) to format this project code, particularly when files are staged to be commited. Prettier is a low configuration tool with very limited config options. In this sense it's opinionated and makes many code formatting decisions for you. I use a simple configuration file with two exceptions to prettier's defaults: using single quotes in JavaScript and TypeScript files and setting a 4 space indentation level on markdown files.

Formatting code is an important step to complete before code review to eliminate whole classes of nit-picky issues. Reviewers can focus on more substantive issues. Rework is minimized.

When manually formatting files it's polite to keep formatting changes in a separate commit from other code changes. This makes formatting changes easy to isolate during code reviews.
