// Your code goes here
window.onload = () => {
  const mainNav = document.querySelector(".main-navigation")
  const intro = document.querySelector(".intro img")
  const modal = document.createElement("div")
  const imgs = document.querySelectorAll("img")
  const anchors = document.querySelectorAll("a")
  const introP = document.querySelector(".intro p")

  const introPAdder = str => {
    const p = document.createElement("p")
    p.textContent = str
    introP.prepend(p)
  }

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
  imgs.forEach(img => {
    img.addEventListener("drag", e => {
      e.currentTarget.style.display = "none"
    })
    img.addEventListener("dragend", e => {
      e.currentTarget.style.display = "block"
    })
    img.addEventListener("dblclick", e => {
      e.currentTarget.classList.toggle("blow-up")
    })
  })
  anchors.forEach(a => {
    a.addEventListener("focus", e => {
      introPAdder(e.currentTarget.textContent)
    })
  })
}
