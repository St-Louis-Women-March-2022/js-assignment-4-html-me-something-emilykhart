// Open the Modal
function openModalSchool() {
    document.getElementById("myModalSchool").style.display = "block";
  }
  
  // Close the Modal
  function closeModalSchool() {
    document.getElementById("myModalSchool").style.display = "none";
  }
  
  let slideIndexSchool = 1;
  showSlidesSchool(slideIndexSchool);
  
  // Next/previous controls
  function plusSlidesSchool(n) {
    showSlidesSchool(slideIndexSchool += n);
  }
  
  // Thumbnail image controls
  function currentSlideSchool(n) {
    showSlidesSchool(slideIndexSchool = n);
  }
  
  function showSlidesSchool(n) {
    let i;
    let slidesSchool = document.getElementsByClassName("mySlidesSchool");
    let dotsSchool = document.getElementsByClassName("demoSchool");
    let captionTextSchool = document.getElementById("captionSchool");
    if (n > slidesSchool.length) {slideIndexSchool = 1}
    if (n < 1) {slideIndexSchool = slidesSchool.length}
    for (i = 0; i < slidesSchool.length; i++) {
      slidesSchool[i].style.display = "none";
    }
    for (i = 0; i < dotsSchool.length; i++) {
      dotsSchool[i].className = dotsSchool[i].className.replace(" activeSchool", "");
    }
    slidesSchool[slideIndexSchool-1].style.display = "block";
    dotsSchool[slideIndexSchool-1].className += " activeSchool";
    captionTextSchool.innerHTML = dotsSchool[slideIndexSchool-1].alt;
  }

  // Open the Modal
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
  let i;
  let slidesWork = document.getElementsByClassName("mySlidesWork");
  let dotsWork = document.getElementsByClassName("demoWork");
  let captionTextWork = document.getElementById("captionWork");
  if (n > slidesWork.length) {slideIndexWork = 1}
  if (n < 1) {slideIndexWork = slidesWork.length}
  for (i = 0; i < slidesWork.length; i++) {
    slidesWork[i].style.display = "none";
  }
  for (i = 0; i < dotsWork.length; i++) {
    dotsWork[i].className = dotsWork[i].className.replace(" activeWork", "");
  }
  slidesWork[slideIndexWork-1].style.display = "block";
  dotsWork[slideIndexWork-1].className += " activeWork";
  captionTextWork.innerHTML = dotsWork[slideIndexWork-1].alt;
}

// Open the Modal
function openModalPersonal() {
  document.getElementById("myModalPersonal").style.display = "block";
}

// Close the Modal
function closeModalPersonal() {
  document.getElementById("myModalPersonal").style.display = "none";
}

let slideIndexPersonal = 1;
showSlidesPersonal(slideIndexPersonal);

// Next/previous controls
function plusSlidesPersonal(n) {
  showSlidesPersonal(slideIndexPersonal += n);
}

// Thumbnail image controls
function currentSlidePersonal(n) {
  showSlidesPersonal(slideIndexPersonal = n);
}

function showSlidesPersonal(n) {
  let i;
  let slidesPersonal = document.getElementsByClassName("mySlidesPersonal");
  let dotsPersonal = document.getElementsByClassName("demoSchool");
  let captionTextPersonal = document.getElementById("captionPersonal");
  if (n > slidesPersonal.length) {slideIndexPersonal = 1}
  if (n < 1) {slideIndexPersonal = slidesPersonal.length}
  for (i = 0; i < slidesPersonal.length; i++) {
    slidesPersonal[i].style.display = "none";
  }
  for (i = 0; i < dotsPersonal.length; i++) {
    dotsPersonal[i].className = dotsPersonal[i].className.replace(" activeSchool", "");
  }
  slidesPersonal[slideIndexPersonal-1].style.display = "block";
  dotsPersonal[slideIndexPersonal-1].className += " activeSchool";
  captionTextPersonal.innerHTML = dotsPersonal[slideIndexPersonal-1].alt;
}

