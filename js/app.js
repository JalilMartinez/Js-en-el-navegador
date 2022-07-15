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