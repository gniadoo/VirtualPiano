let valid_keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];
let valid_keys_white = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];
let valid_keys_black = ['KeyW', 'KeyE', 'KeyT', 'KeyY', 'KeyU'];


document.addEventListener("keypress", function(e) {
    if(valid_keys_white.includes(e.code) || valid_keys_black.includes(e.code)) {
        let audio = new Audio("../sounds/" + String(e.key.toUpperCase()) + ".mp3");
        audio.play();
        if(valid_keys_white.includes(e.code)) {
            let buttonpress = document.getElementById(String(e.key.toUpperCase()))
            buttonpress.style.backgroundColor = "#9f9f9f";
        } else if (valid_keys_black.includes(e.code)){
            let buttonpress = document.getElementById(String(e.key.toUpperCase()))
            buttonpress.style.backgroundColor = "#404144";
        }
    } else {
        console.log("Warning");
    }
});

document.addEventListener("keyup", function(e) {
    if(valid_keys_white.includes(e.code)) {
        let buttonpress = document.getElementById(String(e.key.toUpperCase()))
        buttonpress.style.backgroundColor = "white";
    } else {
        let buttonpress = document.getElementById(String(e.key.toUpperCase()))
        buttonpress.style.backgroundColor = "black";
    }
});