
// Get hold of the box elements
const boxElements = document.getElementsByClassName("box");

// Get hold of the container element
const container = document.getElementById("container");

// Get hold of the button
const shuffleButton = document.getElementById("shuffle-button");

// Util function to get a random number in range min/max
const getRandomPosition = (max = 0, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const changePosition = (element) => {
  const top = getRandomPosition(container.clientHeight - 60) + "px";
  const left = getRandomPosition(container.clientWidth - 160) + "px";
  element.style.top = top;
  element.style.left = left;
};

const shuffle = () => {
  if (boxElements?.length) {
    Array.from(boxElements).forEach((element) => {
      changePosition(element);
    });
  }
};

shuffleButton.addEventListener("click", shuffle);
window.addEventListener("resize", shuffle);

// Misc

