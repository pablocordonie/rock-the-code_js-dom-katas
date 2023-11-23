
// 3.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const countriesList = document.createElement('ul');

for (const country of countries) {
    const countryListItem = document.createElement('li');
    countryListItem.innerText = country;
    countriesList.appendChild(countryListItem);
}

document.body.appendChild(countriesList);

// 3.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementToRemove = document.querySelector('.fn-remove-me');
elementToRemove.remove();

// 3.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const printedDiv = document.querySelector('[data-function=printHere]');
const carsList = document.createElement('ul');

for (const car of cars) {
    const carListItem = document.createElement('li');
    carListItem.innerText = car;

    carsList.appendChild(carListItem);
}

printedDiv.appendChild(carsList);

// 3.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.

const countries_2 = [
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
    { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];

countries_2.forEach(country => {
    const countryDiv = document.createElement('div');
    const countryTitle = document.createElement('h4');
    const countryImg = document.createElement('img');

    countryTitle.innerText = country.title;
    countryDiv.appendChild(countryTitle);

    countryImg.src = country.imgUrl;
    countryImg.alt = 'Random picture';
    countryDiv.appendChild(countryImg);

    countryDiv.classList.add('country-container');
    document.body.appendChild(countryDiv);
});

// 3.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.

const divToRemove = document.querySelector('div:last-of-type');

const button = document.createElement('button');
button.innerText = 'Click!';
document.body.appendChild(button);

button.addEventListener('click', () => divToRemove.remove());

// 3.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

const countryDivs = document.querySelectorAll('.country-container');

countryDivs.forEach(countryDiv => {
    const button = document.createElement('button');
    button.innerText = 'Click!';
    countryDiv.appendChild(button);

    button.addEventListener('click', () => countryDiv.remove());
});