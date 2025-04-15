// Menu toggle function
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




// Skills Image slider
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

  // Ensure this script only affects #skills-banner, not the modal
  console.log("Skills scrolling initialized for banner only.");
});




// Modal function
document.addEventListener("DOMContentLoaded", function () {
  const viewSkillsButton = document.getElementById("view-skills");
  const skillsModal = document.getElementById("skills-modal");
  const closeModal = document.getElementById("close-modal");
  const modalSkillsContainer = document.getElementById("modal-skills-container");

  // Function to populate the modal with all skills
  function populateModalSkills() {
    modalSkillsContainer.innerHTML = ""; // Clear existing content
  
    // Select all images from the DOM, not just the visible ones
    const allSkills = Array.from(document.querySelectorAll("#skills-banner .image"));
  
    // Log total images for debugging
    console.log(`Total skills detected for modal: ${allSkills.length}`);
  
    allSkills.forEach((skill, index) => {
      const skillClone = skill.cloneNode(true); // Clone each skill image
      skillClone.style.display = "inline-block"; // Ensure it's visible in the modal
      modalSkillsContainer.appendChild(skillClone); // Append to modal
      console.log(`Appended skill ${index + 1}: ${skill.src}`);
    });
  
    console.log("All skills appended to modal.");
  }
  
  
  // Open Modal
  viewSkillsButton.addEventListener("click", () => {
    populateModalSkills(); // Populate modal dynamically
    skillsModal.style.display = "block"; // Show modal
  });

  // Close Modal
  closeModal.addEventListener("click", () => {
    skillsModal.style.display = "none"; // Hide modal
  });

  // Close Modal on Outside Click
  window.addEventListener("click", (event) => {
    if (event.target === skillsModal) {
      skillsModal.style.display = "none";
    }
  });
});



// Paignation function
document.addEventListener("DOMContentLoaded", () => {
  const cardsPerPage = 4;
  const cards = Array.from(document.querySelectorAll(".project-card"));
  const pagination = document.getElementById("pagination");

  let currentPage = 1;
  const totalPages = Math.ceil(cards.length / cardsPerPage);

  function displayPage(page) {
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;

    cards.forEach((card, index) => {
      card.style.display = index >= start && index < end ? "block" : "none";
    });

    renderPaginationButtons(page);
  }

  function renderPaginationButtons(current) {
    pagination.innerHTML = "";

    if (totalPages <= 1) return;

    if (current > 1) {
      const prevBtn = document.createElement("button");
      prevBtn.innerText = "Prev";
      prevBtn.onclick = () => displayPage(current - 1);
      pagination.appendChild(prevBtn);
    }

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.innerText = i;
      if (i === current) btn.classList.add("active");
      btn.onclick = () => displayPage(i);
      pagination.appendChild(btn);
    }

    if (current < totalPages) {
      const nextBtn = document.createElement("button");
      nextBtn.innerText = "Next";
      nextBtn.onclick = () => displayPage(current + 1);
      pagination.appendChild(nextBtn);
    }
  }

  displayPage(currentPage);
});
