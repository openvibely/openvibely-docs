import { mkdir, readFile, rm, writeFile, copyFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const srcDir = join(root, 'src');
const pagesDir = join(srcDir, 'pages');
const publicDir = join(root, 'public');
const distDir = join(root, 'dist');

const nav = [
  {
    section: 'Get Started',
    description: 'Overview, install, quickstart, and setup path',
    items: [
      ['Overview', 'index.md', 'The product, the web UI, and the main workflow'],
      ['Features Overview', 'features-overview.md', 'A high-level hub for the OpenVibely app'],
      ['Install', 'installation.md', 'Run OpenVibely and open the web app'],
      ['Quickstart', 'quickstart.md', 'Use the UI to create a project and run work'],
      ['First-Time Setup', 'first-time-setup.md', 'Recommended setup order inside the app'],
      ['Learning Paths', 'learning-paths.md', 'Pick the path that matches your role'],
    ],
  },
  {
    section: 'Workspace',
    description: 'Daily project work in the UI',
    items: [
      ['Dashboard', 'dashboard.md', 'Project health and entry point into tasks'],
      ['Projects', 'projects.md', 'Create, switch, and configure workspaces'],
      ['Chat', 'chat.md', 'Plan and orchestrate from a project conversation'],
      ['Tasks', 'tasks.md', 'Run, monitor, and review AI coding work'],
      ['Schedule', 'schedule.md', 'Calendar-driven project work'],
      ['Alerts', 'alerts.md', 'Failures and follow-up notifications'],
    ],
  },
  {
    section: 'Agents',
    description: 'Reusable worker profiles and learned behavior',
    items: [
      ['Agents Overview', 'agents.md', 'Reusable AI worker profiles'],
      ['Memory', 'memory.md', 'Autonomous project memory creation, recall, updates, and consolidation'],
      ['Skill Curation', 'skills-and-learning.md', 'OpenVibely curates reusable skills from completed work'],
      ['Personalities', 'personalities.md', 'Reusable tone and behavior profiles'],
      ['Multi-Agent Workflows', 'workflows.md', 'Coordinate work across agents'],
    ],
  },
  {
    section: 'Capabilities',
    description: 'Feature deep dives and review workflows',
    items: [
      ['Task Lifecycle', 'task-lifecycle.md', 'From prompt to queued, running, completed, or failed'],
      ['Swarm Orchestration', 'swarm-orchestration.md', 'Coordinate planner, worker, reviewer, and merger task roles'],
      ['Runtime Capabilities', 'runtime-capabilities.md', 'Mode, provider, agent, and integration action boundaries'],
      ['Lifecycle Hooks', 'lifecycle-hooks.md', 'Supporting hooks for memory, skills, routing, and learning'],
      ['Task Threads & Follow-Ups', 'task-threads-followups.md', 'Continue one task through queued follow-ups and preserved context'],
      ['Task Goals', 'task-goals.md', 'Persistent objectives with autonomous continuation and evaluation'],
      ['Task Chaining & Branch Lineage', 'task-chaining.md', 'Dependent work with parent/child task and branch context'],
      ['Prompt Queue & Steering', 'prompt-queue-steering.md', 'Keep chat moving with queued follow-ups and active-turn steering'],
      ['Task Diffs & Review', 'task-diffs-review.md', 'Inspect generated file changes, live diffs, and review comments'],
      ['Review Workflows', 'review-workflows.md', 'Inspect, comment on, merge, or publish generated changes'],
      ['Git Worktrees & Merge Safety', 'git-worktrees.md', 'Isolated changes, branch safety, conflicts, and cleanup'],
      ['Attachments As Context', 'attachments.md', 'Files attached to chat, tasks, queues, and follow-ups'],
      ['Scheduled Task Runs', 'scheduled-tasks.md', 'Recurring, one-off, and system maintenance runs'],
      ['Insights', 'insights.md', 'Grades, Pulse, Reflection, and Analytics'],
    ],
  },
  {
    section: 'Channels',
    description: 'Use OpenVibely from team tools',
    items: [
      ['Channels Overview', 'channels.md', 'How external channels connect to projects'],
      ['Outbound Messaging', 'outbound-messaging.md', 'Project-scoped destinations and proactive agent sends'],
      ['GitHub', 'github.md', 'Repository access and pull request workflows'],
      ['Slack', 'slack.md', 'Team chat integration'],
      ['Telegram', 'telegram.md', 'Mobile bot control'],
      ['Discord', 'discord.md', 'Bot DMs, mentioned server messages, threads, and attachments'],
      ['Email', 'email.md', 'Authorized inbox intake and threaded SMTP replies'],
      ['Webhook Triggers', 'webhooks.md', 'Create one project task from trusted external systems'],
    ],
  },
  {
    section: 'Models',
    description: 'Provider access and execution capacity',
    items: [
      ['Models Overview', 'models.md', 'Provider access and model defaults'],
      ['Mixture of Models', 'mixture-of-models.md', 'Reference-model advice with an acting aggregator'],
      ['Model Selection & Tool Policy', 'model-selection-tool-policy.md', 'Mode-gated tools, provider behavior, and model choice'],
      ['Model Providers', 'model-providers.md', 'Provider-specific setup details'],
      ['Worker Capacity & Dispatch', 'workers.md', 'Capacity controls for active execution'],
    ],
  },
  {
    section: 'Platforms',
    description: 'Deployment modes and access control',
    items: [
      ['Deployment Modes', 'deployment.md', 'Server, desktop, Docker, and VPS setups'],
      ['Authentication', 'authentication.md', 'Local auth, OAuth, and access control'],
      ['Configuration', 'configuration.md', 'Runtime settings for operators'],
      ['Environment Variables', 'environment.md', 'Complete environment variable reference'],
    ],
  },
  {
    section: 'Gateway & Ops',
    description: 'Reference, APIs, operations, and troubleshooting',
    items: [
      ['API Reference', 'api-reference.md', 'Swagger and integration endpoints'],
      ['Routes', 'routes.md', 'Implemented web and API routes'],
      ['Troubleshooting', 'troubleshooting.md', 'Common setup and runtime issues'],
      ['Glossary', 'glossary.md', 'Product terms and meanings'],
      ['LLM Index', 'llms.md', 'Machine-readable docs entry points'],
    ],
  },
];

function slugFor(file) {
  if (file === 'index.md') return 'index.html';
  return file.replace(/\.md$/, '.html');
}

function escapeHtml(input) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function inlineMarkdown(text) {
  let out = escapeHtml(text);
  out = out.replace(/`([^`]+)`/g, '<code>$1</code>');
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  return out;
}

function markdownToHtml(markdown) {
  const lines = markdown.replace(/\r\n/g, '\n').split('\n');
  let html = '';
  let inCode = false;
  let codeLang = '';
  let code = [];
  let inList = false;
  let inTable = false;
  let tableRows = [];

  function closeList() {
    if (inList) {
      html += '</ul>\n';
      inList = false;
    }
  }

  function closeTable() {
    if (!inTable) return;
    html += '<div class="table-wrap"><table>\n';
    tableRows.forEach((row, index) => {
      const tag = index === 0 ? 'th' : 'td';
      if (index === 1 && row.every(cell => /^:?-{3,}:?$/.test(cell.trim()))) return;
      html += '<tr>' + row.map(cell => `<${tag}>${inlineMarkdown(cell.trim())}</${tag}>`).join('') + '</tr>\n';
    });
    html += '</table></div>\n';
    inTable = false;
    tableRows = [];
  }

  for (const line of lines) {
    if (line.startsWith('```')) {
      closeList();
      closeTable();
      if (!inCode) {
        inCode = true;
        codeLang = line.slice(3).trim();
        code = [];
      } else {
        html += `<pre><code class="language-${escapeHtml(codeLang)}">${escapeHtml(code.join('\n'))}</code></pre>\n`;
        inCode = false;
        codeLang = '';
        code = [];
      }
      continue;
    }

    if (inCode) {
      code.push(line);
      continue;
    }

    if (/^\|.*\|$/.test(line.trim())) {
      closeList();
      inTable = true;
      tableRows.push(line.trim().slice(1, -1).split('|'));
      continue;
    }
    closeTable();

    if (line.trim() === '') {
      closeList();
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.*)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      const text = heading[2].trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      html += `<h${level} id="${id}">${inlineMarkdown(text)}</h${level}>\n`;
      continue;
    }

    const bullet = line.match(/^-\s+(.*)$/);
    if (bullet) {
      if (!inList) {
        html += '<ul>\n';
        inList = true;
      }
      html += `<li>${inlineMarkdown(bullet[1])}</li>\n`;
      continue;
    }

    html += `<p>${inlineMarkdown(line.trim())}</p>\n`;
  }

  closeList();
  closeTable();
  return html;
}

function titleFromMarkdown(markdown) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'OpenVibely Docs';
}

function sidebar(activeFile) {
  return nav.map((group) => {
    const isOpen = group.items.some(([, file]) => file === activeFile);
    const items = group.items.map(([label, file, description]) => {
      const active = file === activeFile ? ' active' : '';
      return `<a class="nav-link${active}" href="${slugFor(file)}"><span>${escapeHtml(label)}</span></a>`;
    }).join('\n');
    return `<details class="nav-section"${isOpen ? ' open' : ''}><summary><span><strong>${escapeHtml(group.section)}</strong></span></summary><div class="nav-items">${items}</div></details>`;
  }).join('\n');
}

function clientScript() {
  return `<script>
    (function () {
      var sidebar = document.querySelector('.sidebar');
      var toggle = document.querySelector('.menu-toggle');
      var backdrop = document.querySelector('.nav-backdrop');
      var mobileNav = window.matchMedia('(max-width: 900px)');
      var sections = Array.from(document.querySelectorAll('.nav-section'));

      function setNavOpen(open) {
        document.body.classList.toggle('nav-open', open);
        if (sidebar) sidebar.setAttribute('aria-hidden', mobileNav.matches && !open ? 'true' : 'false');
        if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      }

      sections.forEach(function (section) {
        section.addEventListener('toggle', function () {
          if (!section.open) return;
          sections.forEach(function (other) {
            if (other !== section) other.open = false;
          });
        });
      });

      if (toggle) {
        toggle.addEventListener('click', function () {
          setNavOpen(!document.body.classList.contains('nav-open'));
        });
      }
      if (backdrop) {
        backdrop.addEventListener('click', function () {
          setNavOpen(false);
        });
      }
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') setNavOpen(false);
      });
      document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          if (mobileNav.matches) setNavOpen(false);
        });
      });
      mobileNav.addEventListener('change', function () {
        setNavOpen(false);
      });

      if (sidebar) {
        var savedScroll = sessionStorage.getItem('openvibely-docs-sidebar-scroll');
        if (savedScroll !== null) sidebar.scrollTop = Number(savedScroll) || 0;
        sidebar.addEventListener('scroll', function () {
          sessionStorage.setItem('openvibely-docs-sidebar-scroll', String(sidebar.scrollTop));
        }, { passive: true });
        window.addEventListener('beforeunload', function () {
          sessionStorage.setItem('openvibely-docs-sidebar-scroll', String(sidebar.scrollTop));
        });
      }
      setNavOpen(false);
    })();
  </script>`;
}

function pageTemplate({ title, body, activeFile }) {
  return `<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)} - OpenVibely Docs</title>
  <meta name="description" content="Documentation for the OpenVibely web app, a self-hosted UI for AI coding tasks, agents, scheduling, review, and integrations.">
  <link rel="stylesheet" href="assets/styles.css">
</head>
<body>
  <aside id="docs-sidebar" class="sidebar" aria-label="Documentation navigation">
    <div class="brand"><img class="brand-mark" src="assets/avatar.png" alt="OpenVibely"><span>OpenVibely Docs</span></div>
    <nav>${sidebar(activeFile)}</nav>
    <div class="sidebar-footer"><a href="llms.txt">llms.txt</a><a href="llms-full.txt">llms-full.txt</a></div>
  </aside>
  <div class="nav-backdrop" aria-hidden="true"></div>
  <main class="main">
    <div class="topbar">
      <button class="menu-toggle" type="button" aria-controls="docs-sidebar" aria-expanded="false">Menu</button>
      <nav class="top-links" aria-label="Primary links">
        <a href="index.html">Overview</a>
        <a href="quickstart.html">Quickstart</a>
        <a href="features-overview.html">Features</a>
        <a href="https://github.com/openvibely/openvibely">GitHub</a>
      </nav>
    </div>
    <article class="content">${body}</article>
  </main>
  ${clientScript()}
</body>
</html>`;
}

async function copyDir(from, to) {
  try {
    await mkdir(to, { recursive: true });
    const entries = await readdir(from, { withFileTypes: true });
    for (const entry of entries) {
      const src = join(from, entry.name);
      const dest = join(to, entry.name);
      if (entry.isDirectory()) await copyDir(src, dest);
      else await copyFile(src, dest);
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

async function main() {
  await rm(distDir, { recursive: true, force: true });
  await mkdir(join(distDir, 'assets'), { recursive: true });
  await copyDir(publicDir, distDir);

  const pageFiles = nav.flatMap(group => group.items.map(item => item[1]));
  const allMarkdown = [];
  for (const file of pageFiles) {
    const source = await readFile(join(pagesDir, file), 'utf8');
    const title = titleFromMarkdown(source);
    const body = markdownToHtml(source);
    await writeFile(join(distDir, slugFor(file)), pageTemplate({ title, body, activeFile: file }));
    allMarkdown.push(`# ${title}\n\nSource: /${slugFor(file)}\n\n${source.replace(/^#\s+.+$/m, '').trim()}\n`);
  }

  const shortIndex = nav.map(group => {
    const links = group.items.map(([label, file, description]) => `- [${label}](https://docs.openvibely.local/${slugFor(file)}): ${description || ''}`).join('\n');
    return `## ${group.section}\n${links}`;
  }).join('\n\n');
  await writeFile(join(distDir, 'llms.txt'), `# OpenVibely Documentation\n\n${shortIndex}\n`);
  await writeFile(join(distDir, 'llms-full.txt'), allMarkdown.join('\n\n---\n\n'));
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
