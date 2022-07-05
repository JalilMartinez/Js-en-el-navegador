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


// lo mismo que arriba pero sin agregar constante

/* document.querySelectorAll('.navegacion a')[0].textContent = 'Nuevo';*/




// getElementById