function changeLinkColor(index) {
    var enlaces = document.querySelectorAll('nav a');
    enlaces[index].style.color = 'red'; // Cambia el color a tu preferencia
  }
  
  function resetLinkColor(index) {
    var enlaces = document.querySelectorAll('nav a');
    enlaces[index].style.color = '#ffff'; // Restablecer el color predeterminado
  }
  