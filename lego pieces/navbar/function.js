const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navbarlink = document.getElementsByTagName("ul")[0];

toggleButton.addEventListener("click",() => {
    navbarlink.classList.toggle("active")
})