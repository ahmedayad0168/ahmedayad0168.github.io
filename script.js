// Automatically update copyright year
const yearNode = document.getElementById('current-year');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}