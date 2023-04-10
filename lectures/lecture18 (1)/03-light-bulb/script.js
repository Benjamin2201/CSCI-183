const imgOn = "https://www.w3schools.com/js/pic_bulbon.gif";
const imgOff = "https://www.w3schools.com/js/pic_bulboff.gif";
const elem = document.querySelector("#my_image");

function turnOnOff() {
 console.log('image clicked');
  // if the current image source is the same as the imgoff imge address,---
  // then switch the soure to the img on address
 
 if (elem.src === imgOff) {
        elem.src = imgOn;
    } else {
        elem.src = imgOff;
 }

}
