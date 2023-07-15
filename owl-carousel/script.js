const cards = document.querySelectorAll(".card");
const leftButton = document.querySelector(".arrow.left");
const rightButton = document.querySelector(".arrow.right");

let left = 0;
let card_size = 25.4;

let total_card_size = cards.length * card_size - card_size * 4;

if (window.matchMedia("(max-width: 768px)").matches) {
  card_size = 52;
  total_card_size = cards.length * card_size - card_size * 2;
}

rightButton.onclick = () => {
  left += card_size;
  if (left >= total_card_size) left = total_card_size;
  moveCards(left);
  checkArrowVisibility(left);
};
leftButton.onclick = () => {
  left -= card_size;
  if (left <= 0) left = 0;
  moveCards(left);
  checkArrowVisibility(left);
};

const moveCards = (left) => {
  for (card of cards) {
    card.style.left = -left + "%";
  }
};
const checkArrowVisibility = (pos) => {
  if (pos <= 0) {
    leftButton.style.opacity = "0";
  } else {
    leftButton.style.opacity = "1";
  }

  if (pos >= total_card_size) {
    rightButton.style.opacity = "0";
  } else {
    rightButton.style.opacity = "1";
  }
};
