const body = document.querySelector("body");
const btnDys = document.getElementById("btn-dys");
// zoom
function zoomFont() {
    const size = +body.style.fontSize.split("rem").join("");
    body.style.fontSize = size + 0.2 + "rem";
}
// unzoom
function unZoomFont() {
    const size = +body.style.fontSize.split("rem").join("");
    body.style.fontSize = size - 0.2 + "rem";
}
// zoomLineHeigth
function zoomLineHeigth() {
    const size = +body.style.lineHeight.split("rem").join("");
    body.style.lineHeight = size + 0.2 + "rem";
}
// zoomLineHeigth
function unZoomLineHeigth() {
    const size = +body.style.lineHeight.split("rem").join("");
    body.style.lineHeight = size - 0.2 + "rem";
}
// setDysFont
function setDysFont() {
    body.classList.toggle("dyslexia");
    body.classList.contains("dyslexia")
        ? (btnDys.textContent = "Police classique")
        : (btnDys.textContent = "Police Dys");
}
// setContrast
function setContrast() {
    body.classList.toggle("contrast");
}

// reset
function reset() {
    body.classList.remove("contrast");
    body.classList.remove("dyslexia");
    body.style.fontSize = "1rem";
    body.style.lineHeight = "1.5rem";
}
