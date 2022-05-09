function cycleBackground() {
    var imageIndex = localStorage.getItem("imageIndex");
    if (imageIndex == null) { 
        imageIndex = 0;
        console.log("image index initialized to 0")
    }

    console.log("image index before increment: "+imageIndex);

    imageIndex ++;
    if (imageIndex > 3) imageIndex = 1;

    rs = document.querySelector(":root").style;
    rs.setProperty("--background", "url('assets/background/bg" + imageIndex + ".png')");

    localStorage.setItem("imageIndex", imageIndex);
    console.log("image index after load: "+imageIndex);
}