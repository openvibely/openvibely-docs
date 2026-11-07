# Documents With Paperworks

OpenVibely's built-in document skills use **openvibely-paperworks** to let the AI read, create, and edit documents. Ask for a report, spreadsheet, slide deck, or PDF in Chat or a task thread, then review and download the resulting files from the conversation.

You work through ordinary prompts and attachments; you do not need to operate the Paperworks command-line tool yourself.

## What You Can Work With

| Document Skill | Typical Work |
|---|---|
| **Word documents** (`document_word`) | Read and create DOCX files; edit text, styles, tables, and images; add comments or supported tracked replacements; fill tagged template controls. |
| **Spreadsheets documents** (`document_spreadsheets`) | Inspect XLSX values and formulas; create workbooks; update inputs, formulas, formatting, charts, and sheets; trace formula dependencies; import CSV/TSV into XLSX. |
| **Presentations documents** (`document_presentations`) | Read and create PPTX decks; edit slide text, objects, tables, notes, and supported chart data; add, duplicate, or reorder slides. |
| **PDF documents** (`document_pdf`) | Read text and inspect pages; create PDFs; merge, split, extract, reorder, or rotate pages; add watermarks; fill existing form fields. |

These skills support both new files and changes to uploaded files. A request to read or summarize a document can produce a normal conversation response without creating another document.

## Start A Document Request

1. Select the project or task where the work belongs. Use **Chat → Orchestrate** for action-oriented document work, or **+ New task** above the left task list for a dedicated task.
2. Attach any source documents, data, templates, or visual references with the composer file picker or drag-and-drop. Skip attachments when creating a document from scratch.
3. Describe the intended result: audience, content, output format, and any layout or preservation requirements. For an edit, identify the sections, sheets, or slides that should change.
4. Send the request. The main model selects relevant enabled document skills. If a required dependency is missing, the app asks for installation approval and shows progress; the pending skill request resumes after successful installation.
5. Open the returned file link to preview it where supported, or download the file. Review the result and continue in the same conversation for revisions.

For example: “Create a DOCX project brief from these notes, with a summary, milestones, and a risks table. Return the editable Word file.”

## Example Requests

| Goal | Example Prompt |
|---|---|
| Edit a Word document | “Update the timeline in this DOCX. Preserve the other sections and existing styles, and return a revised copy.” |
| Build a spreadsheet | “Turn this CSV into an XLSX workbook with a summary sheet, totals, formulas, and a chart.” |
| Investigate formulas | “Explain how the total in Summary!F12 is calculated and trace its source cells. Do not modify the workbook.” |
| Create slides | “Create an eight-slide PPTX from this product brief for an executive audience. Include speaker notes and return the editable deck.” |
| Revise slides | “Update slide 4 with these new figures and shorten slide 6. Keep the rest of the presentation unchanged.” |
| Organize a PDF | “Extract pages 2–5 from this PDF and merge them with the attached appendix.” |
| Fill a PDF form | “Fill the existing fields in this PDF using the attached information and return the completed copy.” |

## Review, Download, And Revise

The document skills instruct the AI to inspect files and render the output for visual checks before delivering created or edited documents. The final response includes published file links; temporary previews and intermediate files are not the final deliverables.

The shared viewer supports previews for PDF, Word documents, and spreadsheets, among other formats. Not every downloadable format has an inline preview; download PPTX files to review them in your presentation application. See [Attachments As Context](attachments.html) for viewer and download controls.

Follow up in the same conversation with specific edits, such as “Keep the layout, but replace the chart and add a one-page summary.” The skills direct the AI to preserve the original source, write a revised output, and continue from the latest saved version on subsequent edits. State explicitly when you want tracked changes, comments, or a particular template preserved.

The task panel's **Files** tab contains task attachments. Generated document links appear in the conversation; the task's **Changes** view is for repository diffs, not a document editor.

## Skills And Dependencies

Open **Settings → Skills** to find the bundled document skills and check whether they are enabled. Project settings → **Skills & Memory** must allow skill reads for the model to use them. Creating a document does not require permission to rewrite the skill itself.

Bundled skills are maintained by OpenVibely. You can enable or disable them; you do not need to import the Paperworks skills manually. See [Skill Curation](skills-and-learning.html) for skill availability and dependency approval.

Paperworks handles document operations. LibreOffice is also required for Office rendering and certain operations such as spreadsheet recalculation and PDF conversion. PDF rendering itself does not require LibreOffice. The skill dependency flow handles missing required tools through approval.

## Format Limits

Supported operations differ by format:

- **Word:** DOCX is supported; legacy DOC conversion is not exposed by the Paperworks CLI. Exact pagination can differ between LibreOffice and Word.
- **Spreadsheets:** Legacy XLS inspection reads saved values. General lossless editing of XLSM, XLSB, and ODS is not supported by this CLI. Formula recalculation and rendering can differ between LibreOffice and Excel.
- **Presentations:** Native comment display, animations, and video playback need checking in the target presentation application.
- **PDF:** Paperworks does not provide OCR for scanned pages, automatic table detection, or paragraph reflow in existing PDFs. A watermark does not securely redact existing text.

For files that depend on application-specific behavior, review the downloaded result in the application where it will be used.

## Related Pages

| Page | Use It For |
|---|---|
| [Chat](chat.html) | Start a document conversation and choose a model. |
| [Tasks](tasks.html) | Create a dedicated task for document work. |
| [Attachments As Context](attachments.html) | Upload source files, view previews, and download outputs. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Continue revising work in the same task. |
| [Skill Curation](skills-and-learning.html) | Manage skill availability and required dependencies. |
