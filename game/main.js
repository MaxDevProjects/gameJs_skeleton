import {
    fix_dpi as dpiConfig
} from "../config.js";
// ##############################
//Creation des éléments du jeu
// ##############################

//création du jeu si context.
if (canvas.getContext) {
    const context = canvas.getContext('2d');
    dpiConfig();

    let load = () => {
        
    }

    let update = () => {
    }
    
    let draw = () => {
        context.fillStyle = "black"
        context.clearRect(0, 0, canvas.width, canvas.height);

        requestAnimationFrame(draw)
    }
    requestAnimationFrame(draw)
} else {
    `<p>Désolé mais ton navigateur n'accepte pas le truc de fou que je voulais te montrer</p>`
}