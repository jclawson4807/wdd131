const ul = document.querySelector('#list');
const input = document.querySelector('#favchap');
const button = document.querySelector('button');

const newLi = document.createElement('li');
const newDeleteButton = document.createElement('button');

newLi.textContent = input.value;
newDeleteButton.textContent = '❌';
newDeleteButton.ariaLabel = "Delete " + input.value;

newLi.appendChild(newDeleteButton);

ul.append(newLi);