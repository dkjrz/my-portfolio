document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar__toggle');
  const menu = document.querySelector('.navbar__menu');
  const links = document.querySelectorAll('.navbar__link');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Закрыть меню на мобилках после клика
      if (menu.classList.contains('active')) {
        menu.classList.remove('active');
      }
    });
  });
});
