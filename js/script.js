//DOM - Selection
const inputBill = document.querySelector(".introduce-bill__input");
const inputCustomTip = document.querySelector(".tip__custom");
const tipFive = document.querySelector(".tip__5");
const tipTen = document.querySelector(".tip__10");
const tipFivTen = document.querySelector(".tip__15");
const tipTwoFive = document.querySelector(".tip__25");
const tipFiveZero = document.querySelector(".tip__50");
const numberPersons = document.querySelector(".split-bill__input");
const tipPerson = document.querySelector(".user-output__value-tip");
const tipAmount = document.querySelector(".user-output__value-total");
const tipForm = document.querySelector(".tip__form");
const labelError = document.querySelector(".split-bill__error-label");
const labelErrorBill = document.querySelector(".introduce-bill__error-label");
const ctaReset = document.querySelector(".user-output__reset-button");

//
let tip, amount, person;
tip = 0;
function setTip() {
  tip = Number(this.value);
}

tipForm.addEventListener("click", (e) => {
  e.preventDefault();
});

tipFive.addEventListener("click", setTip);
tipTen.addEventListener("click", setTip);
tipFivTen.addEventListener("click", setTip);
tipTwoFive.addEventListener("click", setTip);
tipFiveZero.addEventListener("click", setTip);

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    if (inputBill.value == 0) {
      labelErrorBill.style.display = "block";
      inputBill.style.border = "2px solid #f26c4f";
      return;
    }
    if (inputBill.value >= 1) {
      labelErrorBill.style.display = "none";
      inputBill.style.border = "2px solid white";
    }
    if (numberPersons.value == 0) {
      labelError.style.display = "block";
      numberPersons.style.border = "2px solid #f26c4f";
      return;
    }
    if (numberPersons.value >= 1) {
      labelError.style.display = "none";
      numberPersons.style.border = "2px solid white";
    }
    if (inputCustomTip.value > 0) {
      tip = inputCustomTip.value / 100;
    }

    amount = Number(inputBill.value) + Number(inputBill.value) * tip;
    person = amount / numberPersons.value;

    tipPerson.textContent = `$ ${person.toFixed(2)}`;
    tipAmount.textContent = `$ ${amount.toFixed(2)}`;
  }
});

///RESET BUTTON

ctaReset.addEventListener("click", reset);

function reset() {
  inputBill.value = " ";
  tip = 0;
  numberPersons.value = " ";
  tipPerson.textContent = "$ 0.00";
  tipAmount.textContent = "$ 0.00";
}
