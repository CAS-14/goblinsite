function cycleBackground(doIncrement) {
    var imageIndex = localStorage.getItem("imageIndex");
    
    if (imageIndex == null) imageIndex = 1;
    if (doIncrement) imageIndex ++;
    if (imageIndex > 3) imageIndex = 1;

    document.querySelector(":root").style.setProperty("--background", "url('assets/background/bg" + imageIndex + ".png')");
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
