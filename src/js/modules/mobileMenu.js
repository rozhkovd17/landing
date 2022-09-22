const mobileMenuBtn = document.getElementById("mobile-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClouseBtn = document.querySelector(".menu__close-btn");

const cb = (event) => {
  mobileMenu.classList.toggle("menu-open");
};

mobileMenuBtn.addEventListener("click", cb);
mobileMenuClouseBtn.addEventListener("click", cb);

const menuItems = document.querySelectorAll(".menu_wrap .header__menu_item");

menuItems.forEach((item) => {
  item.addEventListener("click", cb);
});
