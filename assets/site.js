const yearTargets = document.querySelectorAll("[data-current-year]");
const currentYear = new Date().getFullYear();

for (const target of yearTargets) {
  target.textContent = String(currentYear);
}
