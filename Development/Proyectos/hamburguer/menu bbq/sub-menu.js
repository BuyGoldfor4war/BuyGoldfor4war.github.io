var subMenu = document.querySelector('.subMenu');
var subMenuOffsetTop = subMenu.offsetTop;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScrollPos > subMenuOffsetTop) {
        subMenu.classList.add('fixed');
    } else {
        subMenu.classList.remove('fixed');
    }
});
