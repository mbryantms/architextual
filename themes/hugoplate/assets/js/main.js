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
  const tocLinks = document.querySelectorAll(
    ".table-of-contents #TableOfContents a",
  );

  tocLinks.forEach((aTag) => {
    let li = aTag.closest("li");
    let nestedOl = li.querySelector("ol");

    aTag.classList.add("flex", "justify-between", "transition-colors");

    if (nestedOl) {
      let icon = document.createElement("i");
      icon.classList.add("fa", "fa-angle-right");
      icon.style.cursor = "pointer";
      icon.style.marginLeft = "5px";
      icon.style.marginTop = "10px";
      aTag.appendChild(icon);

      nestedOl.style.display = "none";

      icon.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        const isHidden = nestedOl.style.display === "none";

        nestedOl.style.display = isHidden ? "block" : "none";
        icon.classList.toggle("fa-angle-right", !isHidden);
        icon.classList.toggle("fa-angle-down", isHidden);
      });
    }
  });

  const tocLinksFor = document.querySelectorAll(
    ".table-of-contents a[href^='#']",
  );

  const activeClasses = [ "font-bold!"];

  // Collect all headings that match the TOC links
  const headings = Array.from(tocLinksFor)
    .map((link) => {
      const id = link.getAttribute("href").slice(1);
      const target = document.getElementById(id);
      return target ? { id, el: target, link } : null;
    })
    .filter(Boolean);

  // Intersection Observer for highlighting
  const observer = new IntersectionObserver(
    (entries) => {
   
      entries.forEach((entry) => {
        const id = entry.target.id;
        
        const tocLink = document.querySelector(
          `.table-of-contents a[href="#${id}"]`,
        );
        console.log(tocLink)
        if (entry.isIntersecting && tocLink) {
          // Remove active classes from all
          tocLinksFor.forEach((link) =>
            link.classList.remove(...activeClasses),
          );
          // Add to the current one
          tocLink.classList.add(...activeClasses);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -80% 0px",
      threshold: 0.1,
    },
  );

  // Observe all matched headings
  
  headings.forEach(({ el }) => observer.observe(el));
});
