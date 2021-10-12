const upButton = document.querySelector(".up-button")

upButton.addEventListener("click", e => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
