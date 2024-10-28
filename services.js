
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


    document.addEventListener('DOMContentLoaded', function () {
        var dropdownItem = document.querySelector('.project-wrapper');
        var dropdown = document.querySelector('.arrow-div');
        console.log(dropdown,dropdownItem);
        dropdownItem.addEventListener('mouseenter', function (e) {
            dropdown.classList.add('hovered');
            
        });
        dropdownItem.addEventListener('mouseleave', function () {
            dropdown.classList.remove('hovered');
        })
        
    })

