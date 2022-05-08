var images = ["background.jpg", "art.png"];
var imageIndex = 0;

function cycleBackground() {
    imageIndex += 1;
    document.body.style.backgroundImage = "url('assets/"+images[imageIndex]+"')"
}