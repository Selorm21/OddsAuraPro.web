// Function to close all mini-menus except the currently clicked one
function closeOtherMenus(currentMenu) {
  const allMenus = document.querySelectorAll('.betContainer, .betContainer_1, .betContainer_2, .betContainer_3');
  allMenus.forEach(menu => {
    if (menu !== currentMenu) {
      menu.style.display = 'none';
    }
  });
}

// Ensure all menus are closed when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const allMenus = document.querySelectorAll('.betContainer, .betContainer_1, .betContainer_2, .betContainer_3');
  allMenus.forEach(menu => {
    menu.style.display = 'none';
  });
});

// Add event listeners for each tips button
document.querySelector('.tips').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer');
  closeOtherMenus(betContainer); // Close other menus
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.tips_1').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer_1');
  closeOtherMenus(betContainer); // Close other menus
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.tips_2').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer_2');
  closeOtherMenus(betContainer); // Close other menus
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

document.querySelector('.tips_3').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer_3');
  closeOtherMenus(betContainer); // Close other menus
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

// Prevent submenus from closing when clicking inside them
document.querySelectorAll('.betContainer, .betContainer_1, .betContainer_2, .betContainer_3').forEach(container => {
  container.addEventListener('click', function (event) {
    event.stopPropagation();
  });
});

// Close all menus when clicking outside
document.addEventListener('click', function () {
  const allMenus = document.querySelectorAll('.betContainer, .betContainer_1, .betContainer_2, .betContainer_3');
  allMenus.forEach(menu => {
    menu.style.display = 'none';
  });
});







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













// COUNTER
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".figure"); // Select all figure elements
  const options = {
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  };

  const animateCounter = (entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const targetValue = parseInt(counter.textContent.replace(/,/g, ''), 10); // Parse the target value
      let currentValue = 0;

      const updateCounter = () => {
        const increment = Math.ceil(targetValue / 50); // Adjust speed by dividing target value
        currentValue += increment;

        if (currentValue < targetValue) {
          counter.textContent = currentValue.toLocaleString(); // Format number with commas
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = targetValue.toLocaleString(); // Ensure final value matches target
        }
      };

      updateCounter();
      observer.unobserve(counter); // Stop observing once animation is done
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(animateCounter);
  }, options);

  counters.forEach((counter) => observer.observe(counter));
});









// CALENDAR
document.addEventListener("DOMContentLoaded", function () {
  const calendarBody = document.getElementById("calendar-body");
  const monthYear = document.getElementById("month-year");
  const prevMonth = document.getElementById("prev-month");
  const nextMonth = document.getElementById("next-month");

  const today = new Date();
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear();

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  function renderCalendar(month, year) {
    calendarBody.innerHTML = ""; // Clear previous calendar

    const firstDay = new Date(year, month).getDay(); // Get the day of the week for the 1st day of the month
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month

    // Display month and year
    monthYear.textContent = `${months[month]} ${year}`;

    // Create empty cells for days before the 1st
    let date = 1;
    for (let i = 0; i < 6; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement("td");

        if (i === 0 && j < firstDay) {
          cell.textContent = ""; // Empty cell
        } else if (date > daysInMonth) {
          break; // Stop when all days are displayed
        } else {
          cell.textContent = date;
          if (
            date === today.getDate() &&
            year === today.getFullYear() &&
            month === today.getMonth()
          ) {
            cell.classList.add("today");
          }
          date++;
        }
        row.appendChild(cell);
      }
      calendarBody.appendChild(row);
    }
  }

  function changeMonth(step) {
    currentMonth += step;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    } else if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
  }

  prevMonth.addEventListener("click", () => changeMonth(-1));
  nextMonth.addEventListener("click", () => changeMonth(1));

  renderCalendar(currentMonth, currentYear); // Initial render
});









// CLOCK
function updateClock() {
  const clock = document.querySelector('.clock');
  const hourHand = clock.querySelector('.hour-hand');
  const minuteHand = clock.querySelector('.minute-hand');
  const secondHand = clock.querySelector('.second-hand');

  const now = new Date(); // Local time
  const hours = now.getHours(); // Local hours
  const minutes = now.getMinutes(); // Local minutes
  const seconds = now.getSeconds(); // Local seconds

  // Calculate hand rotations
  const secondDeg = (seconds / 60) * 360 + 90; // Offset by 90° for initial rotation
  const minuteDeg = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  const hourDeg = (hours % 12 / 12) * 360 + (minutes / 60) * 30 + 90;

  // Apply transformations
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  // Update digital clock
  const digitalTime = document.getElementById('digital-time');
  const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
  digitalTime.textContent = formattedTime;
}

function padZero(value) {
  return value < 10 ? '0' + value : value;
}

setInterval(updateClock, 1000);
updateClock(); // Initialize the clock immediately









// CONTACTS  ARE LOCATED
  document.querySelector('.contact').addEventListener('click', function () {
    document.querySelector('.contacts').scrollIntoView({ behavior: 'smooth' });
  });






  // ABOUT LINKED 
  document.querySelector('.about').addEventListener('click', function () {
    window.location.href = 'about.html'; // Replace 'about.html' with the relative or absolute path to your page.
    }
  );







   // ACADEMY LINKED 
   document.querySelector('.academy').addEventListener('click', function () {
    window.location.href = 'bettingAcademy.html'; // Replace 'about.html' with the relative or absolute path to your page.
    }
  );



// HOMEBUTTON LINKED 
document.querySelector('.homebuttonA').addEventListener('click', function () {
  window.location.href = '../OddsAuraPro.html'; // Redirect to OddsAuraPro.html
});






let lastScrollTop = 0;  // To keep track of the last scroll position
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  let currentScroll = window.scrollY;

  // If the user scrolls down, hide the header
  if (currentScroll > lastScrollTop) {
    header.style.top = '-60px';  // Hide header by moving it out of view
  } else {
    header.style.top = '0';  // Show header when scrolling up
  }

  lastScrollTop = currentScroll;  // Update last scroll position
});






// JavaScript to toggle the menu and buttons on small screens
document.getElementById("menuButton").addEventListener("click", function(event) {
  var buttons = document.getElementById("buttons");

  // Prevent the click event from propagating to the document
  event.stopPropagation();

  // Toggle the submenu when the menu button is clicked
  if (buttons.style.display === "block") {
    buttons.style.display = "none";  // Hide the submenu if it's visible
  } else {
    buttons.style.display = "block";  // Show the submenu if it's hidden
  }
});

// Close the submenu if the user clicks outside of it
document.addEventListener("click", function(event) {
  var buttons = document.getElementById("buttons");
  var menuButton = document.getElementById("menuButton");

  // Check if the click was outside the menu button and submenu
  if (!menuButton.contains(event.target) && !buttons.contains(event.target)) {
    buttons.style.display = "none";  // Hide the submenu
  }
});










  

  











