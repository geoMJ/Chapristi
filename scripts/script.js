const menuButton = document.getElementById("menu-toggle");
const menu = document.getElementById("main-menu");

menuButton.addEventListener("click", () => {
    [menuButton, menu].map((el) => el.classList.toggle("opened"));
});
