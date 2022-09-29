const inputRef = document.querySelector("#validation-input");
const numberOfSymbol = inputRef.getAttribute("data-length");
inputRef.addEventListener("blur", (event) => {
  switch (event.currentTarget.value.length) {
    case 0:
      inputRef.classList.remove("valid");
      inputRef.classList.remove("invalid");
      break;
    case parseInt(numberOfSymbol):
      inputRef.classList.remove("invalid");
      inputRef.classList.add("valid");
      break;

    default:
      inputRef.classList.remove("valid");
      inputRef.classList.add("invalid");
      break;
  }
});
console.log(numberOfSymbol);
