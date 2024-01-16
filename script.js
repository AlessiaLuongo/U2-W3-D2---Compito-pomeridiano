// Esercizio 1

const inputName = document.getElementById("name-textarea");
const saveButton = document.getElementsByClassName("btn-success")[0];
const resetButton = document.getElementsByClassName("btn-danger")[0];

saveButton.addEventListener("click", function () {
  const content = inputName.value;

  localStorage.setItem("text-area-memory", content);
});

resetButton.addEventListener("click", function () {
  console.log("cancellato");

  inputName.value = " ";

  localStorage.removeItem("text-area-memory");
});

//Esercizio 2

let count = sessionStorage.getItem("count") || 0;
const timer = document.getElementById("timer");
const stopButton = document.getElementsByClassName("btn-info")[0];

const timerInterval = setInterval(function () {
  count++;
  timer.innerText = count;

  sessionStorage.setItem("count", count);
}, 1000);

sessionStorage.setItem("count", count);
function stopTimer() {
  clearInterval(timerInterval);
}
