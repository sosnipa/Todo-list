let items = [];

const itemsDiv = document.getElementById(`items`);
const input = document.getElementById("itemInput");
const storageKey = `items`;

function renderItems() {
  itemsDiv.innerHTML = null;

  for (const [idx, item] of Object.entries(items)) {
    const container = document.createElement("div");
    container.style.marginBottom = `10px`;

    const text = document.createElement("p");
    text.style.display = `inline`;
    text.style.marginRight = `10px`;
    text.textContent = item;

    const button = document.createElement("button");
    button.textContent = "Delete";
    button.onclick = () => removeItem(idx);

    container.appendChild(text);
    container.appendChild(button);

    itemsDiv.appendChild(container);
  }
}

function loadItems() {
  const oldItems = localStorage.getItem(storageKey);
  if (oldItems) items = JSON.parse(oldItems);
  renderItems();
}

function saveItems() {
  const stringitems = JSON.stringify(items);
  localStorage.setItem(storageKey, stringitems);
}

function addItem() {
  const value = input.value;
  if (!value) {
    alert(`you cannot add an empty item`);
    return; //NAKED RETURN
  }
  items.push(value);
  renderItems();
  input.value = "";
  saveItems();
}

function removeItem(idx) {
  items.splice(idx, 1);
  renderItems();
  saveItems();
}
document.addEventListener(`DOMContentLoaded`, loadItems);
// for loop is for when we know the number of times we want to iterate while loop is when we dont know the number of times we wnt to iterate
// Object.entries allows us to access the index and the array at the same time.
