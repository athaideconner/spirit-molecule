(function () {
  const data = window.DMT_LEGAL || [];
  const input = document.getElementById('legal-search');
  const results = document.getElementById('legal-results');
  if (!input || !results) return;

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[c]));
  }

  function tagClass(status) {
    if (status === 'illegal') return 'illegal';
    if (status === 'traditional') return 'traditional';
    return 'mixed';
  }

  function render(list) {
    if (!list.length) {
      results.innerHTML = '<p class="lookup-empty">No countries matched. Try another name (e.g. “United States”, “Brazil”, “UK”).</p>';
      return;
    }
    results.innerHTML = list.map((item) => `
      <article class="lookup-item">
        <div class="top">
          <h3>${esc(item.country)}</h3>
          <span class="tag ${tagClass(item.status)}">${esc(item.label)}</span>
        </div>
        <p>${esc(item.summary)}</p>
      </article>
    `).join('');
  }

  function byName(a, b) { return a.country.localeCompare(b.country); }

  function filter(q) {
    const query = q.trim().toLowerCase();
    if (!query) return data.slice().sort(byName);
    // Two-letter codes would substring-match lots of names ("us" → Australia), so match them exactly.
    if (query === 'us') return data.filter((item) => item.country === 'United States');
    if (query === 'uk') return data.filter((item) => item.country === 'United Kingdom');
    return data.filter((item) => {
      const aliases = (item.aliases || []).join(' ');
      const hay = `${item.country} ${aliases} ${item.region} ${item.label} ${item.summary}`.toLowerCase();
      return hay.includes(query);
    }).sort(byName);
  }

  render(filter(''));
  input.addEventListener('input', () => render(filter(input.value)));
})();
