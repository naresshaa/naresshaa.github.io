document.addEventListener("DOMContentLoaded", function () {
  // Smooth scroll for menu links
  const menuLinks = document.querySelectorAll(".menu a");
  menuLinks.forEach((link, index) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Mapping menu items to respective class targets
      const targetClasses = [
        "brand-text",        // HOME
        "products-grid",     // PRODUCT
        "featured-collections", // TRENDS
        "join-workshop",     // WORKSHOP
        "footer"             // CONTACT
      ];

      // Get the corresponding class for the clicked menu
      const targetClass = targetClasses[index];
      const targetElement = document.querySelector(`.${targetClass}`);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Adjust for fixed navbar height
          behavior: "smooth",
        });
      }
    });
  });

  // Filter Best Sellers products
  const filters = document.querySelectorAll(".filter");
  const products = document.querySelectorAll(".product-card");
  filters.forEach((filter) => {
    filter.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default action to avoid scrolling to top

      // Remove 'active' class from all filters
      filters.forEach((f) => f.classList.remove("active"));
      filter.classList.add("active");

      const category = filter.textContent.toLowerCase();
      products.forEach((product) => {
        if (
          category === "all" ||
          product
            .querySelector("h3")
            .textContent.toLowerCase()
            .includes(category)
        ) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });

  // Toggle active state on product card hover (optional effect)
  const productCards = document.querySelectorAll(".product-card");
  productCards.forEach((card) => {
    card.addEventListener("mouseover", function () {
      card.classList.add("active");
    });
    card.addEventListener("mouseout", function () {
      card.classList.remove("active");
    });
  });

  // Show/hide arrow button in Hero Section based on scroll
  const arrowButton = document.querySelector(".arrow-button");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      arrowButton.style.display = "block";
    } else {
      arrowButton.style.display = "none";
    }
  });

  // Scroll to top when arrow button is clicked
  arrowButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Add smooth scroll to Join Workshop button
  const joinButton = document.querySelector(".btn-join");
  if (joinButton) {
    joinButton.addEventListener("click", function (event) {
      event.preventDefault();
      const workshopSection = document.querySelector(".join-workshop");
      window.scrollTo({
        top: workshopSection.offsetTop - 50, // adjust for navbar height
        behavior: "smooth",
      });
    });
  }
});
