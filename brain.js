const menuBar = document.querySelector(".main_menu_logo");
const navBar = document.querySelector("nav");
menuBar.addEventListener("click",()=>{
    navBar.classList.toggle("coming")
})
