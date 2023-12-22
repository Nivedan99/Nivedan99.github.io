const nav = document.querySelector('.nav-content');
const addnav = document.querySelector('.icon');
const removenav = document.querySelector('.remove-nav');    

addnav.addEventListener('click',function(){
    nav.classList.add("open-nav");
})
removenav.addEventListener('click',function(){
    nav.classList.remove("open-nav");
})

