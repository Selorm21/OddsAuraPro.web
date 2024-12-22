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

document.querySelector('.tips_1').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer_1');
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

// Prevent the submenu from closing when clicking inside it
document.querySelector('.betContainer_1').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close the submenu when clicking outside of it
document.addEventListener('click', function (event) {
  const miniButton = document.querySelector('.tips_1');
  const betContainer = document.querySelector('.betContainer_1');

  if (!miniButton.contains(event.target) && !betContainer.contains(event.target)) {
    betContainer.style.display = 'none';
  }
});


document.querySelector('.tips_2').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer_2');
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

// Prevent the submenu from closing when clicking inside it
document.querySelector('.betContainer_2').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close the submenu when clicking outside of it
document.addEventListener('click', function (event) {
  const miniButton = document.querySelector('.tips_2');
  const betContainer = document.querySelector('.betContainer_2');

  if (!miniButton.contains(event.target) && !betContainer.contains(event.target)) {
    betContainer.style.display = 'none';
  }
});


document.querySelector('.tips_3').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click event from propagating to the document
  const betContainer = document.querySelector('.betContainer_3');
  betContainer.style.display = betContainer.style.display === 'block' ? 'none' : 'block';
});

// Prevent the submenu from closing when clicking inside it
document.querySelector('.betContainer_3').addEventListener('click', function (event) {
  event.stopPropagation(); // Prevent the click from propagating to the document
});

// Close the submenu when clicking outside of it
document.addEventListener('click', function (event) {
  const miniButton = document.querySelector('.tips_3');
  const betContainer = document.querySelector('.betContainer_3');

  if (!miniButton.contains(event.target) && !betContainer.contains(event.target)) {
    betContainer.style.display = 'none';
  }
});








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
