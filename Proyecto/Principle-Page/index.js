const searchButton= document.querySelector('.search-icon')
const navegador=document.querySelector('.navegador')
console.log(searchButton)

searchButton.addEventListener('click', ()=>{
    navegador.classList.toggle('active')
})

const botonAlumnos=document.querySelector('#botonAlumnos')
const botonGrupos=document.querySelector('#botonGrupos')
const botonBuscar=document.querySelector('#botonBuscar')

botonAlumnos.addEventListener('click', ()=>{
    window.location='../Alumnos-Page/index.html'
})
botonGrupos.addEventListener('click', ()=>{
    window.location='../Alumnos-Page/index.html'
})
botonBuscar.addEventListener('click', ()=>{
    window.location='../Alumnos-Page/index.html'
})

const logo=document.querySelector('.logo')
logo.addEventListener('click', ()=>{
    window.location='../Inicio-Sesion/index.html'
})