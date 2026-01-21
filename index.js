const buttonTexts = [
  "Jackets",
  "Accessories",
  "Cardigans",
  "T-Shirt",
  "Skirts",
  "Lingerie",
  "Shorts",
  "Dresses and jumpsuits",
  "Sale",
  "Blouses",
];

const container = document.getElementById("nav-tabs-container");

buttonTexts.forEach((text) => {
  const newButton = document.createElement("button");

  newButton.textContent = text;

  newButton.classList.add("nav-tab-btn", "poppins");

  newButton.addEventListener("click", () => {
    alert(`You clicked the "${text}" button!`);
  });
  container.appendChild(newButton);
});
