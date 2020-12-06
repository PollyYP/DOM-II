let funBus = document.querySelector("h1");
funBus.addEventListener("mouseover", () => {
  funBus.style.display = "flex";
  funBus.style.justifyContent = "center";
});

funBus.addEventListener("mouseleave", () => {
  funBus.style.display = "";
  funBus.style.justifyContent = "";
});

let createBtn = document.querySelectorAll("div.btn");
createBtn.forEach((e) => (e.style.borderStyle = "outset"));
createBtn.forEach((e) => (e.style.display = "inline"));
createBtn.forEach((e) => e.addEventListener("click", displayBtn));

function displayBtn() {
  alert("Hooray, You're all signed up!");
  this.style.backgroundColor = "lightGrey";
  this.textContent = "Done";
}
