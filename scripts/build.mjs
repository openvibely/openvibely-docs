import { mkdir, readFile, rm, writeFile, copyFile, readdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

const root = process.cwd();
const srcDir = join(root, 'src');
const pagesDir = join(srcDir, 'pages');
const publicDir = join(root, 'public');
const distDir = join(root, 'dist');
const siteUrl = 'https://docs.openvibely.ai';

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
      ['Automations', 'automations.md', 'Connect supported capabilities in live visual graphs'],
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
      ['Updates', 'updates.md', 'Desktop, binary, Docker, and source update paths'],
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

function seoTitle(title) {
  const candidates = [
    `${title} | OpenVibely Documentation`,
    `${title} Guide | OpenVibely Documentation`,
    `${title} | OpenVibely Docs`,
    `${title} Guide | OpenVibely AI Coding Documentation`,
    `${title} Guide | OpenVibely AI Docs`,
    `${title} | OpenVibely AI Coding Platform Documentation`,
    `${title} Documentation | OpenVibely AI Coding Platform`,
  ];
  return candidates.find(candidate => candidate.length >= 50 && candidate.length <= 60)
    || candidates.reduce((best, candidate) => Math.abs(candidate.length - 55) < Math.abs(best.length - 55) ? candidate : best);
}

function seoDescription(title, summary) {
  const base = `Learn how to use ${title} in OpenVibely. ${summary.replace(/[.!?]+$/, '')}.`;
  const closings = [
    'Explore next steps.',
    'Explore practical next steps.',
    'Explore practical setup and next steps.',
    'Get practical workflow guidance and next steps.',
    'Get practical, UI-first workflow guidance and next steps.',
    'Get practical, UI-first guidance for secure AI coding workflows.',
    'Use practical guidance for secure, self-hosted AI coding workflows.',
    'Get practical, UI-first guidance for secure AI coding workflows and teams.',
    'Get practical, UI-first guidance for secure, self-hosted AI coding workflows.',
    'Get practical, UI-first guidance for secure, self-hosted AI coding workflows and teams.',
    'Use practical, UI-first guidance to build secure, self-hosted AI coding workflows for your team.',
  ];
  const description = closings
    .map(closing => `${base} ${closing}`)
    .find(candidate => candidate.length >= 150 && candidate.length <= 160);
  if (!description) throw new Error(`SEO description length cannot be satisfied for ${title}`);
  return description;
}

function canonicalUrl(file) {
  return file === 'index.md' ? `${siteUrl}/` : `${siteUrl}/${slugFor(file)}`;
}

function sourceModifiedDate(file) {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cs', '--', join('src', 'pages', file)], {
      cwd: root,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'ignore'],
    }).trim();
    return date || null;
  } catch {
    return null;
  }
}

function pageDetails(file) {
  for (const group of nav) {
    const item = group.items.find(([, itemFile]) => itemFile === file);
    if (item) return { group: group.section, label: item[0], summary: item[2] };
  }
  throw new Error(`Navigation details missing for ${file}`);
}

function tableOfContents(markdown) {
  const headings = [...markdown.matchAll(/^##\s+(.+)$/gm)].map(match => {
    const text = match[1].trim();
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return `<li><a href="#${id}">${inlineMarkdown(text)}</a></li>`;
  });
  if (headings.length < 3) return '';
  return `<nav class="table-of-contents" aria-label="On this page"><strong>On this page</strong><ul>${headings.join('')}</ul></nav>`;
}

function installChooser() {
  return `<section class="install-chooser" data-install-chooser aria-labelledby="install-chooser-title">
    <div class="install-chooser-heading">
      <div>
        <h2 id="install-chooser-title">Install OpenVibely</h2>
        <p data-install-detection aria-live="polite">Detecting your system...</p>
      </div>
      <span class="install-architecture" data-install-architecture>Auto-detect</span>
    </div>
    <div class="install-options">
      <fieldset>
        <legend>Operating system</legend>
        <div class="install-segments" data-install-os>
          <button type="button" data-value="macos" aria-pressed="false">macOS</button>
          <button type="button" data-value="linux" aria-pressed="false">Linux</button>
          <button type="button" data-value="windows" aria-pressed="false">Windows</button>
        </div>
      </fieldset>
      <fieldset>
        <legend>App type</legend>
        <div class="install-segments" data-install-variant>
          <button type="button" data-value="desktop" aria-pressed="true">Desktop</button>
          <button type="button" data-value="binary" aria-pressed="false">Server</button>
        </div>
      </fieldset>
    </div>
    <div class="install-command">
      <code data-install-command>curl -fsSL https://openvibely.ai/install.sh | bash -s -- --variant desktop</code>
      <button type="button" data-install-copy title="Copy install command">Copy</button>
    </div>
    <p class="install-note" data-install-note>The installer selects the matching amd64 or arm64 artifact.</p>
  </section>`;
}

function sidebar(activeFile) {
  return nav.map((group) => {
    const isOpen = group.items.some(([, file]) => file === activeFile);
    const items = group.items.map(([label, file, description]) => {
      const active = file === activeFile ? ' active' : '';
      return `<a class="nav-link${active}" href="${slugFor(file)}"${active ? ' aria-current="page"' : ''}><span>${escapeHtml(label)}</span></a>`;
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
      var search = document.querySelector('#docs-search');

      function setNavOpen(open, restoreFocus) {
        document.body.classList.toggle('nav-open', open);
        if (sidebar) {
          sidebar.setAttribute('aria-hidden', mobileNav.matches && !open ? 'true' : 'false');
          sidebar.toggleAttribute('inert', mobileNav.matches && !open);
        }
        if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        if (open && mobileNav.matches && search) search.focus();
        if (restoreFocus && mobileNav.matches && toggle) toggle.focus();
      }

      sections.forEach(function (section) {
        section.addEventListener('toggle', function () {
          if (!section.open || (search && search.value.trim())) return;
          sections.forEach(function (other) {
            if (other !== section) other.open = false;
          });
        });
      });

      if (search) {
        search.addEventListener('input', function () {
          var query = search.value.trim().toLowerCase();
          sections.forEach(function (section) {
            var links = Array.from(section.querySelectorAll('.nav-link'));
            links.forEach(function (link) {
              link.hidden = Boolean(query) && !link.textContent.toLowerCase().includes(query);
            });
            section.hidden = Boolean(query) && links.every(function (link) { return link.hidden; });
            if (query && !section.hidden) section.open = true;
            if (!query) section.open = Boolean(section.querySelector('.nav-link.active'));
          });
        });
      }

      if (toggle) {
        toggle.addEventListener('click', function () {
          setNavOpen(!document.body.classList.contains('nav-open'), false);
        });
      }
      if (backdrop) {
        backdrop.addEventListener('click', function () {
          setNavOpen(false, true);
        });
      }
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && document.body.classList.contains('nav-open')) setNavOpen(false, true);
      });
      document.querySelectorAll('.nav-link').forEach(function (link) {
        link.addEventListener('click', function () {
          if (mobileNav.matches) setNavOpen(false, false);
        });
      });
      mobileNav.addEventListener('change', function () {
        setNavOpen(false, false);
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

      var navigationController;
      var scrollStateKey = 'openvibelyDocsScroll';

      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

      function saveScrollPosition() {
        var state = Object.assign({}, history.state || {});
        state[scrollStateKey] = { x: window.scrollX, y: window.scrollY };
        history.replaceState(state, '', window.location.href);
      }

      saveScrollPosition();
      window.addEventListener('scroll', saveScrollPosition, { passive: true });

      function updateActiveLink(url) {
        document.querySelectorAll('.nav-link').forEach(function (link) {
          var active = new URL(link.href, window.location.href).pathname === url.pathname;
          link.classList.toggle('active', active);
          if (active) {
            link.setAttribute('aria-current', 'page');
            var section = link.closest('.nav-section');
            if (section) section.open = true;
          } else {
            link.removeAttribute('aria-current');
          }
        });
      }

      function syncSeo(nextDocument) {
        ['meta[name="description"]', 'meta[name="robots"]', 'meta[property="og:title"]', 'meta[property="og:description"]', 'meta[property="og:url"]'].forEach(function (selector) {
          var current = document.querySelector(selector);
          var next = nextDocument.querySelector(selector);
          if (current && next) current.setAttribute('content', next.getAttribute('content'));
        });
        var currentCanonical = document.querySelector('link[rel="canonical"]');
        var nextCanonical = nextDocument.querySelector('link[rel="canonical"]');
        if (currentCanonical && nextCanonical) currentCanonical.setAttribute('href', nextCanonical.getAttribute('href'));
        var currentStructuredData = document.querySelector('[data-seo="structured-data"]');
        var nextStructuredData = nextDocument.querySelector('[data-seo="structured-data"]');
        if (currentStructuredData && nextStructuredData) currentStructuredData.textContent = nextStructuredData.textContent;
      }

      function initInstallChooser() {
        var chooser = document.querySelector('[data-install-chooser]');
        if (!chooser || chooser.dataset.ready === 'true') return;
        chooser.dataset.ready = 'true';

        var userAgent = navigator.userAgent || '';
        var platform = navigator.userAgentData && navigator.userAgentData.platform
          ? navigator.userAgentData.platform
          : (navigator.platform || userAgent);
        var os = /win/i.test(platform) ? 'windows' : /mac/i.test(platform) ? 'macos' : /linux|x11/i.test(platform) ? 'linux' : 'macos';
        var variant = 'desktop';
        var architecture = /arm64|aarch64/i.test(userAgent) ? 'arm64' : /x86_64|x64|win64|amd64/i.test(userAgent) ? 'amd64' : '';
        var detection = chooser.querySelector('[data-install-detection]');
        var architectureBadge = chooser.querySelector('[data-install-architecture]');
        var command = chooser.querySelector('[data-install-command]');
        var note = chooser.querySelector('[data-install-note]');
        var copy = chooser.querySelector('[data-install-copy]');

        function osLabel(value) {
          return value === 'windows' ? 'Windows' : value === 'linux' ? 'Linux' : 'macOS';
        }

        function installCommand() {
          if (os === 'windows') {
            return '& ([scriptblock]::Create((irm https://openvibely.ai/install.ps1))) -Variant ' + variant;
          }
          return 'curl -fsSL https://openvibely.ai/install.sh | bash -s -- --variant ' + variant;
        }

        function render() {
          chooser.querySelectorAll('[data-install-os] button').forEach(function (button) {
            button.setAttribute('aria-pressed', button.dataset.value === os ? 'true' : 'false');
          });
          chooser.querySelectorAll('[data-install-variant] button').forEach(function (button) {
            button.setAttribute('aria-pressed', button.dataset.value === variant ? 'true' : 'false');
          });
          command.textContent = installCommand();
          architectureBadge.textContent = architecture || 'Auto-detect';
          detection.textContent = architecture
            ? 'Detected ' + osLabel(os) + ' / ' + architecture
            : 'Detected ' + osLabel(os) + '; architecture will be detected during install';
          note.textContent = os === 'windows'
            ? 'Run in a normal PowerShell window. The installer selects the matching amd64 or arm64 artifact.'
            : 'Run in a normal terminal. The installer selects the matching amd64 or arm64 artifact.';
        }

        chooser.querySelectorAll('[data-install-os] button').forEach(function (button) {
          button.addEventListener('click', function () {
            os = button.dataset.value;
            architecture = '';
            render();
          });
        });
        chooser.querySelectorAll('[data-install-variant] button').forEach(function (button) {
          button.addEventListener('click', function () {
            variant = button.dataset.value;
            render();
          });
        });
        copy.addEventListener('click', function () {
          navigator.clipboard.writeText(command.textContent).then(function () {
            copy.textContent = 'Copied';
            window.setTimeout(function () { copy.textContent = 'Copy'; }, 1500);
          });
        });

        render();
        if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
          navigator.userAgentData.getHighEntropyValues(['architecture', 'bitness']).then(function (values) {
            if (/arm/i.test(values.architecture || '')) architecture = 'arm64';
            if (/x86/i.test(values.architecture || '') && values.bitness === '64') architecture = 'amd64';
            render();
          }).catch(function () {});
        }
      }

      async function navigate(url, push, moveFocus, destinationState) {
        if (navigationController) navigationController.abort();
        navigationController = new AbortController();
        if (push) saveScrollPosition();
        try {
          var response = await fetch(url.href, {
            headers: { Accept: 'text/html' },
            signal: navigationController.signal
          });
          if (!response.ok) throw new Error('Documentation page request failed');

          var nextDocument = new DOMParser().parseFromString(await response.text(), 'text/html');
          var nextContent = nextDocument.querySelector('.content');
          var currentContent = document.querySelector('.content');
          if (!nextContent || !currentContent) throw new Error('Documentation page content is missing');

          currentContent.replaceChildren(...Array.from(nextContent.childNodes));
          initInstallChooser();
          document.title = nextDocument.title;
          syncSeo(nextDocument);
          updateActiveLink(url);
          setNavOpen(false);
          if (push) {
            var nextState = {};
            nextState[scrollStateKey] = { x: 0, y: 0 };
            history.pushState(nextState, '', url.href);
          }

          if (url.hash) {
            var target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
            if (target) target.scrollIntoView();
          } else if (push) {
            window.scrollTo(0, 0);
          } else {
            var savedPosition = destinationState && destinationState[scrollStateKey];
            window.scrollTo(savedPosition ? savedPosition.x : 0, savedPosition ? savedPosition.y : 0);
          }
          if (moveFocus) currentContent.focus({ preventScroll: true });
        } catch (error) {
          if (error.name !== 'AbortError') window.location.assign(url.href);
        }
      }

      document.addEventListener('click', function (event) {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        var link = event.target.closest('a');
        if (!link || link.target || link.hasAttribute('download')) return;

        var url = new URL(link.href, window.location.href);
        if (url.origin !== window.location.origin || !url.pathname.endsWith('.html')) return;
        if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

        event.preventDefault();
        navigate(url, true, true);
      });

      window.addEventListener('popstate', function (event) {
        navigate(new URL(window.location.href), false, false, event.state);
      });

      setNavOpen(false);
      initInstallChooser();
    })();
  </script>`;
}

function pageTemplate({ title, body, activeFile, modified }) {
  const details = pageDetails(activeFile);
  const pageTitle = seoTitle(title);
  const description = seoDescription(title, details.summary);
  const canonical = canonicalUrl(activeFile);
  const structuredData = JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: title,
        description,
        ...(modified ? { dateModified: modified } : {}),
        inLanguage: 'en',
        mainEntityOfPage: canonical,
        author: { '@type': 'Organization', name: 'OpenVibely', url: 'https://openvibely.ai/' },
        publisher: { '@type': 'Organization', name: 'OpenVibely', url: 'https://openvibely.ai/' },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'OpenVibely Docs', item: `${siteUrl}/` },
          { '@type': 'ListItem', position: 2, name: title, item: canonical },
        ],
      },
    ],
  }).replace(/</g, '\\u003c');
  const breadcrumbs = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="index.html">Docs</a><span aria-hidden="true">/</span><span>${escapeHtml(details.group)}</span><span aria-hidden="true">/</span><span aria-current="page">${escapeHtml(details.label)}</span></nav>`;
  return `<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(pageTitle)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="referrer" content="strict-origin-when-cross-origin">
  <meta name="theme-color" content="#111318">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="OpenVibely Docs">
  <meta property="og:title" content="${escapeHtml(pageTitle)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta name="twitter:card" content="summary">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <link rel="stylesheet" href="assets/styles.css">
  <script type="application/ld+json" data-seo="structured-data">${structuredData}</script>
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <aside id="docs-sidebar" class="sidebar" aria-label="Documentation navigation">
    <div class="brand"><a class="brand-home" href="https://openvibely.ai/" aria-label="OpenVibely home"><img class="brand-mark" src="assets/avatar.png" alt="" width="32" height="32" decoding="async" fetchpriority="high"></a><span>OpenVibely Docs</span></div>
    <div class="docs-search"><input id="docs-search" type="search" placeholder="Search docs" aria-label="Search documentation" autocomplete="off"></div>
    <nav>${sidebar(activeFile)}</nav>
    <div class="sidebar-footer"><a href="llms.txt">llms.txt</a><a href="llms-full.txt">llms-full.txt</a><a href="sitemap.xml">sitemap</a></div>
  </aside>
  <div class="nav-backdrop" aria-hidden="true"></div>
  <main id="main-content" class="main">
    <div class="topbar">
      <button class="menu-toggle" type="button" aria-controls="docs-sidebar" aria-expanded="false">Menu</button>
      <nav class="top-links" aria-label="Primary links">
        <a href="index.html">Overview</a>
        <a href="quickstart.html">Quickstart</a>
        <a href="features-overview.html">Features</a>
        <a href="https://openvibely.ai/">Home</a>
        <a href="https://openvibely.ai/login">Log in</a>
        <a href="https://github.com/openvibely/openvibely">GitHub</a>
      </nav>
    </div>
    <article class="content" tabindex="-1">${breadcrumbs}${body}</article>
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
  const sitemapEntries = [];
  for (const file of pageFiles) {
    const sourcePath = join(pagesDir, file);
    const source = await readFile(sourcePath, 'utf8');
    const modified = sourceModifiedDate(file);
    const title = titleFromMarkdown(source);
    let body = markdownToHtml(source);
    body = body.replace('<p>[[install-chooser]]</p>', installChooser());
    const contents = tableOfContents(source);
    if (contents) body = body.replace(/<\/h1>\n/, `</h1>\n${contents}`);
    await writeFile(join(distDir, slugFor(file)), pageTemplate({ title, body, activeFile: file, modified }));
    sitemapEntries.push(`  <url><loc>${escapeHtml(canonicalUrl(file))}</loc>${modified ? `<lastmod>${modified}</lastmod>` : ''}</url>`);
    allMarkdown.push(`# ${title}\n\nSource: /${slugFor(file)}\n\n${source.replace(/^#\s+.+$/m, '').trim()}\n`);
  }

  const shortIndex = nav.map(group => {
    const links = group.items.map(([label, file, description]) => `- [${label}](${canonicalUrl(file)}): ${description || ''}`).join('\n');
    return `## ${group.section}\n${links}`;
  }).join('\n\n');
  await writeFile(join(distDir, 'llms.txt'), `# OpenVibely Documentation\n\n${shortIndex}\n`);
  await writeFile(join(distDir, 'llms-full.txt'), allMarkdown.join('\n\n---\n\n'));
  await writeFile(join(distDir, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries.join('\n')}\n</urlset>\n`);
  await writeFile(join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`);
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
