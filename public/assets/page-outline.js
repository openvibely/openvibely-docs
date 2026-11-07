(() => {
  const article = document.querySelector('.content');
  const rail = document.querySelector('.page-outline');
  if (!article || !rail) return;
  let entries = [], indicator, queued = false, needsMeasure = true;
  let lastRevealed;
  let railKeyboardNavigation = false;
  const desktop = matchMedia('(min-width: 1280px)');

  function rebuild() {
    const source = article.querySelector('.mobile-contents .table-of-contents');
    rail.replaceChildren();
    rail.hidden = !source;
    document.querySelector('.doc-layout').classList.toggle('has-toc', Boolean(source));
    entries = [];
    lastRevealed = null;
    railKeyboardNavigation = false;
    if (source) {
      rail.append(source.cloneNode(true));
      const links = [...rail.querySelectorAll('a')];
      const mobileLinks = [...source.querySelectorAll('a')];
      entries = links.map((link, i) => ({
        link, mobile: mobileLinks[i], heading: document.getElementById(decodeURIComponent(link.hash.slice(1))), rects: []
      })).filter(entry => entry.heading);
      indicator = document.createElement('li');
      indicator.className = 'toc-indicator';
      indicator.style.opacity = '0';
      indicator.style.transition = 'none';
      indicator.setAttribute('aria-hidden', 'true');
      rail.querySelector('ul').append(indicator);
    }
    schedule(true);
  }

  function measure() {
    for (const entry of entries) {
      entry.rects = [];
      // Text fragments and visible media define the section, not the blank
      // interval to the next heading. A parent stops at its first subheading.
      let block = entry.heading;
      while (block && (block === entry.heading || !block.matches('h1,h2,h3'))) {
        if (!block.matches('.mobile-contents')) {
          const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
          let node;
          while ((node = walker.nextNode())) {
            if (!node.textContent.trim() || node.parentElement.closest('script,style,[hidden]')) continue;
            const range = document.createRange();
            range.selectNodeContents(node);
            for (const rect of range.getClientRects()) {
              if (rect.width && rect.height) entry.rects.push({ top: rect.top + scrollY, bottom: rect.bottom + scrollY });
            }
          }
          for (const media of block.matches('img,video,iframe,svg') ? [block] : block.querySelectorAll('img,video,iframe,svg')) {
            const rect = media.getBoundingClientRect();
            if (rect.width && rect.height) entry.rects.push({ top: rect.top + scrollY, bottom: rect.bottom + scrollY });
          }
        }
        block = block.nextElementSibling;
      }
      entry.top = entry.heading.getBoundingClientRect().top + scrollY;
    }
  }

  function update() {
    queued = false;
    if (!entries.length) return;
    if (needsMeasure) { needsMeasure = false; measure(); }
    const top = scrollY + document.querySelector('.topbar').getBoundingClientRect().bottom + 8;
    const bottom = scrollY + innerHeight;
    const visible = entries.filter(entry => entry.rects.some(rect =>
      Math.min(rect.bottom, bottom) - Math.max(rect.top, top) >= Math.min(16, (rect.bottom - rect.top) * .75)
    ));
    const current = visible.filter(entry => entry.top <= top + 60).at(-1) || visible[0];
    for (const entry of entries) {
      for (const link of [entry.link, entry.mobile]) {
        link.toggleAttribute('data-visible', visible.includes(entry));
        if (entry === current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
    indicator.style.opacity = visible.length ? '1' : '0';
    if (visible.length && desktop.matches) {
      const first = visible[0].link.parentElement, last = visible.at(-1).link.parentElement;
      indicator.style.transform = `translateY(${first.offsetTop + 5}px)`;
      indicator.style.height = `${Math.max(4, last.offsetTop + last.offsetHeight - first.offsetTop - 10)}px`;
      // Scroll only this panel, without moving the article or taking focus.
      // Reveal on section changes so users can still browse the rail manually.
      if (current && current !== lastRevealed) {
        lastRevealed = current;
        if (!(railKeyboardNavigation && rail.contains(document.activeElement))) {
          const bounds = rail.getBoundingClientRect();
          const active = current.link.getBoundingClientRect();
          if (active.top < bounds.top + 8) rail.scrollTop += active.top - bounds.top - 8;
          else if (active.bottom > bounds.bottom - 8) rail.scrollTop += active.bottom - bounds.bottom + 8;
        }
      }
      if (indicator.style.transition === 'none') {
        // Establish the first position without animating from an unplaced marker.
        indicator.getBoundingClientRect();
        indicator.style.removeProperty('transition');
      }
    }
  }

  function schedule(measureAgain = false) {
    needsMeasure ||= measureAgain;
    if (!queued) { queued = true; requestAnimationFrame(update); }
  }
  document.addEventListener('keydown', () => { railKeyboardNavigation = true; }, true);
  document.addEventListener('pointerdown', () => {
    railKeyboardNavigation = false;
    lastRevealed = null;
    schedule();
  }, true);
  rail.addEventListener('focusout', event => {
    if (!rail.contains(event.relatedTarget)) {
      lastRevealed = null;
      schedule();
    }
  });
  addEventListener('scroll', () => schedule(), { passive: true });
  addEventListener('resize', () => { lastRevealed = null; schedule(true); });
  addEventListener('hashchange', () => schedule(true));
  article.addEventListener('load', () => schedule(true), true);
  article.addEventListener('toggle', () => schedule(true), true);
  new ResizeObserver(() => schedule(true)).observe(article);
  document.fonts?.ready.then(() => schedule(true));
  document.addEventListener('docs:content-changed', rebuild);
  article.addEventListener('click', event => {
    const link = event.target.closest('.mobile-contents a');
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    // Collapse before the browser resolves the native fragment's position.
    link.closest('details').open = false;
    schedule(true);
  });
  rebuild();
})();
