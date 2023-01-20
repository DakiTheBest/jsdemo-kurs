inputCounter = document.getElementById("counter");
inputBox = document.querySelector("input");

function changeCounter() {
  inputCounter = inputBox.value.length;
  document.getElementById("counter").textContent = inputCounter;

  if (inputCounter >= 50) {
    inputBox.classList.add("warning");
    document.getElementById("counter").classList.add("warning");
  } else {
    inputBox.classList.remove("warning");
    document.getElementById("counter").classList.remove("warning");
  }
}

inputBox.addEventListener("input", changeCounter);
