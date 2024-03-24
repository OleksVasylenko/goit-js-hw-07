function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

createBtn.addEventListener("click", () => {
  const amount = document.querySelector("input").valueAsNumber;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
