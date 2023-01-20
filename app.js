let inputCounter = document.getElementById("counter").textContent;
let inputBox = document.querySelector("input");

function changeCounter() {
  inputCounter = inputBox.value.length.toString()
  document.getElementById("counter").textContent = inputCounter + "/60"
}

inputBox.addEventListener("input", changeCounter);