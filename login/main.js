// animated bg
function displayNextImage() {
         x = (x === images.length - 1) ? 0 : x + 1;
         document.getElementById("img").src = images[x];
     }
     function changeImage() {
         setInterval(displayNextImage, 10000);
     }
     var images = [], x = -1;
     images[0] = "paul.jpg";
     images[1] = "rename.jpg";
     images[2] = "asd.jpg";
