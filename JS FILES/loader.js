window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  if (!loader) return;

  // Fade the loader out
  loader.classList.add("loader-hidden");

  // Remove it from the DOM after animation ends
  setTimeout(() => {
    loader.style.display = "none";
  }, 800); // matches the CSS transition time
});
