(function () {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  document.querySelectorAll('[data-print]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      window.print();
    });
  });
})();
