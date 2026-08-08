(function () {
  const data = window.DMT_LEGAL || [];
  const input = document.getElementById('legal-search');
  const results = document.getElementById('legal-results');
  if (!input || !results) return;

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
          <h3>${item.country}</h3>
          <span class="tag ${tagClass(item.status)}">${item.label}</span>
        </div>
        <p>${item.summary}</p>
      </article>
    `).join('');
  }

  function filter(q) {
    const query = q.trim().toLowerCase();
    if (!query) return data.slice().sort((a, b) => a.country.localeCompare(b.country));
    return data.filter((item) => {
      const hay = `${item.country} ${item.region} ${item.label} ${item.summary}`.toLowerCase();
      if (query === 'uk' && item.country === 'United Kingdom') return true;
      if (query === 'usa' || query === 'us') return item.country === 'United States';
      return hay.includes(query);
    }).sort((a, b) => a.country.localeCompare(b.country));
  }

  render(filter(''));
  input.addEventListener('input', () => render(filter(input.value)));
})();
