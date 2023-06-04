function stickyHeader() {
  const header = document.querySelector(".header");
  let scrollPosition = window.pageYOffset;
  let previousScrollPosition = scrollPosition;

  window.addEventListener("scroll", function() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition < previousScrollPosition) {
      // Scrolling down
      header.classList.remove("hidden");
    } else {
      // Scrolling up
      header.classList.add("hidden");
    }
    previousScrollPosition = currentScrollPosition;
  });
}

stickyHeader()