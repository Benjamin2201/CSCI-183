

<section class="carousel" aria-label="Photo Carousel">
    <div class="current-photo">
        <!-- Replace image here -->
        <img src="images/img1-600x400.jpg" alt="current photo" />
    </div> 
    <button class="back" onclick="back()" aria-label="Show previous slide">
        <img src="images/left.png" alt="" />
    </button>
    <button class="forward" onclick="forward()" aria-label="Show next slide">
        <img src="images/right.png" alt="" />
    </button>
    <p class="caption">Image 1 of 10</p>
</section>

const photos = [
    "images/img1-600x400.jpg",
    "images/img2-600x400.jpg",
    "images/img3-600x400.jpg",
    "images/img4-600x400.jpg",
    "images/img5-600x400.jpg",
    "images/img6-600x400.jpg",
    "images/img7-600x400.jpg",
    "images/img8-600x400.jpg",
    "images/img9-600x400.jpg",
    "images/img10-600x400.jpg"
];
let idx = 0;

function showImage() {
    console.log('Show image');
}

function forward() {
    console.log('forward');
}

function back() {
    console.log('back');
}


/* This function should:
    (1) display the new image inside of the .current-photo container, and 
    (2) update the caption inside of the .caption paragraph
*/
function showImage() {
    console.log('Show image');
}


/* This function should set the idx variable 
   to one greater than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to one less than the length of 
   the array, set idx to 0.
*/
function forward() {
    console.log('forward');
    ++idx;
    showImage();
}


/* This function should set the idx variable 
   to one less than the current value of idx, 
   and then invoke the showImage() function.
   If the idx gets to the beginning, set idx to
   one less than the length of the array.
*/
function back() {
    console.log('back');
}
