function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const overlay = document.querySelector('.overlay');
  const headerBurger = document.querySelector('.header__burger');

  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active");
      overlay.classList.add("active");
      headerBurger.classList.add("active");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active");
      overlay.classList.remove("active");
      headerBurger.classList.remove("active");
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove("active");
      burger.classList.remove("active");
      overlay.classList.remove("active");
      headerBurger.classList.remove("active");
    }
  });
}
burgerMenu();
