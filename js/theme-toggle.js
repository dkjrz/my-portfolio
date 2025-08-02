const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// При загрузке страницы проверяем сохранённую тему и применяем её
if(localStorage.getItem('theme') === 'light') {
  body.classList.add('light-theme');
  toggleBtn.textContent = 'Темна тема';
}

toggleBtn.addEventListener('click', () => {
  if(body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    toggleBtn.textContent = 'Світла тема';
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.add('light-theme');
    toggleBtn.textContent = 'Темна тема';
    localStorage.setItem('theme', 'light');
  }
});
