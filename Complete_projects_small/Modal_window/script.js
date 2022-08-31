const toggleClasses = () => {
  document.querySelector(`.modal`).classList.toggle("hidden");
  document.querySelector(`.overlay`).classList.toggle("hidden");
};

const hideClasses = () => {
  document.querySelector(`.modal`).classList.add("hidden");
  document.querySelector(`.overlay`).classList.add("hidden");
};

const isHidden = () => {
  return (
    document.querySelector(`.modal`).classList.contains("hidden") &&
    document.querySelector(`.overlay`).classList.contains("hidden")
  );
};

document.querySelector(".close").addEventListener("click", () => {
  toggleClasses();
});

document.querySelectorAll("button").forEach((i) =>
  i.addEventListener("click", () => {
    toggleClasses();
  })
);

document.querySelector(".overlay").addEventListener("click", () => {
  hideClasses();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !isHidden()) {
    hideClasses();
  }
});
