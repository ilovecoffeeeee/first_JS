const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
];

const chosenColors = colors[Math.floor(Math.random() * colors.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);

