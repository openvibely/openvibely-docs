# Keyboard Shortcuts

Open **Settings → Shortcuts** to search actions and filter by category in the app. This reference covers the shortcuts listed there, followed by additional contextual controls.

**Mod** means **Command (⌘)** on macOS and **Ctrl** on Windows/Linux. Keys joined with `+` are pressed together. “Forward Delete” means Delete on a typical Windows keyboard or Fn+Delete on a Mac keyboard, not Mac Backspace.

Shortcuts depend on where focus is. Dialogs, menus, text fields, and editors can take priority over workspace navigation. The context column explains where each action works; Tab can move focus to buttons, rows, tabs, and panel dividers.

## Navigation

Move between projects, tasks, and automations.

| Action | Keys | Context |
|---|---|---|
| Open project menu | Mod + Shift + K | Requires the project-menu button to be visible; other dialogs must be closed. |
| Previous project tab | Mod + Shift + ← | Requires at least two visible project tabs. Works from the composer; not other text fields. |
| Next project tab | Mod + Shift + → | Requires at least two visible project tabs. Works from the composer; not other text fields. |
| Open breadcrumb menu | Mod + K | On a task or automation page with a visible breadcrumb. Not on Settings or list pages. |
| Previous task | Mod + Shift + , | On task pages, including the composer. Stops at the start; New task opens the last item. |
| Next task | Mod + Shift + . | On task pages, including the composer. Stops at the end; New task opens the first item. |
| Last visited task | Mod + Shift + L | Requires a previous task visit in this project and browser session. Works from the task composer. |
## Task workspace

Navigate the task list and inspect your work.

| Action | Keys | Context |
|---|---|---|
| Toggle task list | Mod + B | Show or hide the left task list. |
| Previous task in list | Mod + Shift + ↑ | Task-list mode only; skips collapsed groups. Works from the composer, not other text fields. |
| Next task in list | Mod + Shift + ↓ | Task-list mode only; skips collapsed groups. Works from the composer, not other text fields. |
| Toggle task details | Mod + Shift + B | On task pages, including New task. Opens or closes the details panel. |
| Toggle changes view | Mod + Shift + D | On a saved task. Not available on New task or while a modal details panel is open. |
| Open task actions | Shift + F10 | When a task row has focus. |
## Composer

Write messages and revisit earlier inputs.

| Action | Keys | Context |
|---|---|---|
| Send message | Enter | From the composer. |
| Insert a new line | Shift + Enter | From the composer. |
| Steer the current turn | Mod + Enter | When a response is running and steering is available. |
| Previous message in history | ↑ | Composer must have saved message history. Start from the first line with no selection. |
| Next message in history | ↓ | Only while browsing message history, with no selection; eventually restores your draft. |
| Exit message history | Esc | Only while browsing composer message history. Restores your draft. |
| Jump to previous message | ⌘ + ↑ | In the conversation or its composer. macOS only. |
| Jump to next message | ⌘ + ↓ | In the conversation or its composer. macOS only. |
## Menus & panels

Use these when the relevant control has keyboard focus.

| Action | Keys | Context |
|---|---|---|
| Move through picker results | ↑ or ↓ | With the project or breadcrumb picker open and focused. |
| Choose a picker result | Enter | With the project or breadcrumb picker open and focused. |
| Close the picker | Esc | With the project or breadcrumb picker open. |
| Focus adjacent project tab | ← or → | Focus a project tab first. Moves focus; Enter opens that project. |
| Focus first or last project tab | Home or End | Focus a project tab first. Moves focus; Enter opens that project. |
| Close a project tab | Forward Delete | Focus the project tab first. Uses forward delete, not the Mac backspace key. |
| Resize task list | ← or → | When the task-list divider has focus. Left narrows the list; Right widens it by 20 pixels. |
| Resize details panel | ← or → | When the details-panel divider has focus. Left widens the panel; Right narrows it by 20 pixels. |
| Set minimum panel width | Home | When the details-panel divider has focus. Sets its preferred width to 340 pixels. |
| Set maximum panel width | End | When the details-panel divider has focus. Sets its preferred width to 720 pixels. |
## Automations

Navigation on automation pages; editor shortcuts only in the builder.

| Action | Keys | Context |
|---|---|---|
| Previous automation | Mod + Shift + , | On an existing automation. Does not run inside text fields or the YAML editor. |
| Next automation | Mod + Shift + . | On an existing automation. Does not run inside text fields or the YAML editor. |
| Last visited automation | Mod + Shift + L | Requires a previous automation visit. Does not run inside text fields or the YAML editor. |
| Indent YAML | Tab | Insert two spaces in the YAML editor. |
| Unindent YAML | Shift + Tab | Remove up to two leading spaces. |
| Open automation node | Enter or Space | When a node on the builder canvas has focus. Opens its details panel. |
| Remove automation node | Delete or Backspace | When a node on the builder canvas has focus. |
| Move automation node | ← or → or ↑ or ↓ | When a node on the builder canvas has focus. Moves it 10 pixels in that direction. |
| Remove a connection | Delete or Backspace | When a connection has focus. |
## File previews

Use these while a file preview is open.

| Action | Keys | Context |
|---|---|---|
| Previous file | ← | Outside text fields and spreadsheet grids. |
| Next file | → | Outside text fields and spreadsheet grids. |
| Zoom in | + | In image and PDF previews. |
| Zoom out | − | In image and PDF previews. |
| Reset image zoom | 0 | In image previews. |
| Previous PDF page | PageUp or ↑ | In a PDF preview. |
| Next PDF page | PageDown or ↓ | In a PDF preview. |
| Close preview | Esc | Return to the conversation. |
## Schedule

Shortcuts for the schedule calendar.

| Action | Keys | Context |
|---|---|---|
| Select a date or time | Enter or Space | When a calendar day or hour has focus. |
| Clear selection | Esc | Also closes menus and cancels an active gesture. |

## Additional Contextual Controls

| Action | Keys | Context |
|---|---|---|
| Open composer model menu | Mod + M | In Chat or a task thread. |
| Navigate model choices | ↑ / ↓ | While the model menu is open. |
| Open provider submenu | → | With a provider row focused in the model menu. |
| Return from provider submenu | ← | Within a provider submenu, outside the search field. |
| Select a model | Enter | With a model choice focused. |
| Open Project Settings menu | Shift + F10 | With an individual project tab focused; unavailable on All projects. Choose **Project Settings** from the menu. |
| Cancel a task-list drag | Esc | While dragging a task between categories. |

## Related Pages

| Page | Why It Matters |
|---|---|
| [Workspace Overview](dashboard.html) | Identify the rail, task list, project tabs, and panels. |
| [Projects](projects.html) | Add, reorder, close, and configure project tabs. |
| [Tasks](tasks.html) | Navigate task zones and manage work. |
| [Composer Model Menu](models.html#composer-model-menu) | Choose models and configure conversation preferences. |
| [Task Diffs & Review](task-diffs-review.html) | Open Changes and review generated work. |
| [Attachments](attachments.html#file-gallery-and-previews) | Browse files and previews. |
| [Automations](automations.html) | Navigate and edit automation graphs. |
