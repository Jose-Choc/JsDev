/** Cambio de tema en desktop o mobile */
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");

// Establece el tema inicial desde localStorage
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  sunIcon.classList.remove("hidden");
  moonIcon.classList.add("hidden");
} else {
  html.classList.remove("dark");
  sunIcon.classList.add("hidden");
  moonIcon.classList.remove("hidden");
}

// Al hacer clic en el botón
themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  const isDark = html.classList.contains("dark");

  // Alternar íconos
  sunIcon.classList.toggle("hidden", !isDark);
  moonIcon.classList.toggle("hidden", isDark);

  // Guardar preferencia
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
/** Fin del boton cambio de tema */

/** Scrolling en desktop */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  let scrollPos = window.scrollY + 100; 
  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll); 
