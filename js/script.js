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


  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar__link');

  window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop - window.innerHeight / 3) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  });
