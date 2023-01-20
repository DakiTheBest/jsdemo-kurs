inputCounter = document.getElementById("counter");
inputBox = document.querySelector("input");

function changeCounter() {
  inputCounter = inputBox.value.length;
  document.getElementById("counter").textContent = inputCounter;

  if (inputCounter >= 50) {
    inputBox.className = "warning"
    document.getElementById("counter").className = "warning"
  }
  else {
    inputBox.className = ""
    document.getElementById("counter").className = ""
  }
}

inputBox.addEventListener("input", changeCounter);
