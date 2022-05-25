const listEl = document.querySelector(".benefits__list");

listEl.addEventListener("click", onItemClick);

// console.log(event.target.nodeName);

function onItemClick(event) {
  console.log(event.target.nodeName);
  if (event.target.nodeName !== "LI") {
    return;
  }
  const buttonEl = event.target.querySelector(".benefits__item-button");
  const descrEl = event.target.querySelector(".benefits__item-description");
  buttonEl.classList.toggle("open");
  descrEl.classList.toggle("open");
}
