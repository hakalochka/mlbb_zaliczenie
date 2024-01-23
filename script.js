const resizableWindow = document.getElementById("main");

function updateSize() {
  const width = resizableWindow.clientWidth;
  const calculatedHeight = (width / 16) * 9;

  resizableWindow.style.height = `${calculatedHeight}px`;

  console.log(`Width: ${width}, Height: ${calculatedHeight}`);
}

window.addEventListener("resize", updateSize);

updateSize();
// ------------- resizable window ----------------

document.addEventListener("DOMContentLoaded", function () {
  const gamesPlayedInput = document.getElementById("gamesPlayed");
  const gamesWonInput = document.getElementById("gamesWon");

  gamesPlayedInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });

  gamesWonInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "");
  });
});
function calculateRank() {
  const gamesPlayedInput = document.getElementById("gamesPlayed");
  const gamesWonInput = document.getElementById("gamesWon");
  const outputElement = document.getElementById("output");

  const gamesPlayed = parseInt(gamesPlayedInput.value);
  const gamesWon = parseInt(gamesWonInput.value);

  if (isNaN(gamesPlayed) || isNaN(gamesWon) || gamesWon > gamesPlayed) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  let star = gamesWon - (gamesPlayed - gamesWon);

  let rank;
  if (star <= 3) {
    rank = "Warrior III";
  } else if (star >= 4 && star <= 6) {
    rank = "Warrior II";
  } else if (star >= 7 && star <= 9) {
    rank = "Warrior I";
  } else if (star >= 10 && star <= 13) {
    rank = "Elite III";
  } else if (star >= 14 && star <= 17) {
    rank = "Elite II";
  } else if (star >= 18 && star <= 21) {
    rank = "Elite I";
  } else if (star >= 22 && star <= 25) {
    rank = "Master IV";
  } else if (star >= 26 && star <= 29) {
    rank = "Master III";
  } else if (star >= 30 && star <= 33) {
    rank = "Master II";
  } else if (star >= 34 && star <= 37) {
    rank = "Master I";
  } else if (star >= 38 && star <= 42) {
    rank = "Grandmaster V";
  } else if (star >= 43 && star <= 47) {
    rank = "Grandmaster IV";
  } else if (star >= 48 && star <= 52) {
    rank = "Grandmaster III";
  } else if (star >= 53 && star <= 57) {
    rank = "Grandmaster II";
  } else if (star >= 58 && star <= 62) {
    rank = "Grandmaster I";
  } else if (star >= 63 && star <= 67) {
    rank = "Epic V";
  } else if (star >= 68 && star <= 72) {
    rank = "Epic IV";
  } else if (star >= 73 && star <= 77) {
    rank = "Epic III";
  } else if (star >= 78 && star <= 82) {
    rank = "Epic II";
  } else if (star >= 83 && star <= 87) {
    rank = "Epic I";
  } else if (star >= 88 && star <= 92) {
    rank = "Legend V";
  } else if (star >= 93 && star <= 97) {
    rank = "Legend IV";
  } else if (star >= 98 && star <= 102) {
    rank = "Legend III";
  } else if (star >= 103 && star <= 107) {
    rank = "Legend II";
  } else if (star >= 108 && star <= 112) {
    rank = "Legend I";
  } else if (star >= 113 && star <= 136) {
    rank = "Mythic";
  } else if (star >= 137 && star <= 159) {
    rank = "Mythical Honor";
  } else if (star >= 160 && star <= 208) {
    rank = "Mythical Glory";
  } else {
    rank = "Mythical Immortal";
  }

  outputElement.textContent = rank;
}
// --------------- form -----------------

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = 0;
var y = 0;
var width = 100;
var height = 100;
var direction = 1;

// Array of image sources
var images = [
  "images/Rank/Old/warrior_old.webp",
  "images/Rank/Old/elite.webp",
  "images/Rank/Old/master_old.webp",
  "images/Rank/Old/grandmaster_old.webp",
  "images/Rank/Old/epic_old.webp",
  "images/Rank/Old/legend_old.webp",
  "images/Rank/Old/mythic.webp",
  "images/Rank/Old/honor_old.webp",
  "images/Rank/Old/glory_old.webp",
  "images/Rank/Old/immortal_old.webp",
];
var currentImageIndex = 0;

// Preload images
var loadedImages = [];

function loadImages() {
  for (var i = 0; i < images.length; i++) {
    var img = new Image();
    img.src = images[i];
    loadedImages.push(img);
  }
}

loadImages();

function drawRectangle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the current image at the position of the rectangle
  ctx.drawImage(loadedImages[currentImageIndex], x, y, width, height);
}

function animate() {
  x += 2 * direction;

  if (x + width > canvas.width || x < 0) {
    // Change the current image index when the rectangle reaches the edge
    currentImageIndex = (currentImageIndex + 1) % images.length;
    direction *= -1; // Reverse the direction
  }

  drawRectangle();

  requestAnimationFrame(animate);
}

animate();
// --------- canvas -------------
