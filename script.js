function cycleBackground() {
    var imageIndex = localStorage.getItem("imageIndex");
    if (imageIndex == null) imageIndex = 1;

    console.log("image index before increment : "+imageIndex);

    imageIndex ++;
    if (imageIndex > 3) imageIndex = 1;

    loadBackground(imageIndex);
    console.log("image index after increment  : "+imageIndex);
}

function loadBackground(imageIndex) {
    document.body.style.backgroundImage = "url('assets/background/bg"+imageIndex+".png')";
    localStorage.setItem("imageIndex", imageIndex);
}