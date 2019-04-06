const slideshow = document.getElementById("js-slideshow");
const slides = document.querySelectorAll(".js-slideshow-slide");
const slideshowButtons = document.querySelectorAll(".js-slideshow-button");
var slideshowTimer;

// add attribute aria-live=polite to the container that has your js-slideshow class!

// Get screenreaders to announce slides if the slideshow has focus
slideshow.addEventListener("focusin", function () {
    slideshow.setAttribute("aria-live", "polite");
});

// But stop announcing when the slideshow doesn't have focus
slideshow.addEventListener("blur", function () {
    slideshow.setAttribute("aria-live", "off");
});

const revealImage = target => {
    // Set the passed target's data-active state to TRUE
    target.setAttribute("data-active", true);
    // Find the img tag within the current active element
    const img = target.querySelector("img");
};

// Set up data state; first slide should be active, others not
slides.forEach((slide, index) => {
    if (index === 0) {
        revealImage(slide);
    } else {
        slide.setAttribute("data-active", false);
    }
});

const updateSlide = direction => {
    // Find the current slide and make a variable for it
    let currentSlide = document.querySelector(
        ".js-slideshow-slide[data-active=true]"
    );
    // Deprioritize the current slide
    currentSlide.setAttribute("data-active", false);

    if (direction === "next") {
        // Find the next slide and make a variable for it
        let nextSlide = currentSlide.nextElementSibling;

        // Does nextSlide exist? If so, set the target to be that next slide
        if (nextSlide !== null) {
            var target = nextSlide;
        } else {
            // Otherwise, we are on the last slide and need to start over on the first slide (which, in JS is zero)
            var target = slides[0];
        }
    }
    if (direction === "previous") {
        // Find the previous slide and make a variable for it
        let previousSlide = currentSlide.previousElementSibling;

        // Does previousSlide exist? If so, set the target to be that next slide
        if (previousSlide !== null) {
            var target = previousSlide;
        } else {
            // Otherwise, we are on the first slide and need to count all the slides (slides.length) and subtract one to get to the last slide (again, b/c JS starts counting at zero)
            // e.g., if there are six slides, the slide array is : 0, 1, 2, 3, 4, 5
            // slides.length would equal 6, so 6-1 gets us to slide 5, the last slide
            var target = slides[slides.length - 1];
        }
    }

    // Run the revealImage function on the new active slide
    revealImage(target);
};

// Loop through buttons
slideshowButtons.forEach((button, index) => {
    // Add a click eventListener to each button
    button.addEventListener("click", function (e) {
        // Create a variable for the action on the clicked button
        let action = this.dataset.action;

        if (action === "pause") {
            // Clear out the timer
            clearInterval(slideshowTimer);
            // Swap the data-action
            this.dataset.action = "play";
            // Swap the aria-label
            this.setAttribute("aria-label", "Play");
        } else if (action === "play") {
            // Immediately display the next slide
            updateSlide("next");
            // Restart the slideshow and its timer
            startSlideshow();
            // Swap the data-action
            this.dataset.action = "pause";
            // Swap the aria-label
            this.setAttribute("aria-label", "Pause");
        } else {
            updateSlide(action);
        }
    });
});

const startSlideshow = () => {
    // After 4s run the updateSlide function, then run it every 4s
    slideshowTimer = setInterval(
        () => updateSlide("next"),
        4000
    );
};

// Run the startSlideshow function
startSlideshow();

// Add touch events
// source: https://gist.github.com/SleepWalker/da5636b1abcbaff48c4d#gistcomment-2555343

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

const gestureZone = document.getElementById('js-slideshow-list');

gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, true);

gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    swipeSlide();
}, true);

function swipeSlide() {
    if (touchendX < touchstartX) {
        updateSlide("next")
        // console.log('Swiped left');
    }

    if (touchendX > touchstartX) {
        updateSlide("previous")
        // console.log('Swiped right');
    }

}
