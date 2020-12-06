let funBus = document.querySelector("h1");
funBus.addEventListener("mouseenter", mouseEnter);
funBus.addEventListener("mouseleave", mouseLeave);

function mouseEnter() {
  funBus.style.textTransform = "uppercase";
  funBus.style.display = "flex";
  funBus.style.justifyContent = "center";
}

function mouseLeave() {
  funBus.style.textTransform = "";
  funBus.style.display = "";
  funBus.style.justifyContent = "";
}

let nav = document.querySelectorAll(".nav-link");
nav.forEach((e) => {
  e.style.textDecoration = "none";
  e.style.color = "black";
  e.style.paddingRight = "20px";
  e.addEventListener("click", () => (e.style.color = "purple"));
});

let getImg = document.querySelectorAll("img");
getImg.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.filter = "grayscale(100%";
    e.style.display = "block";
    e.style.margin = "0 auto";
    e.addEventListener("mouseout", removeGray);
  });
});

function removeGray() {
  getImg.forEach((e) => {
    e.style.filter = "";
  });
}

let createBtn = document.querySelectorAll("div.btn");
createBtn.forEach((e) => {
  e.style.borderStyle = "outset";
  e.style.display = "inline";
  e.addEventListener("mousedown", displayBtn);
});

function displayBtn() {
  alert("Hooray, You're all signed up!");
  this.style.backgroundColor = "lightGrey";
  this.textContent = "Done";
}

document.addEventListener("wheel", () => {
  document.querySelectorAll("h2").forEach((e) => (e.style.color = "red"));
});

document.addEventListener("keydown", () => alert("key is submitted!"));

document.addEventListener("copy", () => alert("Copyright warning notice!"));
