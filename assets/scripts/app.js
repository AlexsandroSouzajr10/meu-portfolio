document.title = "Alexsandro - Portfolio";
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav .navlinks a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav .navlinks a[href*=' + id + ']').classList.add("active");
            });
        };
    });
};