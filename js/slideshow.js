var slideIndex = 1;
var stop = false;
var preAdd = -1;
async function autoShow() {
    while (!stop) {
        preAdd = slideIndex;
        var slides = document.getElementsByClassName("slides");
        var dots = document.getElementsByClassName("dot");

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "")
        }

        // console.log(slideIndex);
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        await sleep(5000);
        slideIndex++;
        // stop = true;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
        }

    }
}

function nextSlide(x){
    stop = true;
    slideIndex += x;
    stop = false;
    // console.log(slideIndex);
    autoShow();
}

function currentSlide(x){
    stop = true;
    slideIndex = x;
    stop = false;
    // console.log(slideIndex);
    autoShow(); 
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

autoShow();