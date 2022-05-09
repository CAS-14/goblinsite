var imageIndex = localStorage.getItem("imageIndex");
if (imageIndex == null) {
    imageIndex = 1;
}

loadBackground(imageIndex)

function cycleBackground() {
    imageIndex += 1;
    if (imageIndex > 3) {
        imageIndex = 1;
    }

    loadBackground(imageIndex);
}

function loadBackground(imageIndex) {
    document.body.style.backgroundImage = "url('assets/background/bg"+imageIndex+".png')";
    localStorage.setItem("imageIndex", imageIndex);
}