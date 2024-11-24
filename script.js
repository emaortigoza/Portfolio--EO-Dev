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


/*envio Formulario */

const formulario = document.querySelector('#form')
const buttonMailTo = document.querySelector('#trucazo')

formulario.addEventListener('submit', handleSubmit )

function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    buttonMailTo.setAttribute('href', `mailto:info@eortigoza.com?subject=nombre ${form.get('Nombre y Apellido')} correo ${form.get('email')}&body=${form.get('Mensaje')}`)
    buttonMailTo.click()
}