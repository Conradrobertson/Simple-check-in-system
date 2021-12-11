const input = document.querySelector(".name");
const checkInBtn = document.querySelector(".check-in");
const checkOutBtn = document.querySelector(".check-out");
const passengersDiv = document.querySelector(".passengers");

const passengers = [];

checkInBtn.addEventListener("click", () => {
  const inputValue = input.value;

  passengers.push(inputValue);

  const newListItem = document.createElement("li");

  const newContent = document.createTextNode(inputValue);

  newListItem.appendChild(newContent);

  passengersDiv.appendChild(newListItem);

  input.value = "";
});

checkOutBtn.addEventListener("click", () => {
  passengers.shift();
  passengersDiv.removeChild(passengersDiv.firstChild);
});
