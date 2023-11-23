/*
*/
// 1.1 Usa querySelector para mostrar por consola el botón con la clase showme.

const showMeButton = document.querySelector('.showme');
console.log(showMeButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id pillado.

const h1Pillado = document.querySelector('#pillado');
console.log(h1Pillado);

// 1.3 Usa querySelector para mostrar por consola todos los p

const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => console.log(paragraph));

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase pokemon

const pokemons = document.querySelectorAll('.pokemon');
pokemons.forEach(pokemon => console.log(pokemon));

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

const characters = document.querySelectorAll('[data-function=testMe]');
characters.forEach(character => console.log(character));

// 1.6 Usa querySelector para mostrar por consola el tercer personaje con el atributo data-function="testMe".

const character = document.querySelector('[data-function=testMe]:nth-of-type(3)');
console.log(character);