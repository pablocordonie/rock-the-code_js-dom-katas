
// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const placesListCreator = (array) => {
    const placesList = document.createElement('ul');

    for (const place of array) {
        const placeListItem = document.createElement('li');
        placeListItem.innerText = place;
        placesList.appendChild(placeListItem);
    }

    return placesList;
};

const div = document.querySelector('[data-function=printHere]');
div.appendChild(placesListCreator(places));