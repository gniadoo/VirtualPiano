let valid_keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];

document.addEventListener("keypress", function(e) {
    if(valid_keys.includes(e.code)) {
        let audio = new Audio("../sounds/" + String(e.key.toUpperCase()) + ".mp3");
        audio.play();
    } else {
        console.log("Warning");
    }
});
