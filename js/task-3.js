const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function (event) {
  const trimmedValue = event.target.value.trim();
  nameOutput.textContent = trimmedValue || "Anonymous";
});
