//this script only cycles through some images!

var myImage = document.getElementById("mainImage");

var imageArray = ["images/events.jpg","images/services.jpg","images/contact.jpg","images/bg1.jpg"];
var imageIndex = 0;

function changeImage() {
  myImage.setAttribute("src",imageArray[imageIndex]);
imageIndex++;
if (imageIndex >= imageArray.length) {
  imageIndex = 0;

    }
}

//setInterval in miliseconds
var intervalHandle = setInterval(changeImage,3000);