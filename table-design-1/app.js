const fills = document.querySelectorAll(".filled");

const dropZones = document.querySelectorAll(".boundary");

let filledItem = null;

fills.forEach((fill) => {
  fill.addEventListener("dragstart", function () {
    console.log("Dragging Started");
    filledItem = fill;
    setTimeout(() => {
      this.style.opacity = "0";
    }, 0);
  });

  fill.addEventListener("dragend", function () {
    this.style.opacity = "1";
  });
});

dropZones.forEach((dropZone) => {
  dropZone.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  dropZone.addEventListener("dragenter", function (e) {
    e.preventDefault();
    // this.classList.add("add_effects");
    this.className += " add_effects";
  });

  dropZone.addEventListener("dragleave", function (e) {
    this.className = "boundary";
  });

  dropZone.addEventListener("drop", function () {
    console.log("Dropped");
    this.append(filledItem);
    this.className = "boundary";
  });
});
