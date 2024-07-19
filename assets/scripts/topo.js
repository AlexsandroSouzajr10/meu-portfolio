topo.addEventListener('click', () => {
    window.scrollTo(0,0);
});

window.onscroll = function() {topScroll()};

function topScroll() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        topo.classList.add('show');
    }else {
        topo.classList.remove('show');
    }
}