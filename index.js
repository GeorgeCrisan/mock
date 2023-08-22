
// Get hold of the box elements
const boxElements = document.getElementsByClassName("box");

// Get hold of the container element
const container = document.getElementById("container");

// Get hold of the button
const shuffleButton = document.getElementById("shuffle-button");

// Util function to get a random number in range min/max
const getRandomPosition = (max = 0, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

// Util finction to change the position for an element
const changePosition = (element, observedHeight, observedWidth) => {
  console.log('*** what height', (observedHeight || container.clientHeight));
  const top = getRandomPosition((observedHeight || container.clientHeight) - 60) + "px";
  const left = getRandomPosition((observedWidth || container.clientWidth) - 160) + "px";
  element.style.top = top;
  element.style.left = left;
};

const shuffle = (_event, observedHeight, observedWidth) => {
  if (boxElements?.length) {
    Array.from(boxElements).forEach((element) => {
      changePosition(element, observedHeight, observedWidth);
    });
  }
};

shuffleButton.addEventListener("click", shuffle);

// Extra with observer shuffle
const observer = new ResizeObserver((entries) => {
  const contentRect = entries[0].contentRect;
  shuffle(null, contentRect.height, contentRect.width);
});

const addObserver = () => {
  observer.observe(container);
};

window.addEventListener("resize", addObserver);