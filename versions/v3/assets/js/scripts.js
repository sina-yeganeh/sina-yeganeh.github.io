const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");

let isShowing = false;
menuIcon.addEventListener("click", () => {
  if (isShowing) {
    menu.style.display = "none";
    isShowing = false;
  } else {
    menu.style.display = "block";
    isShowing = true;
  }
})
