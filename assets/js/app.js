let menu = document.querySelector ('.menu');
let bars = document.querySelector(".mobile-menu");

bars.addEventListener ("click" , () =>{
    menu.classList.toggle('close')
})