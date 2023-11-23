
// 4.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click.

const button = document.createElement('button');
button.innerText = 'Click!';
button.setAttribute('id', 'btnToClick');

document.body.appendChild(button);

button.addEventListener('click', (event) => console.log(event));

// 4.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const focusInput = document.querySelector('.focus');

focusInput.addEventListener('focus', (ev) => console.log(ev.target.value));

// 4.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const valueInput = document.querySelector('.value');

valueInput.addEventListener('input', (ev) => console.log(ev.target.value));