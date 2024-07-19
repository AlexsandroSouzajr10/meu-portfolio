const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.navlinks a');
const sections = document.querySelectorAll('section');
const topo = document.querySelector('.topo');

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
})

closeMenu.addEventListener("click", () => {
    function menuClose() {
        document.querySelector('.active').classList.remove('active');
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    menuClose();
})

 function linkActive(){
     this.classList.add("active");
     burger.classList.toggle("active");
     menu.classList.toggle("active");
     overlay.classList.toggle("active");
 }

 navLinks.forEach(i => i.addEventListener('click', linkActive));

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (this.window.innerWidth <= 600) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }else {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navlinks a[href*=' + id + ']').classList.add("active");
            });
        };
    });
};

AOS.init();