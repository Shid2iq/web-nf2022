function imgPicker(){
    let picker = document.getElementById("selectImg").value;
    let images = document.getElementById("imgFigure");

    if (picker == "fire") {
        images.src = "flareon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar flareon.png";
        alert("Ini adalah gambar flareon.png");
    } else if (picker == "water") {
        images.src = "vaporeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar vaporeon.png";
        alert("Ini adalah gambar vaporeon.png");
    } else if (picker == "electric") {
        images.src = "jolteon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar jolteon.png";
        alert("Ini adalah gambar jolteon.png");
    } else if (picker == "dark") {
        images.src = "umbreon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar umbreon.png";
        alert("Ini adalah gambar umbreon.png");
    } else if (picker == "psyhic") {
        images.src = "espeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar espeon.png";
        alert("Ini adalah gambar espeon.png");
    } else if (picker == "fairy") {
        images.src = "sylveon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar sylveon.png";
        alert("Ini adalah gambar sylveon.png");
    } else if (picker == "grass") {
        images.src = "leafeon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar leafeon.png";
        alert("Ini adalah gambar leafeon.png");
    } else if (picker == "ice") {
        images.src = "glaceon.png";
        images.width = 300;
        images.alt = "Ini adalah gambar glaceon.png";
        alert("Ini adalah gambar glaceon.png");
    } else {
        alert("Gagal");
    }
}