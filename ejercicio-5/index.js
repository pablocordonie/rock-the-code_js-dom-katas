
// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsListCreator = (array) => {
  const albumsList = document.createElement('ul');

  array.forEach(element => {
    const albumListItem = document.createElement('li');
    albumListItem.innerText = element;
    albumsList.appendChild(albumListItem);
  });

  return albumsList;
};

document.body.appendChild(albumsListCreator(albums));