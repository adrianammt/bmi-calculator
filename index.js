const formElement = document.querySelector("form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const heightInput = formElement.height.value;
  const weightInput = formElement.weight.value;
  let bmi = weightInput / heightInput ** 2;
  const text = document.querySelector("p");

  text.textContent = `Your body mass index is + ${bmi.toFixed(2)}`;

  if (bmi < 18.5 && bmi >= 30) {
    text.style.color = "red";
  } else if (bmi >= 18.5 && bmi < 25) {
    text.style.color = "green";
  } else if (bmi >= 25 && bmi < 30) {
    text.style.color = "orange";
  }

  formElement.reset();
});
