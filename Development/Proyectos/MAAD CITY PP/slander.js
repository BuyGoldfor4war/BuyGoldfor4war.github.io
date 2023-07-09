window.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.item');
    const contents = document.querySelectorAll('.content');
  
    // Agregar clase 'selected' al primer elemento de la lista
    items[0].classList.add('selected');
    contents[0].classList.add('visible');
  
    items.forEach(function(item, index) {
      item.addEventListener('click', function() {
        // Remover clase 'selected' de todos los elementos de la lista
        items.forEach(function(item) {
          item.classList.remove('selected');
        });
  
        // Remover clase 'visible' de todos los contenidos
        contents.forEach(function(content) {
          content.classList.remove('visible');
        });
  
        // Agregar clase 'selected' al elemento seleccionado
        item.classList.add('selected');
        contents[index].classList.add('visible');
      });
    });
  });
  