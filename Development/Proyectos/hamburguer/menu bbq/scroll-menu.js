var prevScrollPos = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    var currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
    var subMenu = document.querySelector('.subMenu');

    if (currentScrollPos > prevScrollPos) {
        // Desplazamiento hacia abajo
        subMenu.classList.add('hidden');
    } else {
        // Desplazamiento hacia arriba
        subMenu.classList.remove('hidden');
    }

    prevScrollPos = currentScrollPos;
});
