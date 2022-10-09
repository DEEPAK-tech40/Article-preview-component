const shareEl = document.querySelector(".share");
const avtEl = document.querySelector(".avatar");
const avBtn = document.querySelector(".share-icon");
const shBtn = document.querySelector(".share figure");

shBtn.addEventListener("click", function () {
  shareEl.style.display = "none";
  avtEl.style.display = "flex";
});

avBtn.addEventListener("click", function () {
  shareEl.style.display = "flex";
  avtEl.style.display = "none";
});
