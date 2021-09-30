const menu = document.querySelector(".menu")
const menuItems = document.querySelector(".phone-nav > ul")

menu.addEventListener("click", () => {
  menuItems.classList.toggle("hide-nav")
})
