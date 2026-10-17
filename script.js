document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const navigationItems = document.querySelectorAll(".nav-links a");
  const currentYear = document.querySelector("#current-year");

  // Keep the footer year up to date.
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navigation.
  if (menuToggle && navLinks) {
    const closeMenu = () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");

      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
    });

    navigationItems.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    // Close the menu when the user clicks elsewhere.
    document.addEventListener("click", (event) => {
      const clickedInsideMenu = navLinks.contains(event.target);
      const clickedToggle = menuToggle.contains(event.target);

      if (!clickedInsideMenu && !clickedToggle) {
        closeMenu();
      }
    });

    // Close the mobile menu when returning to desktop width.
    window.addEventListener("resize", () => {
      if (window.innerWidth > 640) {
        closeMenu();
      }
    });

    // Escape key closes the open menu.
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
      }
    });
  }
   
  
  // Open Gmail app on mobile, Gmail website on desktop.
  const emailButton = document.querySelector(
    '.contact-inner a.button-primary[href*="mail.google.com"]'
  );

  if (emailButton) {
    emailButton.addEventListener("click", (event) => {
      const isMobile = /Android|iPhone|iPad|iPod/i.test(
        navigator.userAgent
      );

      if (isMobile) {
        event.preventDefault();
        window.location.href = "mailto:ayushsarathe2907@gmail.com";
      }
    });
  }

});