document.addEventListener("DOMContentLoaded", () => {
  const placeholder = document.getElementById("projects-placeholder");

  if (placeholder) {
    fetch("partials/projects.html")
      .then((res) => res.text())
      .then((html) => {
        placeholder.innerHTML = html;
      })
      .catch((err) => {
        console.error("Помилка підключення блоку проектів:", err);
        placeholder.innerHTML = "<p>Не вдалося завантажити проєкти.</p>";
      });
  }
});
