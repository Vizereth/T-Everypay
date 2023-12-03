const initMobileMenu = () => {
  const toggle = () => {
    const mobileMenuNav = document.querySelector(".mobile-menu__nav");

    if (!mobileMenuNav.classList.contains("mobile-menu__nav--active")) {
      mobileMenuNav.classList.add("mobile-menu__nav--active");
    } else {
      mobileMenuNav.classList.remove("mobile-menu__nav--active");
    }
  };

  const mobileMenu = document.querySelector(".mobile-menu");

  if (!mobileMenu) return;

  const mobileMenuToggle = document.querySelector(".mobile-menu__toggle");
  mobileMenuToggle.addEventListener("click", toggle);
};

export default initMobileMenu;