var imageIndex = localStorage.getItem("imageIndex");
if (imageIndex == null) {
    imageIndex = 1;
    localStorage.setItem("imageIndex", imageIndex)
}

document.body.style.backgroundImage = "url('assets/background/bg"+imageIndex+".png')";

function cycleBackground() {
    imageIndex += 1;
    if (imageIndex > 3) {
        imageIndex = 1;
    }

    localStorage.setItem("imageIndex", imageIndex);
    document.body.style.backgroundImage = "url('assets/background/bg"+imageIndex+".png')";
}