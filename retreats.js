(function () {
  const input = document.getElementById('retreat-search');
  const chips = Array.from(document.querySelectorAll('.chip[data-filter]'));
  const items = Array.from(document.querySelectorAll('.dir-item'));
  const count = document.getElementById('retreat-count');
  const empty = document.getElementById('retreat-empty');
  if (!input || !items.length) return;

  let group = 'all';

  function apply() {
    const query = input.value.trim().toLowerCase();
    let shown = 0;
    items.forEach((el) => {
      const groups = (el.dataset.group || '').split(' ');
      const inGroup = group === 'all' || groups.includes(group);
      const matches = !query || el.textContent.toLowerCase().includes(query);
      el.hidden = !(inGroup && matches);
      if (!el.hidden) shown += 1;
    });
    if (count) count.textContent = `Showing ${shown} of ${items.length}`;
    if (empty) empty.hidden = shown !== 0;
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      group = chip.dataset.filter;
      chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      apply();
    });
  });
  input.addEventListener('input', apply);
  apply();
})();
