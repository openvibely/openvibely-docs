# Custom Pages

Build project-specific dashboards and tools inside OpenVibely, then use the page's chat to analyze data, take actions, or change how it works.

## Create A Page

1. Open **Settings → Custom pages**.
2. Choose **Describe** from the add menu.
3. Select the destination project and describe what the page should do.
4. Submit to start a task that builds and publishes the page.

You can also ask a coding task to create a custom page. Published pages appear in the left navigation, with additional pages under **More pages**. All projects shows pages from projects you can access.

## Chat And Edit

Open the page's chat panel to ask questions, use its available actions, or request changes. The panel supports model selection, attachments, clarification questions, queued follow-ups, steering, and Stop. Its conversation persists when you leave and return.

The assistant can edit the page's files and publish the changes. Publication refreshes the page while preserving its URL, saved data, and conversation. Pages explicitly supply context to their chat; the assistant does not automatically read everything displayed inside the page.

## Saved Data And Backend Actions

Custom pages can keep their own saved data and settings. Each page instance belongs to a project and has its own state and conversation. Updating the page preserves them, and the installed page remains available after its creation task’s worktree is deleted.

Pages can include a backend that processes data and performs actions. Page buttons and the assistant can use the same actions, so you can work through the interface or ask the page’s chat to do it. Available actions and data depend on what the page implements; its chat receives the context the page explicitly shares.

## Install And Manage

For an existing package, choose **Install package** and upload a folder containing `plugin.json`, or use the advanced server folder path. Uploads support up to 2,000 files and 64 MiB.

Search the settings cards to find installed pages. Disable a page to stop its AI work and backend while keeping its saved data and chat. Removing a page instance deletes that instance's data and conversation. Updating an existing page preserves both.

Viewing requires project view access. Chat, edits, and page actions require edit access; package administration requires organization admin access. Native page backends run on the host and are not process-sandboxed, so install only packages you trust.

## Related Pages

See [Chat](chat.html), [Tasks](tasks.html), [Project Sharing](projects.html#sharing-and-ownership), and [Settings](settings.html).
