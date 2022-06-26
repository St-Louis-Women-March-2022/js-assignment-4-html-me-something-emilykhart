// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
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
    captionText.innerHTML = dots[slideIndex-1].alt;
  }

  function openModalWork() {
    document.getElementById("myModalWork").style.display = "block";
  }
  
  // Close the Modal
  function closeModalWork() {
    document.getElementById("myModalWork").style.display = "none";
  }
  
  let slideIndexWork = 1;
  showSlidesWork(slideIndexWork);
  
  // Next/previous controls
  function plusSlidesWork(n) {
    showSlidesWork(slideIndexWork += n);
  }
  
  // Thumbnail image controls
  function currentSlideWork(n) {
    showSlidesWork(slideIndexWork = n);
  }
  
  function showSlidesWork(n) {
    let iWork;
    let slidesWork = document.getElementsByClassName("mySlidesWork");
    let dotsWork = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slidesWork.length) {slideIndexWork = 1}
    if (n < 1) {slideIndexWork = slidesWork.length}
    for (iWork = 0; iWork < slidesWork.length; i++) {
      slidesWork[i].style.display = "none";
    }
    for (i = 0; i < dotsWork.length; i++) {
      dotsWork[i].className = dotsWork[i].className.replace(" active", "");
    }
    slidesWork[slideIndexWork-1].style.display = "block";
    dotsWork[slideIndexWork-1].className += " active";
    captionText.innerHTML = dotsWork[slideIndexWork-1].alt;
  }