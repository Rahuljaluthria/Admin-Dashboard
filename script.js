const themeBtn = document.getElementById("themeBtn");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    themeBtn.innerText = "☀ Light Mode";
  } else {
    themeBtn.innerText = "🌙 Dark Mode";
  }
});
