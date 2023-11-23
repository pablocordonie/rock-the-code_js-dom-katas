
// 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const emptyP = document.createElement('p');
document.body.appendChild(emptyP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const fullDiv = document.createElement('div');

for (let i = 0; i < 6; i++) {
    const emptyP_2 = document.createElement('p');
    fullDiv.appendChild(emptyP_2);
}

document.body.appendChild(fullDiv);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const dynamicP = document.createElement('p');
dynamicP.innerText = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector('.fn-insert-here');
h2.innerText = 'Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const appsList = document.createElement('ul');

for (const app of apps) {
    const appListItem = document.createElement('li');
    appListItem.innerText = app;
    appsList.appendChild(appListItem);
}

document.body.appendChild(appsList);

// 2.7 Elimina todos los nodos que tengan la clase fn-remove-me

const paragraphsToRemove = document.querySelectorAll('.fn-remove-me');
paragraphsToRemove.forEach(p => p.remove());

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pInTheMiddle = document.createElement('p');
pInTheMiddle.innerText = 'Voy en medio!';

const divs = document.querySelectorAll('div');

document.body.insertBefore(pInTheMiddle, divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase fn-insert-here

const insertedDivs = document.querySelectorAll('.fn-insert-here');

insertedDivs.forEach(div => div.innerText = 'Voy dentro!');