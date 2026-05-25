import { mkdir, readFile, rm, writeFile, copyFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const root = process.cwd();
const srcDir = join(root, 'src');
const pagesDir = join(srcDir, 'pages');
const publicDir = join(root, 'public');
const distDir = join(root, 'dist');

const nav = [
  {
    section: 'Start Here',
    description: 'What the UI does and how to begin',
    items: [
      ['Overview', 'index.md', 'The product, the web UI, and the main workflow'],
      ['Features Overview', 'features-overview.md', 'A high-level map of what OpenVibely provides'],
      ['Installation', 'installation.md', 'Run OpenVibely and open the web app'],
      ['Quickstart', 'quickstart.md', 'Use the UI to create a project and run work'],
      ['First-Time Setup', 'first-time-setup.md', 'Recommended setup order inside the app'],
      ['Learning Paths', 'learning-paths.md', 'Pick the path that matches your role'],
    ],
  },
  {
    section: 'Web App Tour',
    description: 'The screens users live in every day',
    items: [
      ['Dashboard', 'dashboard.md', 'Project health and entry point into tasks'],
      ['Projects', 'projects.md', 'Create, switch, and configure workspaces'],
      ['Chat', 'chat.md', 'Plan and orchestrate from a project conversation'],
      ['Tasks', 'tasks.md', 'Run, monitor, and review AI coding work'],
      ['Schedule', 'schedule.md', 'Calendar-driven project work'],
      ['Agents', 'agents.md', 'Reusable AI worker profiles'],
      ['Models', 'models.md', 'Provider access and model defaults'],
      ['Workers', 'workers.md', 'Capacity controls for active execution'],
      ['Alerts', 'alerts.md', 'Failures and follow-up notifications'],
      ['Insights', 'insights.md', 'Grades, Pulse, Reflection, and Analytics'],
    ],
  },
  {
    section: 'Core Workflows',
    description: 'How UI actions become reviewable work',
    items: [
      ['Task Lifecycle', 'task-lifecycle.md', 'From prompt to queued, running, completed, or failed'],
      ['Git Worktrees', 'git-worktrees.md', 'Isolated changes and reviewable diffs'],
      ['Attachments', 'attachments.md', 'Files attached to tasks and chat'],
      ['Memory', 'memory.md', 'Project knowledge captured for future work'],
      ['Personalities', 'personalities.md', 'Reusable tone and behavior profiles'],
    ],
  },
  {
    section: 'Automation In The UI',
    description: 'Schedule and coordinate repeatable work',
    items: [
      ['Scheduled Tasks', 'scheduled-tasks.md', 'Recurring and one-off task runs'],
      ['Task Chaining', 'task-chaining.md', 'Dependent work launched from tasks'],
      ['Multi-Agent Workflows', 'workflows.md', 'Coordinate work across agents'],
    ],
  },
  {
    section: 'Channels',
    description: 'Use OpenVibely from team tools',
    items: [
      ['Channels Overview', 'channels.md', 'How external channels connect to projects'],
      ['GitHub', 'github.md', 'Repository access and pull request workflows'],
      ['Slack', 'slack.md', 'Team chat integration'],
      ['Telegram', 'telegram.md', 'Mobile bot control'],
      ['Webhooks', 'webhooks.md', 'Trigger work from external systems'],
    ],
  },
  {
    section: 'Operate OpenVibely',
    description: 'Run, secure, and configure an instance',
    items: [
      ['Model Providers', 'model-providers.md', 'Provider-specific setup details'],
      ['Configuration', 'configuration.md', 'Runtime settings for operators'],
      ['Deployment Modes', 'deployment.md', 'Server, desktop, Docker, and VPS setups'],
      ['Authentication', 'authentication.md', 'Local auth, OAuth, and access control'],
      ['Troubleshooting', 'troubleshooting.md', 'Common setup and runtime issues'],
    ],
  },
  {
    section: 'Developer Reference',
    description: 'Optional lookup material for builders',
    items: [
      ['API Reference', 'api-reference.md', 'Swagger and integration endpoints'],
      ['Routes', 'routes.md', 'Implemented web and API routes'],
      ['Environment Variables', 'environment.md', 'Complete environment variable reference'],
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
      return `<a class="nav-link${active}" href="${slugFor(file)}"><span>${escapeHtml(label)}</span><small>${escapeHtml(description || '')}</small></a>`;
    }).join('\n');
    return `<details class="nav-section"${isOpen ? ' open' : ''}><summary><span><strong>${escapeHtml(group.section)}</strong><small>${escapeHtml(group.description || '')}</small></span></summary><div class="nav-items">${items}</div></details>`;
  }).join('\n');
}

function clientScript() {
  return `<script>
    (function () {
      var sidebar = document.querySelector('.sidebar');
      var sections = Array.from(document.querySelectorAll('.nav-section'));
      sections.forEach(function (section) {
        section.addEventListener('toggle', function () {
          if (!section.open) return;
          sections.forEach(function (other) {
            if (other !== section) other.open = false;
          });
        });
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
  <aside class="sidebar">
    <div class="brand"><span class="brand-mark">OV</span><span>OpenVibely Docs</span></div>
    <nav>${sidebar(activeFile)}</nav>
    <div class="sidebar-footer"><a href="llms.txt">llms.txt</a><a href="llms-full.txt">llms-full.txt</a></div>
  </aside>
  <main class="main">
    <div class="topbar">
      <a href="index.html">Overview</a>
      <a href="quickstart.html">Quickstart</a>
      <a href="features-overview.html">Features</a>
      <a href="https://github.com/openvibely/openvibely">GitHub</a>
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
