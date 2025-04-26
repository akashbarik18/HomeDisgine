document.addEventListener("DOMContentLoaded", () => {
  // Slider logic for class="slider" (if used elsewhere)
  const sliders = document.querySelectorAll(".slider");

  sliders.forEach((slider) => {
    let index = 0;
    const images = slider.querySelectorAll("img");

    function showSlide(i) {
      images.forEach((img, idx) => {
        img.style.display = idx === i ? "block" : "none";
      });
    }

    function nextSlide() {
      index = (index + 1) % images.length;
      showSlide(index);
    }

    showSlide(index);
    setInterval(nextSlide, 3000);
  });

  // Feedback form submission
  document.getElementById("feedback-form")?.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && message) {
      const testimonialCard = document.createElement("div");
      testimonialCard.classList.add("testimonial");

      testimonialCard.innerHTML = `<p>"${message}"</p><strong>- ${name}</strong>`;
      document.getElementById("testimonial-cards").appendChild(testimonialCard);

      document.getElementById("feedback-form").reset();
      alert("Thank you for your feedback!");
    }
  });

  // Service section animation
  const serviceItems = document.querySelectorAll(".services-list li");
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  serviceItems.forEach((item) => observer.observe(item));

  // Portfolio image slider
  document.querySelectorAll(".image-slider").forEach((slider) => {
    const images = slider.querySelectorAll("img");
    let current = 0;

    function showNextImage() {
      images[current].style.opacity = 0;
      current = (current + 1) % images.length;
      images[current].style.opacity = 1;
    }

    images[0].style.opacity = 1;
    setInterval(showNextImage, 3000);
  });

  // HOME SECTION SLIDER (.slide)
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const slideInterval = 5000;

  function showNextHomeSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  setInterval(showNextHomeSlide, slideInterval);

  // NAV MENU TOGGLE
 // Add scroll event listener to make navbar transparent when scrolled


// Toggle menu function
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
} window.toggleMenu = function () {
    const menu = document.getElementById("navMenu");
    menu.classList.toggle("active");
  };

  // Scroll Nav - Make navbar sticky and transparent
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.top2');
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled'); // Add class when scrolled
    } else {
      navbar.classList.remove('scrolled'); // Remove class when back at the top
    }
  });
});
