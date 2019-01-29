const replicate = n => x => Array(n).fill(x)
const randomInRange = (m, n) => Math.round(Math.random() * (n - m)) + m

// Your code goes here
window.onload = () => {
  const mainNav = document.querySelector(".main-navigation")
  const intro = document.querySelector(".intro img")
  const modal = document.createElement("div")
  const imgs = document.querySelectorAll("img")
  const anchors = document.querySelectorAll("a")
  const introP = document.querySelector(".intro p")

  const initialP = introP.innerHTML

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
      const sentence = replicate(randomInRange(7, 11))(
        e.currentTarget.textContent
      )
        .map((e, i) => (i > 0 ? e.toLowerCase() : e))
        .join(" ")
        .concat(".")
      const p = replicate(randomInRange(5, 9))(sentence).join(" ")
      introPAdder(p)
    })
    a.addEventListener("blur", () => {
      introP.innerHTML = initialP
    })
  })

  const resizeDisplay = document.createElement("div")
  resizeDisplay.classList.add("resize-status")
  document.body.append(resizeDisplay)
  resizeDisplay.innerText = "FOOO"
  window.onresize = () => {
    const w = document.body.clientWidth
    const h = document.body.clientHeight
    resizeDisplay.innerText = `${h} x ${w}`
  }

  // Event delegation
  const header = document.querySelector("header.intro")
  const h2 = header.querySelector("h2")

  header.addEventListener("click", () => {
    console.log("Header clicked!!!")
  })
  h2.addEventListener("click", () => {
    console.log("h2 clicked!!!")
  })
  introP.addEventListener("click", e => {
    e.stopPropagation()
    console.log("p clicked!!!")
  })
}
