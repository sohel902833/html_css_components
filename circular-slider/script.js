const circular_slider = document.querySelector(".wrapper");
const slides = document.querySelectorAll(".slides");
const images = document.querySelectorAll(".slides img");

slides.forEach((slide, index) => {
  slide.onclick = () => {
    circular_slider.style.transform = `rotateZ(calc(-${
      (360 / 5) * index + 2
    }deg))`;
    images.forEach((img, index) => {
      img.style.setProperty("--img-no", 2);
    });
  };
});
