var images = ["background.jpg", "art.png"];
var imageIndex = 0;

function cycleBackground() {
    imageIndex += 1;

    if (imageIndex >= images.length()) {
        imageIndex = 0;
    }

    document.body.style.backgroundImage = "url('assets/"+images[imageIndex]+"')"
}