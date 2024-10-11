// Selectors

const generatePinBtn = document.querySelector(".generate-btn");
const generatePinInput = document.querySelector(".generated-pin");
const keypadInput = document.querySelector(".show-value");
const removeBtn = document.getElementById("removeBtn");
const wrongNotification = document.querySelector(".wrong-pin");
const correctNotification = document.querySelector(".correct-pin");
const submitBtn = document.querySelector(".submit-btn");
const rtyLeft = document.getElementById("tryLeft");

// Generate 4 digits pin number
function generatePin() {
  let pin = Math.floor(Math.random() * 9000) + 1000;
  generatePinInput.value = pin;
  // generatePinBtn.style.backgroundColor = "black";
  // generatePinBtn.disabled = true;
}

// Generate value from keypad button
function keypad(number) {
  if (generatePinInput.value == "") {
    alert("Please generate a PIN first");
  } else {
    keypadInput.value += number;

    if (number === "C") {
      keypadInput.value = "";
    }
  }
}

// remove single digit pin
function removeSingleDigit() {
  const currentValue = keypadInput.value;
  if (currentValue == "") {
    alert("Nothing to remove");
  }
  keypadInput.value = currentValue.slice(0, -1);
}

// hide notifications
function hideNotifications() {
  wrongNotification.style.display = "none";
  correctNotification.style.display = "none";
}

// match pin
function matchPin() {
  if (generatePinInput.value == keypadInput.value) {
    submitBtn.style.background = "green";
    generatePinBtn.style.background = "green";
    correctNotification.style.display = "block";
    wrongNotification.style.display = "none";
  } else {
    submitBtn.style.background = "red";
    generatePinBtn.style.background = "red";
    correctNotification.style.display = "none";
    wrongNotification.style.display = "block";
    keypadInput.value = "";
    handleTryLeft();
  }
}

// Try left counter
function handleTryLeft() {
  let value = parseInt(rtyLeft.innerText);
  if (0 < value) {
    rtyLeft.innerText = value - 1;
  } else {
    alert("try again later");
  }
}

// Event listener to generate pin when button is clicked
submitBtn.addEventListener("click", () => {
  if (keypadInput.value === "") {
    alert("Please enter a PIN");
  } else {
    matchPin();
  }
});
generatePinBtn.addEventListener("click", generatePin);
removeBtn.addEventListener("click", removeSingleDigit);
hideNotifications();
