const themeBtn = document.getElementById("themeBtn");

if (localStorage.getItem("byteclub_theme") === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "Light Mode";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
  localStorage.setItem("byteclub_theme", isDark ? "dark" : "light");
});

// FAQ Accordion
document.querySelectorAll(".faq-q").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.parentElement;
    item.classList.toggle("open");
    btn.querySelector("span").textContent = item.classList.contains("open") ? "−" : "+";
  });
});

// Changelog Modal
const modal = document.getElementById("modal");
document.getElementById("versionBtn").addEventListener("click", () => modal.classList.remove("hidden"));
document.getElementById("closeModal").addEventListener("click", () => modal.classList.add("hidden"));