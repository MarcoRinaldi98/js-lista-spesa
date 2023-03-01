/*
    JAVASCRIPT
*/

//array
elementiLista = [
    'Latte',
    'Pane',
    'Acqua',
    'Banane',
    'Mele',
    'Merendine',
    'Prosciutto',
    'Carne',
    'Pasta',
    'Sapone'
];


const listDom = document.getElementById('list');

let i = 0;

while (i < elementiLista.length) {

    listDom.innerHTML += `<li class="list-group-item d-flex justify-content-between">${elementiLista[i]} <input type="checkbox"> </li>`;

    i++;
}