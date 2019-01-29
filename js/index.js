// Your code goes here
window.onload = () => {
  const mainNav = document.querySelector(".main-navigation")
  const intro = document.querySelector(".intro img")
  const modal = document.createElement("div")
  modal.classList.add("modal", "hide")
  document.body.append(modal)

  document.addEventListener("scroll", () => {
    pageYOffset !== 0
      ? mainNav.classList.add("nav-shadow")
      : mainNav.classList.remove("nav-shadow")
  })
  intro.addEventListener("mouseover", () => {
    intro.classList.toggle("hover-invert")
  })
  document.addEventListener("keydown", e => {
    const key = e.key
    modal.innerHTML = `<h1>${key}</h1>`
    modal.classList.remove("hide")
    setTimeout(() => {
      modal.classList.add("hide")
    }, 500)
  })
}
