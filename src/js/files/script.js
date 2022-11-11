const inputEl = document.querySelector(".input");
const pageTitleEl = document.querySelector(".page-title");
const bodyEl = document.querySelector("body");
let cardEl = document.querySelectorAll(".card");
let textEl = document.querySelectorAll(".text");
let titleEl = document.querySelectorAll(".title");

// Чтобы получить объект в первозданном состоянии используем метод parse у JSON
inputEl.checked = JSON.parse(localStorage.getItem("mode"));
updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "#000";
    pageTitleEl.style.color = "#fff";
    cardEl.forEach((card) => {
      card.style.background = "#000";
      card.style.boxShadow = "0 0 5px #fff";
    });
    textEl.forEach((text) => {
      text.style.color = "#fff";
    });
    titleEl.forEach((title) => {
      title.style.color = "#fff";
    });
  } else {
    bodyEl.style.background = "#fff";
    cardEl.forEach((card) => {
      card.style.background = "fff";
      card.style.boxShadow = "0 0 5px #000";
    });
    textEl.forEach((text) => {
      text.style.color = "#000";
    });
    titleEl.forEach((title) => {
      title.style.color = "#000";
    });
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStorage();
});

// Чтобы сохранить данные можно использовать метод setItem(key, value) у localStorage.
//  Для того, чтобы записать объект в localStorage надо сделать его строкой. Для преобразования объекта в строку нужно использовать JSON.stringify
function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
