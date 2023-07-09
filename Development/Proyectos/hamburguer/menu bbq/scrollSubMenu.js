var subMenu = document.querySelector('.checkbtn');
var touchStartX = 0;
var touchMoveX = 0;

subMenu.addEventListener('touchstart', function(e) {
    touchStartX = e.touches[0].clientX;
});

subMenu.addEventListener('touchmove', function(e) {
    touchMoveX = e.touches[0].clientX;
    var scrollAmount = touchStartX - touchMoveX;
    subMenu.scrollLeft += scrollAmount;
});
