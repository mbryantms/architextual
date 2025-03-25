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

document.addEventListener("DOMContentLoaded", function () {
  // Select all <li> elements that contain a nested <ol>
  document.querySelectorAll("#TableOfContents li").forEach((li) => {
      let nestedOl = li.querySelector("ol");
      let aTag = li.querySelector("a");
      aTag.classList.add("flex", "items-center", "justify-between");

      if (nestedOl && aTag) {
          // Create a collapse icon inside <a>
          let icon = document.createElement("i");
          icon.classList.add("fa", "fa-angle-right"); 
          icon.style.cursor = "pointer";
          icon.style.marginLeft = "5px";

          // Append the icon inside the <a> tag
          aTag.appendChild(icon);

          // Hide nested list initially
          nestedOl.style.display = "none";

          // Toggle functionality
          aTag.addEventListener("click", function (event) {
              event.preventDefault(); // Prevent default link behavior

              if (nestedOl.style.display === "none") {
                  nestedOl.style.display = "block";
                  icon.classList.add("fa", "fa-angle-down");  
              } else {
                  nestedOl.style.display = "none";
                  icon.classList.add("fa", "fa-angle-right");  
              }
          });
      }
  });
});

