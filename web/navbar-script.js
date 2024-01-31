// Smooth scroll animation for anchor links
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, // Adjusted for navbar height
          behavior: 'smooth'
        });
      }
    });
  });

  // Toggle animation for dropdown
  document.querySelectorAll('.nav-link.dropdown-toggle').forEach(dropdown => {
    dropdown.addEventListener('click', function () {
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');

      // Close other open dropdowns
      document.querySelectorAll('.nav-link.dropdown-toggle').forEach(otherDropdown => {
        if (otherDropdown !== this) {
          otherDropdown.nextElementSibling.classList.remove('show');
        }
      });
    });
  });

  // Close dropdown on click outside
  document.addEventListener('click', function (e) {
    if (!e.target.matches('.nav-link.dropdown-toggle')) {
      document.querySelectorAll('.dropdown-menu.show').forEach(openDropdown => {
        openDropdown.classList.remove('show');
      });
    }
  });

  // Add click event listener to navbar links for 'active' class
  document.querySelectorAll('.navbar-nav li a').forEach(link => {
    link.addEventListener('click', function() {
      // Remove 'active' class from all links
      document.querySelectorAll('.navbar-nav li a').forEach(link => {
        link.classList.remove('active');
      });

      // Add 'active' class to the clicked link
      this.classList.add('active');
    });
  });

  // Wait for the DOM to be fully loaded
  // Get the hero text element
  var heroText = document.querySelector('.hero-text');

  // Function to add the 'show' class to the hero text
  function showHeroText() {
    heroText.classList.add('show');
  }

  // Call the showHeroText function after a delay (adjust the delay as needed)
  setTimeout(showHeroText, 500);

  // Get all the navigation links
  var navLinks = document.querySelectorAll('.navbar-nav li a');

  // Function to add a class on hover
  function addHoverClass() {
    this.classList.add('hovered');
  }

  // Function to remove the class on mouse leave
  function removeHoverClass() {
    this.classList.remove('hovered');
  }

  // Add event listeners to each navigation link
  navLinks.forEach(function(link) {
    link.addEventListener('mouseenter', addHoverClass);
    link.addEventListener('mouseleave', removeHoverClass);
  });
});

// Add animation for scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


