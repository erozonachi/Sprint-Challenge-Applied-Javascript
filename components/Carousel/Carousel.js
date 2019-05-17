class Carousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.leftBtn = this.carousel.querySelector(`.left-button`);
        this.rightBtn = this.carousel.querySelector(`.right-button`);
        this.currentIndex = 1;
        this.images = this.carousel.querySelectorAll(`img`);
        this.slideTotal = this.images.length;

        this.leftBtn.addEventListener(`click`, this.slideLeft);
        this.rightBtn.addEventListener(`click`, this.slideRight);

        document.querySelector(`img[data-slide="1"]`).style.display = `flex`;
    }

    slideLeft = () => {
        // Set display style of all images to none
        this.images.forEach(image => image.style.display = `none`);
        // Set the currentIndex to the selected image index
        this.currentIndex = this.currentIndex <= 1? this.slideTotal : this.currentIndex -= 1;

        this.fadeInImage();
    }

    slideRight = () => {
        // Set display style of all images to none
        this.images.forEach(image => image.style.display = `none`);
        // Set the currentIndex to the selected image index
        this.currentIndex = this.currentIndex >= this.slideTotal? 1 : this.currentIndex += 1;

        this.fadeInImage();
    }

    fadeInImage() { // Fades in selected inmage to view
        const selectedImage = document.querySelector(`img[data-slide="${this.currentIndex}"]`);
        selectedImage.style.display = `flex`;
        selectedImage.style.opacity = 0;
        TweenLite.to(selectedImage, 1.5, {opacity: 1});
    }
}

const carousel = document.querySelector(`.carousel`);
new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
