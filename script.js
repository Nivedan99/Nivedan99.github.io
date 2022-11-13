const nav1 = document.querySelector('.nav-content');
const addnav = document.querySelector('.icon');
const removenav = document.querySelector('.remove-nav');    

addnav.addEventListener('click',function(){
    nav1.classList.add("open");
    addnav.classList.add('none');
})
removenav.addEventListener('click',function(){
    nav1.classList.remove("open");
    addnav.classList.remove('none');
})