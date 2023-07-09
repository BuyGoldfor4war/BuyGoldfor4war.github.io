var menuResponsive = document.querySelector('.menuResponsive');
var subMenu = document.querySelector('.subMenu');

menuResponsive.addEventListener('click', function() {
    subMenu.style.display = 'none';
});

window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        subMenu.style.display = 'block';
    }
});
