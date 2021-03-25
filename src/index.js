const png = require('../public/assets/1.jpg').default
console.log(png)
let img = document.createElement('img');
img.src = png
document.body.appendChild(img)
