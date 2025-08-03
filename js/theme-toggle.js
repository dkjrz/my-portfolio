const toggleInput = document.getElementById('theme-toggle');
const body = document.body;

// Применить сохранённую тему
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleInput.checked = true;
}

// Переключение темы
toggleInput.addEventListener('change', () => {
  if (toggleInput.checked) {
    body.classList.add('light-theme');
    localStorage.setItem('theme', 'light');
  } else {
    body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }
});
