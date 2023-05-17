//Importar molde de Clase
import { Alumno } from "./alumnos.mjs"
const logo=document.querySelector('.logo')
logo.addEventListener('click',()=>{
    window.location='../Principle-Page/index.html'
})

const navHome=document.querySelector('#nav-home')
navHome.addEventListener('click',()=>{
    window.location='../Principle-Page/index.html'
})
//Secciones
const alumnoPage=document.querySelector('.Alumno-Page')
const groupPage=document.querySelector('.Group-Page')

//Secciones en el nav
const navStudents=document.querySelector('#nav-students')
const navGroups=document.querySelector('#nav-groups')

alumnoPage.classList.add('active')

navStudents.addEventListener('click', ()=>{
   if(alumnoPage.classList.contains('active')){
         console.log('Ya está abierta')
   }if(! alumnoPage.classList.contains('active')){
    alumnoPage.classList.add('active')
   }

   groupPage.classList.remove('active')

})
navGroups.addEventListener('click',()=>{
    if(! groupPage.classList.contains('active')){
        groupPage.classList.add('active')
   }if(groupPage.classList.contains('active')){
    console.log('Ya está abierta')
   }

    if(alumnoPage.classList.contains('active')){
        alumnoPage.classList.remove('active')
    }
})
//Elementos de búsqueda
const searchButton= document.querySelector('.search-icon')
const navegador=document.querySelector('.navegador')

searchButton.addEventListener('click', ()=>{
    navegador.classList.toggle('active')
})


var arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))

//Eventos al registrar alumno
const register= document.getElementById('register')
register.addEventListener('click', ()=>{


    const inputNombre=document.getElementById('nombre').value
    const inputApellidos=document.getElementById('apellidos').value
    const inputEdad=document.getElementById('edad').value

    var nuevoAlumno= new Alumno(inputNombre, inputApellidos, inputEdad)
    console.log(nuevoAlumno instanceof Alumno)
    localStorage.setItem('Array-Alumnos', JSON.stringify([]))
    arrayAlumnos.push(nuevoAlumno)
    localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos) )
    location.reload()

})

var arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
console.log(arrayAlumnos)

const cardContainer=document.getElementById('card-container')

// Elementos que aparecerán al registrar
arrayAlumnos.forEach(alumno => {
    var card=document.createElement('div')
    card.classList.add('card')
    const img= document.createElement('img')
    img.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const spanNombre=document.createElement('span')
    spanNombre.classList.add('nombre')
    spanNombre.textContent=`${alumno.nombre} ${alumno.apellidos}`
    const spanEdad=document.createElement('span')
    spanEdad.classList.add('edad')
    spanEdad.textContent=`${alumno.edad}`

    card.appendChild(img)
    card.appendChild(spanNombre)
    card.appendChild(spanEdad)

    cardContainer.appendChild(card)

});



//Display active para Buscar alumno en Nav
const oscurecer=document.querySelector('.oscurecer')
oscurecer.classList.remove('active')

const inputNavegador=document.querySelector('.navegador-input')

const EncontarContainer=document.querySelector('.Encontrar')
var arrayNombreAlumnos=[]
var arrayApellidosAlumnos=[]

var BuscarNombres=arrayAlumnos.forEach(alumno=>{
    arrayNombreAlumnos.push(alumno.nombre)
})
arrayAlumnos.forEach(alumno=>{
    arrayApellidosAlumnos.push(alumno.apellidos)
})


inputNavegador.addEventListener('input', ()=>{
    if(arrayNombreAlumnos.includes(inputNavegador.value)){

        const nuevoArray=arrayAlumnos.filter(nombre=>nombre.nombre==inputNavegador.value)
        nuevoArray.forEach(alumno=>{
            var card=document.createElement('div')
            card.classList.add('Encontrar-card')
            const img= document.createElement('img')
            img.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const spanNombre=document.createElement('span')
            spanNombre.classList.add('Encontrar-nombre')
            spanNombre.textContent=`${alumno.nombre} ${alumno.apellidos}`
            const spanEdad=document.createElement('span')
            spanEdad.classList.add('Encontrar-edad')
            spanEdad.textContent=`${alumno.edad}`

            card.appendChild(img)
            card.appendChild(spanNombre)
            card.appendChild(spanEdad)

            EncontarContainer.appendChild(card)

            })
            oscurecer.classList.add('active')
            EncontarContainer.classList.add('active')
    } else{
        oscurecer.classList.remove('active')
        EncontarContainer.classList.remove('active')
        EncontarContainer.innerHTML=''
    }
})



//Grupos
const groupCards=document.querySelector('.Group-cards')

//Matemáticas
const matematicasAsignar=document.querySelector('.asignar-matematicas')
const matematicasBotones=document.querySelector('.matematicas-botones-container')

//Matemáticas asignar
const eventoAsignarMatematicas=document.querySelector('.evento-asignar-matematicas')
const regresarAsignarMatematicas=document.querySelector('.asignar-regresar-matematicas')

matematicasAsignar.addEventListener('click', ()=>{
    matematicasBotones.classList.add('inactive')
    eventoAsignarMatematicas.classList.add('active')
})
regresarAsignarMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.remove('inactive')
    eventoAsignarMatematicas.classList.remove('active')
})
const inputNombreMatematicas=document.querySelector('.input-matematicas')
const matematicasAlumnosContainer=document.querySelector('.matematicas-alumnos-container')
inputNombreMatematicas.addEventListener('input', ()=>{
   if(arrayNombreAlumnos.includes(inputNombreMatematicas.value)){
        var arrayAsignarAlumnos=arrayAlumnos.filter(nombre=>nombre.nombre==inputNombreMatematicas.value)
        arrayAsignarAlumnos.forEach(alumno=>{
            const alumnoCard=document.createElement('div')
            alumnoCard.classList.add('alumnos-matematicas-card')
            const alumnoImage=document.createElement('img')
            alumnoImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
           const alumnoNombre=document.createElement('span')
           alumnoNombre.classList.add('matematicas-card-nombre')
           alumnoNombre.innerText= `${alumno.nombre} ${alumno.apellidos}`
           const alumnoEdad=document.createElement('span')
           alumnoEdad.classList.add('matematicas-card-edad')
            alumnoEdad.innerText=alumno.edad

            alumnoCard.appendChild(alumnoImage)
            alumnoCard.appendChild(alumnoNombre)
            alumnoCard.appendChild(alumnoEdad)
            matematicasAlumnosContainer.appendChild(alumnoCard)
            matematicasAlumnosContainer.classList.add('active')

            alumnoNombre.addEventListener('click', ()=>{
                if(alumno.materias.includes('matemáticas')){
                    alert('Ya fue asignado a esta materia')
                }else{
                    alert(`${alumno.nombre} fue asignado a matemáticas`)

                    alumno.materias.push('matemáticas')
                    console.log(alumno.materias)
                    arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                    arrayAlumnos.forEach(student=>{
                        if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                            student.materias.push('matemáticas')
                            localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                            location.reload()
                        }
                    })
                }

            })

        }
)


    }else{
        matematicasAlumnosContainer.innerHTML=''
    }})



//Matemáticas Buscar por nombre
 const eventoBuscarNombreAlumnoMatematicas=document.querySelector('.evento-buscar-nombre-alumno-matematicas')
 const regresarBuscarNombreAlumnoMatematicas=document.querySelector('.buscar-nombre-alumno-regresar-matematicas')
 const buscarAlumnoNombreMatematicas=document.querySelector('.buscar-alumno-nombre-matematicas')

 buscarAlumnoNombreMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.add('inactive')
    eventoBuscarNombreAlumnoMatematicas.classList.add('active')
 })
 regresarBuscarNombreAlumnoMatematicas.addEventListener('click',()=>{
    matematicasBotones.classList.remove('inactive')
    eventoBuscarNombreAlumnoMatematicas.classList.remove('active')
 })

 const buscarNombreInputMatematicas=document.querySelector('.buscar-por-nombre-input-matematicas')
 const buscarNombreContainerMatematicas=document.querySelector('.matematicas-alumnos-buscar-container')
 const alumnosBuscar=document.querySelector('.alumnos-matematicas-buscar')

 buscarNombreInputMatematicas.addEventListener('input',()=>{
    if(arrayNombreAlumnos.includes(buscarNombreInputMatematicas.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.nombre==buscarNombreInputMatematicas.value && alumno.materias.includes('matemáticas'))
         buscarNombreContainerMatematicas.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-matematicas-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('matematicas-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('matematicas-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-matematicas-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-matematicas-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-matematicas-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainerMatematicas.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        console.log(student)
                        student.calificaciones.matemáticas.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                        console.log(student instanceof Alumno)
                    
                }})
            })
        })

    }else{
        buscarNombreContainerMatematicas.innerHTML=''
    }
 })


 //Matematicas Buscar por Apellido
 const eventoBuscarApellidoAlumnoMatematicas=document.querySelector('.evento-buscar-apellido-alumno-matematicas')
 const regresarBuscarApellidoAlumnoMatematicas=document.querySelector('.buscar-apellido-alumno-regresar-matematicas')
 const buscarAlumnoApellidoMatematicas=document.querySelector('.buscar-alumno-apellido-matematicas')

 buscarAlumnoApellidoMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.add('inactive')
    eventoBuscarApellidoAlumnoMatematicas.classList.add('active')
 })
 regresarBuscarApellidoAlumnoMatematicas.addEventListener('click',()=>{
    matematicasBotones.classList.remove('inactive')
    eventoBuscarApellidoAlumnoMatematicas.classList.remove('active')
 })

 const buscarNombreInputMatematicasApellidos=document.querySelector('.buscar-por-apellido-input-matematicas')
 const buscarNombreContainerMatematicasApellidos=document.querySelector('.matematicas-alumnos-buscar-container-apellidos')
 const alumnosBuscarApellidos=document.querySelector('.alumnos-matematicas-buscar-apellidos')
 console.log(buscarNombreInputMatematicasApellidos)

 buscarNombreInputMatematicasApellidos.addEventListener('input',()=>{
    console.log(buscarNombreInputMatematicasApellidos.value)
    if(arrayApellidosAlumnos.includes(buscarNombreInputMatematicasApellidos.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.apellidos==buscarNombreInputMatematicasApellidos.value && alumno.materias.includes('matemáticas'))
         buscarNombreContainerMatematicasApellidos.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-matematicas-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('matematicas-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('matematicas-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-matematicas-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-matematicas-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-matematicas-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainerMatematicasApellidos.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.matemáticas.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainerMatematicasApellidos.innerHTML=''
    }
 })
//  Matematicas promedio grupal
const eventoPromedioGrupalMatematicas=document.querySelector('.evento-obtener-promedio-matematicas')
const promedioGrupalMatematicas=document.querySelector('.promedio-grupo-matematicas')
const regresarPromedioMatematicas=document.querySelector('.promedio-regresar-matematicas')

promedioGrupalMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.add('inactive')
    eventoPromedioGrupalMatematicas.classList.add('active')
})
regresarPromedioMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.remove('inactive')
    eventoPromedioGrupalMatematicas.classList.remove('active')
})
const promedioMatematicasTitulo=document.createElement('h2')
promedioMatematicasTitulo.innerText='Promedio Grupal'
const promedioMatematicasSubtitulo=document.createElement('h1')
var arrayCalificacionesMatematicas=[]
var suma=0;
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('matemáticas')){
        alumno.calificaciones.matemáticas.forEach(calificacion=>{
            suma=suma+calificacion
            arrayCalificacionesMatematicas.push(calificacion)
        })
    }
})
var promedioMatematicas=suma/(arrayCalificacionesMatematicas.length)
promedioMatematicasSubtitulo.innerText=promedioMatematicas

eventoPromedioGrupalMatematicas.appendChild(promedioMatematicasTitulo)
eventoPromedioGrupalMatematicas.appendChild(promedioMatematicasSubtitulo)


//  Matema
const eventoListaMatematicas=document.querySelector('.evento-lista-matematicas')
const listaMatematicas=document.querySelector('.lista-alumnos-matematicas')
const regresarListaMatematicas=document.querySelector('.lista-regresar-matematicas')
const groupCardMatematicas=document.querySelector('.matematicas')
listaMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.add('inactive')
    eventoListaMatematicas.classList.add('active')
    groupCardMatematicas.classList.add('lista')
})
regresarListaMatematicas.addEventListener('click', ()=>{
    matematicasBotones.classList.remove('inactive')
    eventoListaMatematicas.classList.remove('active')
    groupCardMatematicas.classList.remove('lista')
})

const arrayAlumnosMatematicas=[]
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('matemáticas')){
        arrayAlumnosMatematicas.push(alumno)
    }
})

arrayAlumnosMatematicas.forEach(alumno=>{
    const listaMatematicasCard=document.createElement('div')
    listaMatematicasCard.classList.add('lista-matematicas-card')
    const listaMatematicasCardImg=document.createElement('img')
    listaMatematicasCardImg.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const listaMatematicasNombre=document.createElement('span')
    listaMatematicasNombre.classList.add('matematicas-nombre')
    listaMatematicasNombre.innerText=`${alumno.nombre} ${alumno.apellidos}`
    const listaMatematicasEdad=document.createElement('span')
    listaMatematicasEdad.classList.add('matematicas-edad')
    listaMatematicasEdad.innerText=`${alumno.edad}`

    listaMatematicasCard.appendChild(listaMatematicasCardImg)
    listaMatematicasCard.appendChild(listaMatematicasNombre)
    listaMatematicasCard.appendChild(listaMatematicasEdad)
    eventoListaMatematicas.appendChild(listaMatematicasCard)
})

//Física
const fisicaAsignar=document.querySelector('.asignar-fisica')
const fisicaBotones=document.querySelector('.fisica-botones-container')

//Física asignar
const eventoAsignarFisica=document.querySelector('.evento-asignar-fisica')
const regresarAsignarFisica=document.querySelector('.asignar-regresar-fisica')

fisicaAsignar.addEventListener('click', ()=>{
    fisicaBotones.classList.add('inactive')
    eventoAsignarFisica.classList.add('active')
})
regresarAsignarFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.remove('inactive')
    eventoAsignarFisica.classList.remove('active')
})

const inputNombrefisica=document.querySelector('.input-fisica')
const fisicaAlumnosContainer=document.querySelector('.fisica-alumnos-container')
inputNombrefisica.addEventListener('input', ()=>{
   if(arrayNombreAlumnos.includes(inputNombrefisica.value)){
        var arrayAsignarAlumnos=arrayAlumnos.filter(nombre=>nombre.nombre==inputNombrefisica.value)
        arrayAsignarAlumnos.forEach(alumno=>{
            const alumnoCard=document.createElement('div')
            alumnoCard.classList.add('alumnos-fisica-card')
            const alumnoImage=document.createElement('img')
            alumnoImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
           const alumnoNombre=document.createElement('span')
           alumnoNombre.classList.add('fisica-card-nombre')
           alumnoNombre.innerText= `${alumno.nombre} ${alumno.apellidos}`
           const alumnoEdad=document.createElement('span')
           alumnoEdad.classList.add('fisica-card-edad')
            alumnoEdad.innerText=alumno.edad

            alumnoCard.appendChild(alumnoImage)
            alumnoCard.appendChild(alumnoNombre)
            alumnoCard.appendChild(alumnoEdad)
            fisicaAlumnosContainer.appendChild(alumnoCard)
            fisicaAlumnosContainer.classList.add('active')

            alumnoNombre.addEventListener('click', ()=>{
                if(alumno.materias.includes('física')){
                    alert('Ya fue asignado a esta materia')
                }else{
                    alert(`${alumno.nombre} fue asignado a física`)

                    alumno.materias.push('física')
                    console.log(alumno.materias)
                    arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                    arrayAlumnos.forEach(student=>{
                        if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                            student.materias.push('física')
                            localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                            location.reload()
                        }
                    })
                }

            })

        }
)


    }else{
        fisicaAlumnosContainer.innerHTML=''
    }})






//Física Buscar por nombre
 const eventoBuscarNombreAlumnoFisica=document.querySelector('.evento-buscar-nombre-alumno-fisica')
 const regresarBuscarNombreAlumnoFisica=document.querySelector('.buscar-nombre-alumno-regresar-fisica')
 const buscarAlumnoNombreFisica=document.querySelector('.buscar-alumno-nombre-fisica')

 buscarAlumnoNombreFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.add('inactive')
    eventoBuscarNombreAlumnoFisica.classList.add('active')
 })
 regresarBuscarNombreAlumnoFisica.addEventListener('click',()=>{
    fisicaBotones.classList.remove('inactive')
    eventoBuscarNombreAlumnoFisica.classList.remove('active')
 })

 const buscarNombreInputfisica=document.querySelector('.input-nombre-fisica')
 const buscarNombreContainerfisica=document.querySelector('.fisica-alumnos-buscar-container')
 const alumnosBuscarfisica=document.querySelector('.alumnos-fisica-buscar')

 buscarNombreInputfisica.addEventListener('input',()=>{
    if(arrayNombreAlumnos.includes(buscarNombreInputfisica.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.nombre==buscarNombreInputfisica.value && alumno.materias.includes('física'))
         buscarNombreContainerfisica.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-fisica-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('fisica-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('fisica-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-fisica-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-fisica-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-fisica-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainerfisica.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.física.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainerfisica.innerHTML=''
    }
 })


 //Física Buscar por Apellido
 const eventoBuscarApellidoAlumnoFisica=document.querySelector('.evento-buscar-apellido-alumno-fisica')
 const regresarBuscarApellidoAlumnoFisica=document.querySelector('.buscar-apellido-alumno-regresar-fisica')
 const buscarAlumnoApellidoFisica=document.querySelector('.buscar-alumno-apellido-fisica')

 buscarAlumnoApellidoFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.add('inactive')
    eventoBuscarApellidoAlumnoFisica.classList.add('active')
 })
 regresarBuscarApellidoAlumnoFisica.addEventListener('click',()=>{
    fisicaBotones.classList.remove('inactive')
    eventoBuscarApellidoAlumnoFisica.classList.remove('active')
 })

 const buscarNombreInputfisicaApellidos=document.querySelector('.input-apellido-fisica')
 const buscarNombreContainerfisicaApellidos=document.querySelector('.fisica-alumnos-buscar-container-apellidos')
 const alumnosBuscarApellidosfisica=document.querySelector('.alumnos-fisica-buscar-apellidos')
 console.log(buscarNombreInputfisicaApellidos)

 buscarNombreInputfisicaApellidos.addEventListener('input',()=>{
    console.log(buscarNombreInputfisicaApellidos.value)
    if(arrayApellidosAlumnos.includes(buscarNombreInputfisicaApellidos.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.apellidos==buscarNombreInputfisicaApellidos.value && alumno.materias.includes('física'))
         buscarNombreContainerfisicaApellidos.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-fisica-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('fisica-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('fisica-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-fisica-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-fisica-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-fisica-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainerfisicaApellidos.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.física.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainerfisicaApellidos.innerHTML=''
    }
 })

//  Fisica promedio grupal
const eventoPromedioGrupalFisica=document.querySelector('.evento-obtener-promedio-fisica')
const promedioGrupalFisica=document.querySelector('.promedio-grupo-fisica')
const regresarPromedioFisica=document.querySelector('.promedio-regresar-fisica')

promedioGrupalFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.add('inactive')
    eventoPromedioGrupalFisica.classList.add('active')
})
regresarPromedioFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.remove('inactive')
    eventoPromedioGrupalFisica.classList.remove('active')
})
const promediofisicaTitulo=document.createElement('h2')
promediofisicaTitulo.innerText='Promedio Grupal'
const promediofisicaSubtitulo=document.createElement('h1')
var arrayCalificacionesfisica=[]
var suma=0;
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('física')){
        alumno.calificaciones.física.forEach(calificacion=>{
            suma=suma+calificacion
            arrayCalificacionesfisica.push(calificacion)
        })
    }
})
var promediofisica=suma/(arrayCalificacionesfisica.length)
promediofisicaSubtitulo.innerText=promediofisica

eventoPromedioGrupalFisica.appendChild(promediofisicaTitulo)
eventoPromedioGrupalFisica.appendChild(promediofisicaSubtitulo)

//  Fisica lista
const eventoListaFisica=document.querySelector('.evento-lista-fisica')
const listaFisica=document.querySelector('.lista-alumnos-fisica')
const regresarListaFisica=document.querySelector('.lista-regresar-fisica')

listaFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.add('inactive')
    eventoListaFisica.classList.add('active')
})
regresarListaFisica.addEventListener('click', ()=>{
    fisicaBotones.classList.remove('inactive')
    eventoListaFisica.classList.remove('active')
})
const eventoListafisica=document.querySelector('.evento-lista-fisica')
const listafisica=document.querySelector('.lista-alumnos-fisica')
const regresarListafisica=document.querySelector('.lista-regresar-fisica')
const groupCardfisica=document.querySelector('.fisica')
listafisica.addEventListener('click', ()=>{
    fisicaBotones.classList.add('inactive')
    eventoListafisica.classList.add('active')
    groupCardfisica.classList.add('lista')
})
regresarListafisica.addEventListener('click', ()=>{
    fisicaBotones.classList.remove('inactive')
    eventoListafisica.classList.remove('active')
    groupCardfisica.classList.remove('lista')
})

const arrayAlumnosfisica=[]
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('física')){
        arrayAlumnosfisica.push(alumno)
    }
})

arrayAlumnosfisica.forEach(alumno=>{
    const listafisicaCard=document.createElement('div')
    listafisicaCard.classList.add('lista-fisica-card')
    const listafisicaCardImg=document.createElement('img')
    listafisicaCardImg.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const listafisicaNombre=document.createElement('span')
    listafisicaNombre.classList.add('fisica-nombre')
    listafisicaNombre.innerText=`${alumno.nombre} ${alumno.apellidos}`
    const listafisicaEdad=document.createElement('span')
    listafisicaEdad.classList.add('fisica-edad')
    listafisicaEdad.innerText=`${alumno.edad}`

    listafisicaCard.appendChild(listafisicaCardImg)
    listafisicaCard.appendChild(listafisicaNombre)
    listafisicaCard.appendChild(listafisicaEdad)
    eventoListafisica.appendChild(listafisicaCard)
})

//Literatura
const literaturaAsignar=document.querySelector('.asignar-literatura')
const literaturaBotones=document.querySelector('.literatura-botones-container')

//Literatura asignar
const eventoAsignarliteratura=document.querySelector('.evento-asignar-literatura')
const regresarAsignarliteratura=document.querySelector('.asignar-regresar-literatura')

literaturaAsignar.addEventListener('click', ()=>{
    literaturaBotones.classList.add('inactive')
    eventoAsignarliteratura.classList.add('active')
})
regresarAsignarliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.remove('inactive')
    eventoAsignarliteratura.classList.remove('active')
})
const inputNombreliteratura=document.querySelector('.input-literatura')
const literaturaAlumnosContainer=document.querySelector('.literatura-alumnos-container')
inputNombreliteratura.addEventListener('input', ()=>{
   if(arrayNombreAlumnos.includes(inputNombreliteratura.value)){
        var arrayAsignarAlumnos=arrayAlumnos.filter(nombre=>nombre.nombre==inputNombreliteratura.value)
        arrayAsignarAlumnos.forEach(alumno=>{
            const alumnoCard=document.createElement('div')
            alumnoCard.classList.add('alumnos-literatura-card')
            const alumnoImage=document.createElement('img')
            alumnoImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
           const alumnoNombre=document.createElement('span')
           alumnoNombre.classList.add('literatura-card-nombre')
           alumnoNombre.innerText= `${alumno.nombre} ${alumno.apellidos}`
           const alumnoEdad=document.createElement('span')
           alumnoEdad.classList.add('literatura-card-edad')
            alumnoEdad.innerText=alumno.edad

            alumnoCard.appendChild(alumnoImage)
            alumnoCard.appendChild(alumnoNombre)
            alumnoCard.appendChild(alumnoEdad)
            literaturaAlumnosContainer.appendChild(alumnoCard)
            literaturaAlumnosContainer.classList.add('active')

            alumnoNombre.addEventListener('click', ()=>{
                if(alumno.materias.includes('literatura')){
                    alert('Ya fue asignado a esta materia')
                }else{
                    alert(`${alumno.nombre} fue asignado a literatura`)

                    alumno.materias.push('literatura')
                    console.log(alumno.materias)
                    arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                    arrayAlumnos.forEach(student=>{
                        if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                            student.materias.push('literatura')
                            localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                            location.reload()
                        }
                    })
                }

            })

        }
)


    }else{
        literaturaAlumnosContainer.innerHTML=''
    }})




//Literatura Buscar por nombre
 const eventoBuscarNombreAlumnoliteratura=document.querySelector('.evento-buscar-nombre-alumno-literatura')
 const regresarBuscarNombreAlumnoliteratura=document.querySelector('.buscar-nombre-alumno-regresar-literatura')
 const buscarAlumnoNombreliteratura=document.querySelector('.buscar-alumno-nombre-literatura')

 buscarAlumnoNombreliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.add('inactive')
    eventoBuscarNombreAlumnoliteratura.classList.add('active')
 })
 regresarBuscarNombreAlumnoliteratura.addEventListener('click',()=>{
    literaturaBotones.classList.remove('inactive')
    eventoBuscarNombreAlumnoliteratura.classList.remove('active')
 })
 const buscarNombreInputliteratura=document.querySelector('.input-nombre-literatura')
 const buscarNombreContainerliteratura=document.querySelector('.literatura-alumnos-buscar-container')
 const alumnosBuscarliteratura=document.querySelector('.alumnos-literatura-buscar')

 buscarNombreInputliteratura.addEventListener('input',()=>{
    if(arrayNombreAlumnos.includes(buscarNombreInputliteratura.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.nombre==buscarNombreInputliteratura.value && alumno.materias.includes('literatura'))
         buscarNombreContainerliteratura.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-literatura-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('literatura-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('literatura-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-literatura-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-literatura-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-literatura-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainerliteratura.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.literatura.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainerliteratura.innerHTML=''
    }
 })

 //literatura Buscar por Apellido
 const eventoBuscarApellidoAlumnoliteratura=document.querySelector('.evento-buscar-apellido-alumno-literatura')
 const regresarBuscarApellidoAlumnoliteratura=document.querySelector('.buscar-apellido-alumno-regresar-literatura')
 const buscarAlumnoApellidoliteratura=document.querySelector('.buscar-alumno-apellido-literatura')

 buscarAlumnoApellidoliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.add('inactive')
    eventoBuscarApellidoAlumnoliteratura.classList.add('active')
 })
 regresarBuscarApellidoAlumnoliteratura.addEventListener('click',()=>{
    literaturaBotones.classList.remove('inactive')
    eventoBuscarApellidoAlumnoliteratura.classList.remove('active')
 })

 const buscarNombreInputliteraturaApellidos=document.querySelector('.input-apellido-literatura')
 const buscarNombreContainerliteraturaApellidos=document.querySelector('.literatura-alumnos-buscar-container-apellidos')
 const alumnosBuscarApellidosliteratura=document.querySelector('.alumnos-literatura-buscar-apellidos')
 console.log(buscarNombreInputliteraturaApellidos)

 buscarNombreInputliteraturaApellidos.addEventListener('input',()=>{
    console.log(buscarNombreInputliteraturaApellidos.value)
    if(arrayApellidosAlumnos.includes(buscarNombreInputliteraturaApellidos.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.apellidos==buscarNombreInputliteraturaApellidos.value && alumno.materias.includes('literatura'))
         buscarNombreContainerliteraturaApellidos.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-literatura-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('literatura-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('literatura-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-literatura-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-literatura-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-literatura-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainerliteraturaApellidos.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.literatura.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainerliteraturaApellidos.innerHTML=''
    }
 })


//  literatura promedio grupal
const eventoPromedioGrupalliteratura=document.querySelector('.evento-obtener-promedio-literatura')
const promedioGrupalliteratura=document.querySelector('.promedio-grupo-literatura')
const regresarPromedioliteratura=document.querySelector('.promedio-regresar-literatura')

promedioGrupalliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.add('inactive')
    eventoPromedioGrupalliteratura.classList.add('active')
})
regresarPromedioliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.remove('inactive')
    eventoPromedioGrupalliteratura.classList.remove('active')
})
const promedioliteraturaTitulo=document.createElement('h2')
promedioliteraturaTitulo.innerText='Promedio Grupal'
const promedioliteraturaSubtitulo=document.createElement('h1')
var arrayCalificacionesliteratura=[]
var suma=0;
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('literatura')){
        alumno.calificaciones.literatura.forEach(calificacion=>{
            suma=suma+calificacion
            arrayCalificacionesliteratura.push(calificacion)
        })
    }
})
var promedioliteratura=suma/(arrayCalificacionesliteratura.length)
promedioliteraturaSubtitulo.innerText=promedioliteratura

eventoPromedioGrupalliteratura.appendChild(promedioliteraturaTitulo)
eventoPromedioGrupalliteratura.appendChild(promedioliteraturaSubtitulo)
//  literatura lista
const eventoListaliteratura=document.querySelector('.evento-lista-literatura')
const listaliteratura=document.querySelector('.lista-alumnos-literatura')
const regresarListaliteratura=document.querySelector('.lista-regresar-literatura')

listaliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.add('inactive')
    eventoListaliteratura.classList.add('active')
})
regresarListaliteratura.addEventListener('click', ()=>{
    literaturaBotones.classList.remove('inactive')
    eventoListaliteratura.classList.remove('active')
})


const arrayAlumnosliteratura=[]
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('literatura')){
        arrayAlumnosliteratura.push(alumno)
    }
})

arrayAlumnosliteratura.forEach(alumno=>{
    const listaliteraturaCard=document.createElement('div')
    listaliteraturaCard.classList.add('lista-literatura-card')
    const listaliteraturaCardImg=document.createElement('img')
    listaliteraturaCardImg.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const listaliteraturaNombre=document.createElement('span')
    listaliteraturaNombre.classList.add('literatura-nombre')
    listaliteraturaNombre.innerText=`${alumno.nombre} ${alumno.apellidos}`
    const listaliteraturaEdad=document.createElement('span')
    listaliteraturaEdad.classList.add('literatura-edad')
    listaliteraturaEdad.innerText=`${alumno.edad}`

    listaliteraturaCard.appendChild(listaliteraturaCardImg)
    listaliteraturaCard.appendChild(listaliteraturaNombre)
    listaliteraturaCard.appendChild(listaliteraturaEdad)
    eventoListaliteratura.appendChild(listaliteraturaCard)
})

//Tecnologia
const tecnologiaAsignar=document.querySelector('.asignar-tecnologia')
const tecnologiaBotones=document.querySelector('.tecnologia-botones-container')

//tecnologia asignar
const eventoAsignartecnologia=document.querySelector('.evento-asignar-tecnologia')
const regresarAsignartecnologia=document.querySelector('.asignar-regresar-tecnologia')

tecnologiaAsignar.addEventListener('click', ()=>{
    tecnologiaBotones.classList.add('inactive')
    eventoAsignartecnologia.classList.add('active')
})
regresarAsignartecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.remove('inactive')
    eventoAsignartecnologia.classList.remove('active')
})
const inputNombretecnologia=document.querySelector('.input-tecnologia')
const tecnologiaAlumnosContainer=document.querySelector('.tecnologia-alumnos-container')
inputNombretecnologia.addEventListener('input', ()=>{
   if(arrayNombreAlumnos.includes(inputNombretecnologia.value)){
        var arrayAsignarAlumnos=arrayAlumnos.filter(nombre=>nombre.nombre==inputNombretecnologia.value)
        arrayAsignarAlumnos.forEach(alumno=>{
            const alumnoCard=document.createElement('div')
            alumnoCard.classList.add('alumnos-tecnologia-card')
            const alumnoImage=document.createElement('img')
            alumnoImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
           const alumnoNombre=document.createElement('span')
           alumnoNombre.classList.add('tecnologia-card-nombre')
           alumnoNombre.innerText= `${alumno.nombre} ${alumno.apellidos}`
           const alumnoEdad=document.createElement('span')
           alumnoEdad.classList.add('tecnologia-card-edad')
            alumnoEdad.innerText=alumno.edad

            alumnoCard.appendChild(alumnoImage)
            alumnoCard.appendChild(alumnoNombre)
            alumnoCard.appendChild(alumnoEdad)
            tecnologiaAlumnosContainer.appendChild(alumnoCard)
            tecnologiaAlumnosContainer.classList.add('active')

            alumnoNombre.addEventListener('click', ()=>{
                if(alumno.materias.includes('tecnología')){
                    alert('Ya fue asignado a esta materia')
                }else{
                    alert(`${alumno.nombre} fue asignado a tecnología`)

                    alumno.materias.push('tecnología')
                    console.log(alumno.materias)
                    arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                    arrayAlumnos.forEach(student=>{
                        if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                            student.materias.push('tecnología')
                            localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                            location.reload()
                        }
                    })
                }

            })

        }
)


    }else{
        tecnologiaAlumnosContainer.innerHTML=''
    }})



//tecnologia Buscar por nombre
 const eventoBuscarNombreAlumnotecnologia=document.querySelector('.evento-buscar-nombre-alumno-tecnologia')
 const regresarBuscarNombreAlumnotecnologia=document.querySelector('.buscar-nombre-alumno-regresar-tecnologia')
 const buscarAlumnoNombretecnologia=document.querySelector('.buscar-alumno-nombre-tecnologia')

 buscarAlumnoNombretecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.add('inactive')
    eventoBuscarNombreAlumnotecnologia.classList.add('active')
 })
 regresarBuscarNombreAlumnotecnologia.addEventListener('click',()=>{
    tecnologiaBotones.classList.remove('inactive')
    eventoBuscarNombreAlumnotecnologia.classList.remove('active')
 })

 const buscarNombreInputtecnologia=document.querySelector('.input-nombre-tecnologia')
 const buscarNombreContainertecnologia=document.querySelector('.tecnologia-alumnos-buscar-container')
 const alumnosBuscartecnologia=document.querySelector('.alumnos-tecnologia-buscar')

 buscarNombreInputtecnologia.addEventListener('input',()=>{
    if(arrayNombreAlumnos.includes(buscarNombreInputtecnologia.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.nombre==buscarNombreInputtecnologia.value && alumno.materias.includes('tecnología'))
         buscarNombreContainertecnologia.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-tecnologia-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('tecnologia-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('tecnologia-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-tecnologia-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-tecnologia-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-tecnologia-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainertecnologia.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.tecnología.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainertecnologia.innerHTML=''
    }
 })

 //tecnologia Buscar por Apellido
 const eventoBuscarApellidoAlumnotecnologia=document.querySelector('.evento-buscar-apellido-alumno-tecnologia')
 const regresarBuscarApellidoAlumnotecnologia=document.querySelector('.buscar-apellido-alumno-regresar-tecnologia')
 const buscarAlumnoApellidotecnologia=document.querySelector('.buscar-alumno-apellido-tecnologia')

 buscarAlumnoApellidotecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.add('inactive')
    eventoBuscarApellidoAlumnotecnologia.classList.add('active')
 })
 regresarBuscarApellidoAlumnotecnologia.addEventListener('click',()=>{
    tecnologiaBotones.classList.remove('inactive')
    eventoBuscarApellidoAlumnotecnologia.classList.remove('active')
 })

 const buscarNombreInputtecnologiaApellidos=document.querySelector('.input-apellido-tecnologia')
 const buscarNombreContainertecnologiaApellidos=document.querySelector('.tecnologia-alumnos-buscar-container-apellidos')
 const alumnosBuscarApellidostecnologia=document.querySelector('.alumnos-tecnologia-buscar-apellidos')
 console.log(buscarNombreInputtecnologiaApellidos)

 buscarNombreInputtecnologiaApellidos.addEventListener('input',()=>{
    console.log(buscarNombreInputtecnologiaApellidos.value)
    if(arrayApellidosAlumnos.includes(buscarNombreInputtecnologiaApellidos.value)){
        const newArray=arrayAlumnos.filter(alumno=>alumno.apellidos==buscarNombreInputtecnologiaApellidos.value && alumno.materias.includes('tecnología'))
         buscarNombreContainertecnologiaApellidos.classList.add('active')
         newArray.forEach(alumno=>{
            const card=document.createElement('div')
            card.classList.add('alumnos-buscar-tecnologia-card')
            const cardImage=document.createElement('img')
            cardImage.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            const cardSpan=document.createElement('span')
            cardSpan.classList.add('tecnologia-card-buscar-nombre')
            cardSpan.innerText=`${alumno.nombre} ${alumno.apellidos}`
            const cardSpanEdad=document.createElement('span')
            cardSpanEdad.classList.add('tecnologia-card-buscar-edad')
            cardSpanEdad.innerText=`${alumno.edad}`

            card.appendChild(cardImage)
            card.appendChild(cardSpan)
            card.appendChild(cardSpanEdad)
            const calificacionesContainer=document.createElement('div')
            calificacionesContainer.classList.add('calificaciones-tecnologia-container')
            const calificacionesInput=document.createElement('input')
            calificacionesInput.setAttribute('type', 'number')
            calificacionesInput.setAttribute('min', '0')
            calificacionesInput.setAttribute('max','10')
            calificacionesInput.classList.add('calificaciones-tecnologia-input')
            const calificacionesBoton=document.createElement('button')
            calificacionesBoton.classList.add('calificaciones-tecnologia-button')
            calificacionesBoton.innerText='Subir Calificación'
            calificacionesContainer.appendChild(calificacionesInput)
            calificacionesContainer.appendChild(calificacionesBoton)
            card.appendChild(calificacionesContainer)
            buscarNombreContainertecnologiaApellidos.appendChild(card)


            // Eventos
            calificacionesBoton.addEventListener('click', ()=>{
                console.log(calificacionesInput.value)
                console.log(alumno.calificaciones)
                arrayAlumnos=JSON.parse(localStorage.getItem('Array-Alumnos'))
                arrayAlumnos.forEach(student=>{
                    if(student.nombre==alumno.nombre && student.apellidos==alumno.apellidos && student.edad==alumno.edad){
                        student.calificaciones.tecnología.push(Number(calificacionesInput.value))
                        localStorage.setItem('Array-Alumnos', JSON.stringify(arrayAlumnos))
                        location.reload()
                    
                }})
            })
        })

    }else{
        buscarNombreContainertecnologiaApellidos.innerHTML=''
    }
 })


//  tecnologia promedio grupal
const eventoPromedioGrupaltecnologia=document.querySelector('.evento-obtener-promedio-tecnologia')
const promedioGrupaltecnologia=document.querySelector('.promedio-grupo-tecnologia')
const regresarPromediotecnologia=document.querySelector('.promedio-regresar-tecnologia')

promedioGrupaltecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.add('inactive')
    eventoPromedioGrupaltecnologia.classList.add('active')
})
regresarPromediotecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.remove('inactive')
    eventoPromedioGrupaltecnologia.classList.remove('active')
})
const promediotecnologiaTitulo=document.createElement('h2')
promediotecnologiaTitulo.innerText='Promedio Grupal'
const promediotecnologiaSubtitulo=document.createElement('h1')
var arrayCalificacionestecnologia=[]
var suma=0;
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('tecnología')){
        alumno.calificaciones.tecnología.forEach(calificacion=>{
            suma=suma+calificacion
            arrayCalificacionestecnologia.push(calificacion)
        })
    }
})
var promediotecnologia=suma/(arrayCalificacionestecnologia.length)
promediotecnologiaSubtitulo.innerText=promediotecnologia

eventoPromedioGrupaltecnologia.appendChild(promediotecnologiaTitulo)
eventoPromedioGrupaltecnologia.appendChild(promediotecnologiaSubtitulo)
//  tecnologia lista
const eventoListatecnologia=document.querySelector('.evento-lista-tecnologia')
const listatecnologia=document.querySelector('.lista-alumnos-tecnologia')
const regresarListatecnologia=document.querySelector('.lista-regresar-tecnologia')

listatecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.add('inactive')
    eventoListatecnologia.classList.add('active')
})
regresarListatecnologia.addEventListener('click', ()=>{
    tecnologiaBotones.classList.remove('inactive')
    eventoListatecnologia.classList.remove('active')
})
const arrayAlumnostecnologia=[]
arrayAlumnos.forEach(alumno=>{
    if(alumno.materias.includes('tecnología')){
        arrayAlumnostecnologia.push(alumno)
    }
})

arrayAlumnostecnologia.forEach(alumno=>{
    const listatecnologiaCard=document.createElement('div')
    listatecnologiaCard.classList.add('lista-tecnologia-card')
    const listatecnologiaCardImg=document.createElement('img')
    listatecnologiaCardImg.src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    const listatecnologiaNombre=document.createElement('span')
    listatecnologiaNombre.classList.add('tecnologia-nombre')
    listatecnologiaNombre.innerText=`${alumno.nombre} ${alumno.apellidos}`
    const listatecnologiaEdad=document.createElement('span')
    listatecnologiaEdad.classList.add('tecnologia-edad')
    listatecnologiaEdad.innerText=`${alumno.edad}`

    listatecnologiaCard.appendChild(listatecnologiaCardImg)
    listatecnologiaCard.appendChild(listatecnologiaNombre)
    listatecnologiaCard.appendChild(listatecnologiaEdad)
    eventoListatecnologia.appendChild(listatecnologiaCard)
})