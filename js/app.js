// Para seleccionar elementos del html



// querySelector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o 1 Elementos 

heading.classList.add('Nueva-clase'); 
heading.textContent = 'Nuevo Heading';
console.log(heading);

// querySelectorAll

const navegacion = document.querySelectorAll('.navegacion a');
navegacion[0].textContent = 'Nuevo';
console.log(navegacion[0]);

navegacion[0].href = 'google.com';

navegacion[0].classList.add('NuevaNavegacion');
console.log(navegacion);
// navegacion[0].classList.remove('NuevaNavegacion');
// console.log(navegacion);

// lo mismo que arriba pero sin agregar constante
/* document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo';*/


// getElementById
const heading2 = document.getElementById('heading2');
console.log(heading2);

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');
//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';
//Agregar texto 
nuevoEnlace.textContent = 'Un nuevo enlace';
// Agregar clase
nuevoEnlace.classList.add('navegacion__enlace');
// Agregarlo al documento
const navega = document.querySelector('.navegacion');

navega.appendChild(nuevoEnlace);

console.log(nuevoEnlace);


//Eventos

console.log(1);
window.addEventListener('load',function(){ //Load espera a que el js y los archivos que dependen del html esten listos(css, imagenes, etc)
    console.log(2);
});
window.addEventListener('load',function(){ 
    console.log(3);
});

document.addEventListener('DOMContentLoaded', function(){// DOMContentLoaded solo espera a que se descargue el html, no espera css o imagenes
    console.log(4);
})


console.log(5);


window.onscroll = function (){
    console.log('scrolling...');
}

// // Seleccionar elementos y asociarles un evento
// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function (evento) {
//     //Validar un formulario
//     console.log(evento);//Para que no se actualice la pagina por default y validar el formulario
//     evento.preventDefault();//Para que no se actualice la pagina por default y validar el formulario
//     console.log('enviando Formulario');
// });


// Eventos de los Imputs y los textarea
const datos = {
    nombre : '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');
// nombre.addEventListener('change', function () {//change se ejecuta hasta que se selecciona otra area del navegador (no en el textbox)
//     console.log('escribiendo...(con change)');
// });

// nombre.addEventListener('input', function (e) {//change se ejecuta hasta que se selecciona otra area del navegador (no en el textbox)
//     console.log(e.target.value);
//     console.log('escribiendo...');
// });

// email.addEventListener('input', function (e) {//change se ejecuta hasta que se selecciona otra area del navegador (no en el textbox)
//     console.log(e.target.value);
    
// });

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
// Evento de submit (en formularios se utiliza submit)
formulario.addEventListener('submit',function(e){
    e.preventDefault();

    // Validar formulario
    const { nombre, email, mensaje } = datos;
    
    if(nombre === '' || email === '' || mensaje === '' ) {
        console.log('Al menos un campo esta vacio');
        mostrarError('Todos los campos son obligatorios');
        return; // Detiene la ejecución de esta función
    }
    // enviar formulario
    console.log('Todo bien...')

    mostrarMensaje('Mensaje enviado correctamente');
});


function leerTexto(e) {
    // console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    
    console.log(datos);
}

// Muestra error en pantalla

function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);
    //Desaparecer despues de 5 seg
    setTimeout(() => {
        error.remove();
    }, 5000);
}
// enviado correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement('p');
    alerta.textContent = mensaje;
    alerta.classList.add('correcto');
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}




