const moneyFormEl = document.getElementById("moneyForm");
moneyFormEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const textInputElement = document.getElementById("coinType");
  const coin = textInputElement.value;
  console.log(coin);
});
