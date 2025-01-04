
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

  // Start the automatic scroll when content is visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        content.classList.add("scrolling"); // Start scrolling when visible
      } else {
        content.classList.remove("scrolling"); // Stop scrolling when not visible
      }
    });
  });

  observer.observe(container);

  // Disable automatic scrolling during manual scrolling
  let isManualScrolling = false;

  // For touch events (mobile)
  let isTouching = false;
  let startTouch = 0;

  container.addEventListener('touchstart', (e) => {
    isManualScrolling = true; // User has started manual scroll
    content.classList.remove("scrolling"); // Stop automatic scrolling
    isTouching = true;
    startTouch = e.touches[0].clientY; // Record touch start position
  });

  container.addEventListener('touchmove', (e) => {
    if (!isTouching) return;
    const touchDiff = e.touches[0].clientY - startTouch; // Calculate the difference
    container.scrollTop -= touchDiff; // Adjust scroll position
    startTouch = e.touches[0].clientY; // Update start position for smooth scrolling
  });

  container.addEventListener('touchend', () => {
    isTouching = false; // Stop scrolling after touch ends
    isManualScrolling = false; // Reset manual scroll flag
    content.classList.add("scrolling"); // Re-enable automatic scrolling
  });

  // For mouse events (desktop)
  let isMouseDown = false;
  let mouseStart = 0;

  container.addEventListener('mousedown', (e) => {
    isManualScrolling = true; // User has started manual scroll
    content.classList.remove("scrolling"); // Stop automatic scrolling
    isMouseDown = true;
    mouseStart = e.clientY; // Record mouse position
  });

  container.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    const mouseDiff = e.clientY - mouseStart; // Calculate the difference
    container.scrollTop -= mouseDiff; // Adjust scroll position
    mouseStart = e.clientY; // Update mouse position
  });

  container.addEventListener('mouseup', () => {
    isMouseDown = false; // Stop scrolling after mouse release
    isManualScrolling = false; // Reset manual scroll flag
    content.classList.add("scrolling"); // Re-enable automatic scrolling
  });

  // Ensure the scroll position is always adjustable when scrolling manually
  container.addEventListener('wheel', () => {
    if (!isManualScrolling) {
      content.classList.remove("scrolling"); // Pause automatic scrolling if user uses wheel
    }
  });

  // Automatically restart the scrolling after a brief pause if manual scrolling has stopped
  let timeout;
  container.addEventListener('scroll', () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (!isManualScrolling) {
        content.classList.add("scrolling"); // Re-enable automatic scrolling
      }
    }, 200); // Allow automatic scrolling to resume after 200ms of no manual scroll
  });
});






