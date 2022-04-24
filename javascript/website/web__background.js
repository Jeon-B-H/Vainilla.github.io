// list of background image 
const backgroundImage__mainPage = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];

// variable & default random number
const lengthOfbackground = backgroundImage__mainPage.length;
const randomIndex__background = Math.floor((Math.random()*lengthOfbackground));
const selectedImage = backgroundImage__mainPage[randomIndex__background];

// appending HTML
const img = document.createElement('img');
const body = document.querySelector('body');

img.src = `background_image/${selectedImage}`;
img.classList.add('backgroundImage__website');
img.id = 'background_image';

body.appendChild(img);

