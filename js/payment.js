const conditionValidation = document.querySelector(".accept-condition");
const conditionValidationBtn = document.querySelector(".accept-condition button");
const payment = document.querySelector(".payment");
const cardQuestion = document.querySelector(".number-question");
const cardCondition = document.querySelector(".card-condition");
const closeCondition = document.querySelector(".card-condition .cruz");
const cryptoCondition = document.querySelector(".crypto-condition");
const cryptoQuestion = document.querySelector(".crypto-question");
const closeCrypto = document.querySelector(".crypto-condition .cruz");

conditionValidationBtn.addEventListener("click", () => {
    conditionValidation.style.display = "none";
    payment.style.display = "block";
});

cardQuestion.addEventListener("click", () => {
    cardCondition.style.display = "block";
});

closeCondition.addEventListener("click", () => {
  cardCondition.style.display = "none";
});

cryptoQuestion.addEventListener("click", () => {
    cryptoCondition.style.display = "block";
});

closeCrypto.addEventListener("click", () => {
  cryptoCondition.style.display = "none";
});
