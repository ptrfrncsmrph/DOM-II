// Your code goes here
window.onload = () => {
  const mainNav = document.querySelector(".main-navigation")
  const intro = document.querySelector(".intro img")
  document.addEventListener("scroll", () => {
    pageYOffset !== 0
      ? mainNav.classList.add("nav-shadow")
      : mainNav.classList.remove("nav-shadow")
  })
  intro.addEventListener("mouseover", () => {
    intro.classList.toggle("hover-invert")
  })
}
