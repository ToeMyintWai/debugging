const menuButton = document.querySelector(".menu");
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

//portait function
const portraitButton = document.getElementById("portrait");

