# Tools of the Trade

## Git

**Developer specific .gitignore**

Your project has a `.gitignore` file with a list of patterns that match files and directories your team wants git to exclude. What do you do with files and directories that are specific to your own work? For example, you might create an `issues` directory filled with markdown files to log your thoughts and learnings for each assigned story. You wouldn't want to add `issues/` to your project's `.gitignore` since `issues/` is specific to you and not other team members. And you don't want to see `issues/` in your untracked file list every time you run `git status`.

Git provides a solution. In the `.git` directory there is an `.git/info/exclude` file. Here you can add the exclusion patterns for files that belong to you and shouldn't be shared with other team members. For more information run `git help ignore`.

**Viewing stashed content now and later**

Hopefully you are saving your git stashes with a short message so you can remember their contents with `git stash -m "Write a concise message about this stash's contents"`. Sometimes that message isn't enough or you just want to see what's inside a stash without applying it to your current branch. You can view the stashed changes with `git stash show -p <stash-id>`. You can also save that diff for later reference with `git stash show -p <stash-id> > <file-name>.patch`. For example, `git stash show -p stash@{0} > wip-table-demo.patch`. This utilizes a redirection operator to write the command's output to a file.
