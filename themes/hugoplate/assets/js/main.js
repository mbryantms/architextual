// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });
})();
// Reusable Progress Bar Component
function initializeProgressBars() {
  // Find all meter containers
  const meterContainers = document.querySelectorAll(".rounded-md");

  meterContainers.forEach((container) => {
    // Get elements within this container using relative selectors
    const tooltip = container.querySelector(".tooltip-container");
    
    const progressContainer = container.querySelector(
      "#progress-bar--container",
    );
    const progressCircle = container.querySelector("#progress--circle");
    const ranger = container.querySelector("#meter--ranger");

    // Skip if any required element is missing
    if (!tooltip || !progressContainer || !progressCircle || !ranger) {
      console.error("Missing required elements for progress meter", container);
      return;
    }

    // Function to update tooltip text
    function updateTooltip() {
      tooltip.textContent = `${ranger.value}%`;
    }

    // Alternative 1: Using display style property
    function showTooltip() {
      tooltip.classList.remove("hidden")
      tooltip.classList.add("block!")
    }

    function hideTooltip() {
      tooltip.classList.remove("block!")
      tooltip.classList.add("hidden")
    }

    // Function to update the circle visual
    function updateMeter(rangeValue) {
      progressCircle.style.strokeDasharray = "100";
      progressCircle.style.strokeDashoffset = 100 - rangeValue;
      progressCircle.style.stroke = rangeValue === "0" ? "none" : "#28411B";
    }

    // Handle mouse wheel events
    function handleWheelEvent(e) {
      e.preventDefault();
      const newValue = Math.min(
        100,
        Math.max(0, +ranger.value + (e.deltaY > 0 ? -1 : 1)),
      );
      ranger.value = newValue;
      ranger.dispatchEvent(new Event("input"));
    }

    // Set up event listeners
    progressContainer.addEventListener("mouseenter", showTooltip);
    progressContainer.addEventListener("mouseleave", hideTooltip);

    ranger.addEventListener("input", function () {
      updateTooltip();
      updateMeter(this.value);
    });

    progressContainer.addEventListener("wheel", handleWheelEvent);

    // Initialize with current value
    updateTooltip();
    updateMeter(ranger.value);
  });
}

// Run when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", initializeProgressBars);
