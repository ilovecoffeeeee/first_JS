const images = [
    "0.png",
    "1.png",
    "2.png",
    "3.png",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const backgroundImage = document.querySelector("#picture img");

function changePictures() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    backgroundImage.src = `img/${chosenImage}`;
}

changePictures()
setInterval(changePictures, 5000);



