let navBar =document.querySelector('nav');
let openIcon =document.querySelector('.icon');
let closeIcon = document.querySelector('.iconClose');
openIcon.addEventListener('click', ()=> { navBar.classList.add('open') });
closeIcon.addEventListener('click', ()=>{navBar.classList.remove('open')});
