const menuicon = document.querySelector(".menuIcon");
const xicon = document.querySelector(".xIcon");
const menu = document.querySelector(".menu-links");
menuicon.addEventListener('click',()=>{
    menu.classList.add('showmenu');
    menuicon.style.display= "none"
    xicon.style.display ="block"
})
xicon.addEventListener('click',()=>{
    menu.classList.remove('showmenu');
    xicon.style.display = "none"
    menuicon.style.display ="block"
})