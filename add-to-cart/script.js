const cards = document.querySelectorAll(".card");
const leftButton = document.querySelector(".arrow.left");
const rightButton = document.querySelector(".arrow.right");
const shopping_cart = document.querySelector(".shopping-cart");
const cart_btns = document.querySelectorAll(".add-to-cart");
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

//fly

for (cart_btn of cart_btns) {
  cart_btn.onclick = (e) => {
    shopping_cart.classList.add("active");
    let product_count =
      Number(shopping_cart.getAttribute("data-product-count")) || 0;

    shopping_cart.setAttribute("data-product-count", product_count + 1);

    let target_parent = e.target.parentNode.parentNode.parentNode;

    let img = target_parent.querySelector("img");
    let flying_img = img.cloneNode();
    flying_img.classList.add("flying-image");
    target_parent.appendChild(flying_img);

    target_parent.style.zIndex = "100";
    //finding flying image position

    const flying_img_pos = flying_img.getBoundingClientRect();
    const shopping_cart_pos = shopping_cart.getBoundingClientRect();

    let data = {
      left:
        shopping_cart_pos.left -
        (shopping_cart_pos.width / 2 +
          flying_img_pos.left +
          flying_img_pos.width / 2) -
        30,
      top: shopping_cart_pos.bottom - flying_img_pos.bottom,
    };
    console.log(data);

    flying_img.style.cssText = `
        --left:${data.left.toFixed(2)}px;
        --top:${data.top.toFixed(2)}px
    `;
    setTimeout(() => {
      shopping_cart.classList.remove("active");
      target_parent.style.zIndex = "";
      target_parent.removeChild(flying_img);
    }, 1000);
  };
}
