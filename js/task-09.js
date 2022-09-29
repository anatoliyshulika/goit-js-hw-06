function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const btnRef = document.querySelector(".change-color");
const spanColorRef = document.querySelector(".color");

btnRef.addEventListener("click", () => {
  const bodyColor = getRandomHexColor();
  bodyRef.style.backgroundColor = bodyColor;
  spanColorRef.textContent = bodyColor;
});
