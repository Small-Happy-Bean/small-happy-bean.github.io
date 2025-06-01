// Scripts of the swiper effect
// Code referred from W3School

// Init global slide index
let slide_index = 1;

// Get slide by clicking the button
function plusSlides(n) {
  slide_index += n;
  // Adapting showSlides((slide_index += n)) would be much confusing
  showSlides(slide_index);
}

// Get current slide by clicking dot
function currentSlide(n) {
  slide_index = n;
  // As the comment as what stated in showSlides(n)
  showSlides(slide_index);
}

// Show the slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("project-block");
  // console.log(slides.length);
  if (slides.length != 0) {
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slide_index = 1;
    }
    if (n < 1) {
      slide_index = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slide_index - 1].style.display = "inherit";
    dots[slide_index - 1].className += " active";
  }
}
