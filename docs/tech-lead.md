# Monthly Tech Lead Checklist

-   [ ] status of team's health
-   [ ] dependencies up-to-date
-   [ ] entire team engaged in meaningful code reviews
-   [ ] README provides all new joiners need
-   [ ] upskilling is a regular team activity

## Team Health

WIP

https://lethain.com/durably-excellent-teams

## Regular Dependency Updates

Regular dependency updates are important for long-lasting codebases. For short-term projects and one-off scripts nothing might ever have to change, but for software that is in use for a long enough period of time everything will likely have to change, eventually. Regular dependency updates are a good practice because they chunk the amount of changes we have to review and navigate into a manageable amount and save us from problematic version migrations. They keep our systems in tip-top shape and help us to avoid technical debt.

Make them regular because:

-   You want to keep the number of changes you have to review for any dependency at any one time minimal.
-   You want to avoid deferring breaking changes and gathering them all up into a problematic, complex, and hard to understand series of version migrations.
-   You want to resolve security vulnerabilities promptly.
-   You want new improvements and fixes to flow into your project regularly.
-   You want your technical debt to be minimal and manageable.

You want to do this knowledgeably and with care. This is not an automated, thoughtless process. You want to review the change log of every dependency as you update. For prod dependencies in particular you will want to glance at the open issues that have recently come in to avoid problematic versions.

Here's a short example guide to the process for frontend teams that can be added to a README or CONTRIBUTING page.

**Update Dependencies**

Regularly updating dependencies and dev dependencies is very beneficial for long lasting codebases.

-   Run `npm outdated` to list dependencies in need of review.
-   Review release notes and/or change logs for the list of dependencies with new updates.
    -   Is there new functionality this codebase can use?
    -   Do changes need to be made to upgrade?
    -   Are any problematic issues associated with these changes?
-   Run `npx browserslist-lint` to update `caniuse-lite` database.

## Meaningful and Wide Code Reviews

WIP

## Ensuring Your README Works

Many READMEs miss the mark for the types of readers who are most likely to read them: new joiners and maintainers returning after a long absence. READMEs should have all the information these readers need to independently and speedily get setup and contributing.

Your README needs to have a detailed and up-to-date list of support tickets that need to be raised for a new joiner, local development instructions, and important contextual knowledge like links to dependency documentation. And this information should be ordered so that these important readers can easily find it.

Take time to evaluate and improve your READMEs.

-   Does your README support onboarding new team members?
-   Is your README all someone needs to have to get up and running?
-   Is your README up-to-date?
-   Is the most relevant information easy to find?

## Upskilling your Team

You have an important role to play in developing the skills and capabilities of your team. You have several powerful means available to you:

-   Meaningful code reviews are one of the most powerful ways and have been described above.
-   Having an informal time for the team to share what they're learning. Tacking this on once-a-week to the end of a standup keeps it informal. No one has to prepare or even share. But I've found that there are usually one or two team members who have something they'd like to talk about.
-   When was the last time you or your team reviewed the documentation for the tools and libraries you regularly used? Regular documentation review is an effective way to improve your mastery of the tools of the trade. You can be strategic about the documentation your team reviews; ask your team to review a section of documentation that's relevant to one of the major PRs your team will be working on soon, discuss what you've learned in your team's communications, reference that documentation in the code review process.
