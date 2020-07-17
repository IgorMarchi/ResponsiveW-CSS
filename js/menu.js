let show = true

const menusection = document.querySelector(".menu-section")
const menuToggle = menusection.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {

  document.body.style.overflow = show ? "hidden" : "initial"

  menusection.classList.toggle("on", show)
  show = !show
})