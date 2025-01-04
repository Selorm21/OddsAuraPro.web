function updateTime() {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString(undefined, options);
  const time = now.toLocaleTimeString();

  document.getElementById("time-date-bar").innerText =
    date + " | " + time;
}

setInterval(updateTime, 1000);
updateTime(); // Initialize the time when the page loads









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
  window.location.href = '../index.html'; // Redirect to OddsAuraPro.html
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
























