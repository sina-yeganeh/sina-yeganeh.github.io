const notif = document.querySelector(".notif")

setInterval(() => {
  scrollBarPosition = window.pageYOffset

  if (scrollBarPosition >= 1400) notif.style.display = "none"
  if (scrollBarPosition <= 1400) notif.style.display = "block"
}, 500)
