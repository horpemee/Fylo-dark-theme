const burger = document.querySelector(".burger");
const navLink = document.querySelector(".nav-link");

burger.addEventListener("click", handleClick);

function handleClick() {
  navLink.classList.toggle("active");
  burger.classList.toggle("active");
}
