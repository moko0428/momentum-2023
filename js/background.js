const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgIamge = document.createElement("img");

bgIamge.src = `img/${chosenIamge}`;

document.body.appendChild(bgIamge);
