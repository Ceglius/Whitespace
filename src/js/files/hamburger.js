function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  const overlay = document.querySelector('.overlay');

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      body.classList.add("locked");
      overlay.classList.add("active");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      body.classList.remove("locked");
      overlay.classList.remove("active");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.98) {
      body.classList.remove("locked");
    }
  });
}
burgerMenu();
