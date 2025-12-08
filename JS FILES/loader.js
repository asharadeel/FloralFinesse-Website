window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Add the slide animation class
  loader.classList.add("loader-slide-up");

  // Remove it from the DOM after animation ends
  setTimeout(() => {
    loader.style.display = "none";
  }, 800); // matches the CSS transition time
});

