function cycleBackground() {
    var imageIndex = localStorage.getItem("imageIndex");
    if (imageIndex == null) {
        imageIndex = 1;
    }

    console.log("image index before increment: "+imageIndex);

    imageIndex += 1;
    if (imageIndex > 3) {
        imageIndex = 1;
    }

    loadBackground(imageIndex);
    console.log("image index after incrementing: "+imageIndex);
}

function loadBackground(imageIndex) {
    document.body.style.backgroundImage = "url('assets/background/bg"+imageIndex+".png')";
    localStorage.setItem("imageIndex", imageIndex);
}

function musicToggle() {
    var audio = document.getElementById("bgmusic")
    audio.volume = 0.4;
    if (audio.currentTime > 0) {
        audio.pause();
        audio.currentTime = 0;
    } else {
        audio.play();
    }
}
