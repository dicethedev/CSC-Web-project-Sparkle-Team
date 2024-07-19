// modal.js

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

var images = document.querySelectorAll(".product img");
images.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

var images = document.querySelectorAll(".best-selling-pro img ");
images.forEach((image) => {
  image.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Add event listeners to category links
var categoryLinks = document.querySelectorAll(".custom-nav a");
categoryLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    rotateImages();
  });
});

function rotateImages() {
  images.forEach((image) => {
    image.classList.add("rotate");
    setTimeout(() => {
      image.classList.remove("rotate");
    }, 500); // Duration of the animation
  });
}

// Script for carousel in the index page
document.addEventListener("DOMContentLoaded", function () {
  const prevSlide = document.getElementById("prevSlide");
  const nextSlide = document.getElementById("nextSlide");
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
  }

  prevSlide.addEventListener("click", function () {
    currentIndex =
      currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
  });

  nextSlide.addEventListener("click", function () {
    currentIndex =
      currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
    updateCarousel();
  });

  // Auto-slide functionality (optional)
  setInterval(function () {
    nextSlide.click();
  }, 5000); // Change slide every 5 seconds
});
