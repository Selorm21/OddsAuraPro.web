document.querySelector('.tips').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer');
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

// Prevent the submenu from closing when clicking inside it
document.querySelector('.betContainer').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close the submenu when clicking outside of it
document.addEventListener('click', function (event) {
  const miniButton = document.querySelector('.tips');
  const betContainer = document.querySelector('.betContainer');
  
  if (!miniButton.contains(event.target) && !betContainer.contains(event.target)) {
    betContainer.style.display = 'none';
  }
});





document.querySelectorAll('.readonly-checkbox').forEach(checkbox => {
  checkbox.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default checkbox toggle behavior
  });
});



let slideIndex = 1;
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
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  // Hide all slides
  slides.forEach(slide => slide.style.display = 'none');

  // Remove 'active' class from all dots
  dots.forEach(dot => dot.classList.remove('active'));

  // Show the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].classList.add('active');
}
