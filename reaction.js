function changeImage(imageSrc) {
    var image1 = document.getElementById('actualDress');
    image1.src = imageSrc;
    image1.style.margin = '30px';
    image1.style.height = '700';
    image1.style.maxWidth = '1700';
    

}




// script.js
// const image = document.getElementById("dress1");

// image.addEventListener("click", function () {
//     // Change the image source when clicked
//     if (image.src.endsWith("homePage-firstProduct/first.jpg")) {
//         image.src = "bridesmaidDresses/dress1.jfif";
//         image.alt = "New Image";
//     } else {
//         image.src = "homePage-firstProduct/first.jpg";
//         image.alt = "Initial Image";
//     }
// });
