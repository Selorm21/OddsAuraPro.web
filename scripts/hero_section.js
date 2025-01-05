
let slideIndex = 1;
let autoSlideInterval; // Variable to store the interval
showSlide(slideIndex);

// Function to change slide with arrows
function changeSlide(n) {
  showSlide(slideIndex += n);
}

// Function to go to a specific slide
function currentSlide(n) {
  showSlide(slideIndex = n);
}

// Function to display the appropriate slide
function showSlide(n) {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  if (slides.length === 0 || dots.length === 0) return;

  // Reset slideIndex if it exceeds the number of slides
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides and deactivate all dots
  slides.forEach(slide => slide.style.display = 'none');
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the current slide and activate the corresponding dot
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}

// Auto-slide functionality
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(1); // Move to the next slide
  }, 5000); // Adjust the interval time as needed (5000ms = 5 seconds)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto-sliding on page load
startAutoSlide();

// Pause the slideshow on mouse hover and resume on mouse leave
const slideshowContainer = document.querySelector('.slideshow-container');
slideshowContainer.addEventListener('mouseover', stopAutoSlide);
slideshowContainer.addEventListener('mouseout', startAutoSlide);

















document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("bet-responsibly-content");
  const container = document.getElementById("bet-responsibly-container");

  let isManualScrolling = false; // Track manual scrolling state

  // Add scrolling class for automatic scrolling when visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isManualScrolling) {
        content.classList.add("scrolling");
      } else {
        content.classList.remove("scrolling");
      }
    });
  });
  observer.observe(container);

  // Stop automatic scrolling during manual interaction
  const stopAutoScrolling = () => {
    isManualScrolling = true;
    content.classList.remove("scrolling");
    content.style.animation = 'none'; // Remove animation during manual scroll
  };

  // Resume automatic scrolling after a delay
  const resumeAutoScrolling = () => {
    isManualScrolling = false;
    content.classList.add("scrolling");
    content.style.animation = 'scroll-up 40s linear infinite'; // Reapply animation
  };

  // Touch events for manual scrolling (mobile)
  let startTouchY = 0;

  container.addEventListener("touchstart", (e) => {
    stopAutoScrolling();
    startTouchY = e.touches[0].clientY;
  });

  container.addEventListener("touchmove", (e) => {
    const touchDiff = startTouchY - e.touches[0].clientY;
    container.scrollTop += touchDiff;
    startTouchY = e.touches[0].clientY;
  });

  container.addEventListener("touchend", () => {
    setTimeout(resumeAutoScrolling, 500); // Resume after delay
  });

  // Mouse events for manual scrolling (desktop)
  let isMouseDown = false;
  let startMouseY = 0;

  container.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    stopAutoScrolling();
    startMouseY = e.clientY;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;

    const mouseDiff = startMouseY - e.clientY;
    container.scrollTop += mouseDiff;
    startMouseY = e.clientY;
  });

  container.addEventListener("mouseup", () => {
    isMouseDown = false;
    setTimeout(resumeAutoScrolling, 500); // Resume after delay
  });

  // Handle wheel events (desktop)
  container.addEventListener("wheel", () => {
    stopAutoScrolling();
    setTimeout(resumeAutoScrolling, 500); // Resume after delay
  });

  // Handle scroll events to track manual interactions
  let scrollTimeout;
  container.addEventListener("scroll", () => {
    stopAutoScrolling();
    if (scrollTimeout) clearTimeout(scrollTimeout);

    scrollTimeout = setTimeout(() => {
      if (!isMouseDown && !isManualScrolling) {
        resumeAutoScrolling();
      }
    }, 300); // Slight delay before resuming auto-scroll
  });
});
