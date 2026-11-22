# Project Computers

Give tasks a sandboxed Linux desktop and Chromium browser running locally. Watch or interact with their desktops, demonstrate workflows, and share files or browser sign-ins. Computer use is off by default.

## Setup

1. Start a local Docker-compatible engine and make its `docker` command available to OpenVibely.
2. Open **Settings → Project Computer**, select the project, enable its computer, and save.
3. Open the task's **Computer** tab and enable **Use computer for this task**.

## Resources And Stored Data

The first use may build the computer image and take several minutes. Each project has a container with separate task desktops, files, and browser profiles. CPU, memory, and process/thread limits are shared by that project's desktops. Settings also include time zone, idle shutdown, and Low, Balanced, or High preview quality. Saving settings can restart the computer, so save work in desktop applications first.

Idle shutdown keeps files and browser profiles but closes applications. Disabling computer use preserves stored data. Deleting a provisioned project removes its computer and volume; if Docker cleanup fails, restore Docker access and retry.

## Supported Environments

Docker Desktop must use Linux containers. Rancher Desktop must use **dockerd (Moby)**; containerd mode is unsupported. Windows provisioning, Rancher Desktop, and rootless engines have not been validated end to end. A hosted or containerized OpenVibely instance needs separate computer provisioning support; mounting the Docker socket is not the supported workaround.

## Using A Task Computer

After enabling the project computer, open the task's **Computer** tab and turn on **Use computer for this task**. For a new task, the choice takes effect when you send its first message.

The preview shows the task's live desktop. Expand it to interact with the same desktop as the agent; human input does not cancel the task. Agents can keep using the computer with the preview closed. Private login handoffs restrict agent access until completed.

## Tool Destinations And Files

Use **Run tools in** to choose **Task worktree** or **Task computer** for ordinary shell and file tools. Explicit computer and browser tools always use the computer. Files do not automatically sync: ask the agent to transfer code back to the worktree before reviewing or merging it. Agents configured with Scoped Files can still route file operations to the host, so that combination is not a confinement boundary.

Use the composer for uploads and ask the agent to transfer or publish files through the task's normal attachments. See [Attachments](attachments.html).

## Teach A Skill

In the expanded preview, choose **Teach a skill**, start recording, and demonstrate the workflow. Pause and save to send selected screenshots and an action timeline into the task thread for the agent to create a reusable skill, or discard the recording. See [Skill Curation](skills-and-learning.html#teach-a-skill) for skill-write permissions and managing the resulting skill.

Recording stops after ten minutes. Pause before entering private information: screenshots can contain sensitive data even though typed text and clipboard values are omitted from the action log. Preview reconnects preserve the recording; restarting the computer loses an unsaved recording.

## Import Chrome Sign-Ins

Open **Chrome permissions → Import Chrome sign-ins** to search and select local Chrome cookies for explicit sharing with the task computer. Local import supports macOS and Linux; encrypted Linux cookies require access to an unlocked supported keyring. Enabling a computer does not import sign-ins automatically.

Review each permission's scope and expiration. Select an existing permission to revoke it. Project-scoped permissions survive deletion of the task that created them. A remote hosted instance cannot read Chrome profiles on your laptop.


## Related Pages

| Page | Why It Matters |
|---|---|
| [Projects](projects.html) | Project setup and access. |
| [Task Threads & Follow-Ups](task-threads-followups.html) | Task panels and conversations. |
| [Skill Curation](skills-and-learning.html) | Skill permissions and management. |
| [Attachments](attachments.html) | Uploads, previews, and published files. |
| [Environment Variables](environment.html#project-computers) | Computer image and provisioning configuration. |
