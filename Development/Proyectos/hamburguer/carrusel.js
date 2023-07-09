document.addEventListener("DOMContentLoaded", function() {
  var slides = document.querySelectorAll(".slide");
  var dots = document.querySelectorAll(".dot");
  var prevBtn = document.querySelector(".prev");
  var nextBtn = document.querySelector(".next");
  var currentIndex = 0;

  showSlide(currentIndex);

  prevBtn.addEventListener("click", function() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1;
    }
    showSlide(currentIndex);
  });

  nextBtn.addEventListener("click", function() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  });

  dots.forEach(function(dot) {
    dot.addEventListener("click", function() {
      var index = parseInt(dot.getAttribute("data-index"));
      showSlide(index);
    });
  });

  function showSlide(index) {
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].classList.remove("active");
    }
    slides[index].style.display = "block";
    dots[index].classList.add("active");
  }
});
