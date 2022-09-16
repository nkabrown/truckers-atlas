# Tools of the Trade

## Git

**Developer specific .gitignore**

Your project has a `.gitignore` file with a list of patterns that match files and directories your team wants git to exclude. What do you do with files and directories that are specific to your own work? For example, you might create an `issues` directory filled with markdown files to log your thoughts and learnings for each assigned story. You wouldn't want to add `issues/` to your project's `.gitignore` since `issues/` is specific to you and not other team members. And you don't want to see `issues/` in your untracked file list every time you run `git status`.

Git provides a solution. In the `.git` directory there is an `info/exclude` file. Here you can add the exclusion patterns for the files that belong to you and shouldn't be shared with other team members. For more information run `git help ignore`.
