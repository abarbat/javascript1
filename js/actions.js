document.getElementById("foodhide").style.visibility = "hidden";
document.getElementById("pottyhide").style.visibility = "hidden";
document.getElementById("sleephide").style.visibility = "hidden";
document.getElementById("eathide").style.visibility = "hidden";
document.getElementById("cookhide").style.visibility = "hidden";
document.getElementById("showeringhide").style.visibility = "hidden";

document.getElementById("shower").onclick = showshower
document.getElementById("table").onclick = showeat
document.getElementById("toilet").onclick = showtoilet
document.getElementById("bed").onclick = showsleep
document.getElementById("fridge").onclick = showfridge
document.getElementById("stove").onclick = showcook


function showsleep() {
document.getElementById("foodhide").style.visibility = "hidden";
document.getElementById("pottyhide").style.visibility = "hidden";
document.getElementById("sleephide").style.visibility = "visible";
document.getElementById("eathide").style.visibility = "hidden";
document.getElementById("cookhide").style.visibility = "hidden";
document.getElementById("showeringhide").style.visibility = "hidden";
}

function showeat() {
document.getElementById("foodhide").style.visibility = "hidden";
document.getElementById("pottyhide").style.visibility = "hidden";
document.getElementById("sleephide").style.visibility = "hidden";
document.getElementById("eathide").style.visibility = "visible";
document.getElementById("cookhide").style.visibility = "hidden";
document.getElementById("showeringhide").style.visibility = "hidden";
}

function showcook() {
document.getElementById("foodhide").style.visibility = "hidden";
document.getElementById("pottyhide").style.visibility = "hidden";
document.getElementById("sleephide").style.visibility = "hidden";
document.getElementById("eathide").style.visibility = "hidden";
document.getElementById("cookhide").style.visibility = "visible";
document.getElementById("showeringhide").style.visibility = "hidden";
}

function showshower() {
document.getElementById("foodhide").style.visibility = "hidden";
document.getElementById("pottyhide").style.visibility = "hidden";
document.getElementById("sleephide").style.visibility = "hidden";
document.getElementById("eathide").style.visibility = "hidden";
document.getElementById("cookhide").style.visibility = "hidden";
document.getElementById("showeringhide").style.visibility = "visible";
}

function showtoilet() {
document.getElementById("foodhide").style.visibility = "hidden";
document.getElementById("pottyhide").style.visibility = "visible";
document.getElementById("sleephide").style.visibility = "hidden";
document.getElementById("eathide").style.visibility = "hidden";
document.getElementById("cookhide").style.visibility = "hidden";
document.getElementById("showeringhide").style.visibility = "hidden";
}


function showfridge() {
document.getElementById("foodhide").style.visibility = "visible";
document.getElementById("pottyhide").style.visibility = "hidden";
document.getElementById("sleephide").style.visibility = "hidden";
document.getElementById("eathide").style.visibility = "hidden";
document.getElementById("cookhide").style.visibility = "hidden";
document.getElementById("showeringhide").style.visibility = "hidden";
}
