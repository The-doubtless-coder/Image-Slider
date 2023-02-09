const imageContainerEl = document.getElementById("image");
console.log(imageContainerEl);

const rightBtnEl = document.querySelector(".next");
console.log(rightBtnEl);
const leftBtnEl = document.querySelector(".prev");
console.log(leftBtnEl);
const allImages = document.querySelectorAll("img");

console.log(allImages);

let currentImg = 1;
let timeout;
rightBtnEl.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  console.log(currentImg);
  updateCurrentImage();
  console.log("clicked ..");
});

leftBtnEl.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateCurrentImage();
});

function updateCurrentImage() {
  if (currentImg > allImages.length) {
    currentImg = 1;
  }
  if (currentImg < 1) {
    currentImg = allImages.length;
  }
  console.log(currentImg);
  imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateCurrentImage();
  }, 3000);
}

updateCurrentImage();
