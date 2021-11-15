//DOM
const inputBill = document.querySelector(".introduce-bill__input");
const inputCustomTip = document.querySelector(".tip__custom");

inputBill.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    console.log("Paul Mucioiu");
  }
});
