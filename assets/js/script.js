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

/* ---------------------------------------------------------
   Gallery Carousel (autoplay + swipe + manual controls)
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  if (!carousel) return; // no gallery on this page

  const track = carousel.querySelector(".carousel-track");
  const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
  const prevBtn = carousel.querySelector(".carousel-btn.prev");
  const nextBtn = carousel.querySelector(".carousel-btn.next");
  const dotsContainer = carousel.querySelector(".carousel-dots");

  if (!track || !slides.length) return;

  let currentIndex = 0;
  const maxIndex = slides.length - 1;
  const autoplayDelay = 5000; // ms
  let autoplayId = null;

  // Create dots
  const dots = slides.map((_, index) => {
    const dot = document.createElement("button");
    dot.setAttribute("type", "button");
    dot.classList.toggle("active", index === 0);
    dotsContainer.appendChild(dot);
    dot.addEventListener("click", () => {
      goToSlide(index);
      restartAutoplay();
    });
    return dot;
  });

  function updateTrackPosition() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;
  }

  function updateDots() {
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex);
    });
  }

  function goToSlide(index) {
    currentIndex = index;
    if (currentIndex < 0) currentIndex = maxIndex;
    if (currentIndex > maxIndex) currentIndex = 0;
    updateTrackPosition();
    updateDots();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Buttons
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      restartAutoplay();
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      restartAutoplay();
    });
  }

  // Autoplay
  function startAutoplay() {
    if (autoplayId) return;
    autoplayId = setInterval(nextSlide, autoplayDelay);
  }

  function stopAutoplay() {
    if (!autoplayId) return;
    clearInterval(autoplayId);
    autoplayId = null;
  }

  function restartAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Pause autoplay on hover (desktop)
  carousel.addEventListener("mouseenter", stopAutoplay);
  carousel.addEventListener("mouseleave", startAutoplay);

  // Swipe support (touch)
  let startX = 0;
  let isSwiping = false;

  track.addEventListener("touchstart", function (e) {
    if (!e.touches || !e.touches.length) return;
    startX = e.touches[0].clientX;
    isSwiping = true;
    stopAutoplay();
  }, { passive: true });

  track.addEventListener("touchmove", function (e) {
    if (!isSwiping || !e.touches || !e.touches.length) return;
    // You could add visual drag feedback here if you want
  }, { passive: true });

  track.addEventListener("touchend", function (e) {
    if (!isSwiping) return;
    isSwiping = false;

    const endX = (e.changedTouches && e.changedTouches[0].clientX) || startX;
    const deltaX = endX - startX;

    const threshold = 50; // px to count as a swipe
    if (deltaX > threshold) {
      // swipe right -> previous slide
      prevSlide();
    } else if (deltaX < -threshold) {
      // swipe left -> next slide
      nextSlide();
    }

    restartAutoplay();
  });

  // Initialize
  goToSlide(0);
  startAutoplay();
});
