
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
