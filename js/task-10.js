function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlsRef = document.querySelector("#controls");
const btnCreateRef = document.querySelector("[data-create]");
const btnDestroyRef = document.querySelector("[data-destroy]");
const inputRef = controlsRef.querySelector("input");
const divBoxesRef = document.querySelector("#boxes");
let divSide = 30;

function createBoxes(amount) {
  const divArr = [];
  for (let i = 1; i <= amount; i += 1) {
    const element = document.createElement("div");
    element.style.width = `${divSide}px`;
    element.style.height = `${divSide}px`;
    element.style.marginTop = "10px";
    element.style.backgroundColor = getRandomHexColor();
    divSide += 10;
    divArr.push(element);
  }
  return divArr;
}

function destroyBoxes() {
  const listDiv = divBoxesRef.querySelectorAll("div");
  listDiv.forEach((element) => element.remove());
  divSide = 30;
}

btnCreateRef.addEventListener("click", () => {
  const amount = inputRef.value;
  if (amount === "") {
    alert("Please, fill amount of boxes");
  } else {
    divBoxesRef.append(...createBoxes(amount));
    inputRef.value = "";
  }
});

btnDestroyRef.addEventListener("click", () => {
  destroyBoxes();
});
