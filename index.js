const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentValue = 1;

next.addEventListener("click", () => {
  currentValue++;
  if (currentValue > circles.length) {
    currentValue = circles.length;
  }
  circles.forEach((val) => {
    val.classList.remove("active");
  });
  circles.forEach((val, idx) => {
    if (idx < currentValue) {
      val.classList.add("active");
    }
  });
  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
  progress.style.backgroundColor = "skyblue";
  update();
});

prev.addEventListener("click", () => {
  currentValue--;
  if (currentValue < 1) {
    currentValue = 1;
  }
  circles.forEach((val) => {
    val.classList.remove("active");
  });
  circles.forEach((val, idx) => {
    if (idx < currentValue) {
      val.classList.add("active");
    }
  });
  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";
  progress.style.backgroundColor = "skyblue";
  update();
});

function update() {
  if (currentValue == 1) {
    prev.disabled = true;
  } else if (currentValue == circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
    prev.disabled = false;
  }
}
