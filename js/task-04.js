let counterValue = 0;
const buttonPlusRef = document.querySelector("[data-action='increment']");
const buttonMinusRef = document.querySelector("[data-action='decrement']");
const inputValueRef = document.querySelector("#value");

buttonPlusRef.addEventListener("click", () => {
  counterValue += 1;
  inputValueRef.textContent = counterValue;
});

buttonMinusRef.addEventListener("click", () => {
  counterValue -= 1;
  inputValueRef.textContent = counterValue;
});
