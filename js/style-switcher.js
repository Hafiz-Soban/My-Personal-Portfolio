/* =============================== toggle style switcher ======================================= */
document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector(".style-switcher-toggler");
  const dayNightToggle = document.querySelector(".day-night-toggle");
  const styleSwitcher = document.querySelector(".style-switcher");

  // Toggle palette panel visibility
  toggler.addEventListener("click", () => {
    styleSwitcher.classList.toggle("open");
  });

  // Simple dark mode toggle: toggles 'dark' class on body and icon
  dayNightToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const icon = dayNightToggle.querySelector("i");
    if (document.body.classList.contains("dark")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
});