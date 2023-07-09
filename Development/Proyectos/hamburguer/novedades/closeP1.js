function mostrarPopup() {
    document.getElementById("miPopup").style.display = "block";
    document.addEventListener("click", cerrarPopupExterno);
  }
  
  function cerrarPopup() {
    document.getElementById("miPopup").style.display = "none";
    document.removeEventListener("click", cerrarPopupExterno);
  }
  
  function cerrarPopupExterno(event) {
    const popup = document.getElementById("miPopup");
    const contenido = document.querySelector(".popup-contenido");
  
    if (!contenido.contains(event.target)) {
      popup.style.display = "none";
      document.removeEventListener("click", cerrarPopupExterno);
    }
  }
  