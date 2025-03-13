const ul = document.querySelector("#list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    const value = input.value.trim();

    if (value == "") {
        input.focus();
    }
    else {
        const newLi = document.createElement('li');
        const newDeleteButton = document.createElement('button');

        newLi.textContent = input.value;
        newDeleteButton.textContent = '❌';
        newDeleteButton.ariaLabel = "Delete " + input.value;

        newLi.appendChild(newDeleteButton);

        ul.append(newLi);
    }

    input.value = "";
});

ul.addEventListener("click", function (event) {
    const parentLi = event.target.closest("li");

    parentLi.remove();
    input.focus();
});