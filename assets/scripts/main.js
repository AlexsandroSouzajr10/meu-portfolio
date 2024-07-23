const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
const closeMenu = document.querySelector('.close-menu');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('.navlinks a');
const sections = document.querySelectorAll('section');
const filterBtn = document.querySelectorAll('.btn-filter');
const filterProjects = document.querySelectorAll('.projects__cards .project__card');
const topo = document.querySelector('.topo');

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    function menuClose() {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        overlay.classList.toggle("active");
    }

    menuClose();
});

 function linkActive(){
     this.classList.add("active");
     burger.classList.toggle("active");
     menu.classList.toggle("active");
     overlay.classList.toggle("active");
 };

navLinks.forEach(i => i.addEventListener('click', linkActive));
 
window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    if (this.window.innerWidth <= 600) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }else {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

var typed = new Typed(".type", {
    strings: ["Alexsandro", "Front-end developer", "Alexsandro"],
    typeSpeed: 70,
    backSpeed: 70,
});

this.onscroll = () => {
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

filterBtn.forEach((project) => {
    project.addEventListener('click', () => {
        filterBtn.forEach((project) => {
            project.classList.remove('active');
        });
        project.classList.add('active');

        const valueAttr = project.getAttribute("data-filter-project");
        filterProjects.forEach((project) => {
            if (project.getAttribute("data-filter-project").toLowerCase() == valueAttr.toLowerCase() || valueAttr == "all") {
                itemsShow();
            } else{
                itemsHide();
            }

            function itemsHide() {
                project.classList.add('hide');
                project.classList.remove('show');
            };
    
            function itemsShow() {
                project.classList.remove('hide');
                project.classList.add('show');
            };
        });
    });
});

topo.addEventListener('click', () => {
    window.scrollTo(0,0);
});

window.addEventListener('scroll', function() {topScroll()})

function topScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        topo.classList.add('show');
    }else {
        topo.classList.remove('show');
    }
};