const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2000,
    delay: 450,
    reset: true
}) 

sr.reveal('.hero-text', {delay: 200, origin: 'top'})
sr.reveal('.hero-img', {delay: 450})
sr.reveal('.icons', {delay: 500, origin: 'left'})
sr.reveal('.portfolio__project',{delay:150})
sr.reveal('.sobreMi',{delay:150})
sr.reveal('.contacto',{delay:250})
