function toggleMenu() {
  let menu = document.getElementById("main-menu");
  menu.classList.toggle("show-small");

  let name = document.getElementById("name");
  let menuIcon = document.getElementById("menu-icon");

  let mainContent = document.getElementById("software-main");

  if (menu.classList.contains("show-small")) {
    // name.style.paddingTop = "150px";
    // menuIcon.src = "./images/cancel.png";
    if (name) {
      name.style.paddingTop = "150px";
    }
    menuIcon.src = "./images/cancel.png";
  } else {
    // name.style.paddingTop = "0px"; 
    // menuIcon.src = "./images/menu.png";
    if (name) {
      name.style.paddingTop = "0px";
    }
    menuIcon.src = "./images/menu.png";
  }

  if (menu.classList.contains("show-small")) {
    if (mainContent) {
        mainContent.style.marginTop = "250px"; // Push down
    }
    menuIcon.src = "./images/cancel.png";
  } else {
    if (mainContent) {
        mainContent.style.marginTop = "50px"; // Reset
    }
    menuIcon.src = "./images/menu.png";
}
}

/* Skills Image slider*/

document.addEventListener("DOMContentLoaded", function () {
  const skillsBanner = document.getElementById("skills-banner");
  const images = Array.from(skillsBanner.getElementsByClassName("image"));
  let visibleImages = 5; // Default for desktop
  let index = 0;

  // Function to update visible images based on screen size
  function updateVisibleImages() {
    const width = window.innerWidth;

    if (width <= 320) {
        visibleImages = 2;
    } else if (width <= 480) {
        visibleImages = 2;
    } else if (width <= 630) {
        visibleImages = 3;
    } else if (width <= 768) {
        visibleImages = 3;
    } else {
        visibleImages = 5;
    }
    index = 0; // Reset index when changing the number of visible images
    updateImagesDisplay();
}
  // Function to show only a certain number of images
  function updateImagesDisplay() {
      images.forEach((img, i) => {
          img.style.display = i >= index && i < index + visibleImages ? "inline-block" : "none";
      });
  }

  // Function to scroll groups of images every 3 seconds
  function scrollImages() {
      index = (index + visibleImages) % images.length;
      updateImagesDisplay();
  }

  // Initial setup
  updateVisibleImages();
  setInterval(scrollImages, 2000);

  // Listen for window resize to adjust the visible images dynamically
  window.addEventListener("resize", updateVisibleImages);
});