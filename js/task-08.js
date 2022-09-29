const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    //   Здесь не понял как можно сделать объект с короткой записью полей. Все называется email и password
    //   тут либо надо промежуточные переменные создавать, либо я не знаю....
    const objectForm = {
      email: email.value,
      password: password.value,
    };
    console.log(objectForm);
    formRef.reset();
  }
}

formRef.addEventListener("submit", handleSubmit);
