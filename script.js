var imageIndex = 0;

function cycleBackground() {
    imageIndex += 1;

    if (imageIndex >= images.length()) {
        imageIndex = 0;
    }

    document.body.style.backgroundImage = "url('assets/background/bg"+imageIndex+".png')"
}