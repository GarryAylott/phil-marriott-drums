// Minimal JS: active state on scroll
const links = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
    const fromTop = window.scrollY;
    links.forEach((link) => {
        const section = document.querySelector(link.hash);
        if (
            section.offsetTop <= fromTop + 100 &&
            section.offsetTop + section.offsetHeight > fromTop + 100
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});
