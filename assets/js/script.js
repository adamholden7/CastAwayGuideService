// Mobile nav toggle
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
    });
  });
}

// Add shadow on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

/* ---------------------------------------------------------
   Trip Cards → Prefill Booking Form
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const tripButtons = document.querySelectorAll(".trip-btn");
  const tripSelect = document.getElementById("trip-type");
  const bookingSection = document.getElementById("booking");

  if (!tripButtons.length || !tripSelect || !bookingSection) return;

  tripButtons.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      event.preventDefault();

      const tripValue = btn.getAttribute("data-trip");
      if (tripValue) {
        tripSelect.value = tripValue; // Set dropdown value
      }

      // Smooth scroll to form
      bookingSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

      // Focus for user feedback
      tripSelect.focus();
    });
  });
});
