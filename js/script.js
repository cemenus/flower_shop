const hamburger = document.querySelector("#hamburger");
const headerMenu = document.querySelector("#header__menu");

//hamburger__menu
if (hamburger) {
  hamburger.addEventListener("click", function (e) {
    hamburger.classList.toggle("active");
    headerMenu.classList.toggle("active");
    document.body.classList.toggle("lock");
  });
}

// scroll
const menuLinks = document.querySelectorAll("[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector("header").offsetHeight;
      if (headerMenu.classList.contains("active")) {
        document.body.classList.remove("lock");
        hamburger.classList.remove("active");
        headerMenu.classList.remove("active");
      }
      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

// coments
// const heroItems = document.querySelectorAll(".coments__hero-item");

// console.log(heroItems);
