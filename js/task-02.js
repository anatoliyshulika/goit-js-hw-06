const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createlistTagLi(arrItems) {
  const arrLi = [];
  arrItems.forEach((item) => {
    const element = document.createElement("li");
    element.textContent = item;
    element.classList.add("item");
    arrLi.push(element);
  });
  return arrLi;
}

const ulIngredientsRef = document.querySelector("#ingredients");
ulIngredientsRef.append(...createlistTagLi(ingredients));
