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













function copyToClipboard(copyTextId, copyMessageId) {
  const copyText = document.getElementById(copyTextId).innerText;
  navigator.clipboard.writeText(copyText).then(() => {
    const message = document.getElementById(copyMessageId);
    message.style.display = "inline";
    setTimeout(() => {
      message.style.display = "none";
    }, 2000); // Hide after 2 seconds
  });
}





