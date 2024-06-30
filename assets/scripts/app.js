window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (this.window.innerWidth <= 550) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

AOS.init();