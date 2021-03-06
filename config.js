const canvas = document.getElementById("canvas");
const _WIDTH = 60;
const _HEIGHT = 60;

// initialisation du canvas avant tout objets et actions
canvas.style.width = `${_WIDTH}%`;
canvas.style.height = `${_HEIGHT}%`;

let dpi = window.devicePixelRatio;
//fix pixelated element
export function fix_dpi() {
    //get CSS height
    //the + prefix casts it to an integer
    //the slice method gets rid of "px"
    let style_height = +getComputedStyle(canvas).getPropertyValue("height").slice(0, -2);
    //get CSS width
    let style_width = +getComputedStyle(canvas).getPropertyValue("width").slice(0, -2);
    //scale the canvas
    canvas.setAttribute('height', style_height * dpi);
    canvas.setAttribute('width', style_width * dpi);

}