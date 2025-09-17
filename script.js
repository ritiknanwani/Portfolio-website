let menuicon = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar");
menuicon.addEventListener("click",()=>{
    menuicon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
})
