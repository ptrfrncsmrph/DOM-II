// Your code goes here
window.onload = () => {
  const mainNav = document.querySelector(".main-navigation")
  const mainNavClasses = mainNav.classList
  document.addEventListener("scroll", () => {
    pageYOffset !== 0
      ? mainNav.classList.add("nav-shadow")
      : mainNav.classList.remove("nav-shadow")
  })
}
