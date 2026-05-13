let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-solid-bars');
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
     menu.classList.remove('fa-solid-bars');
    navbar.classList.remove('active');
}
