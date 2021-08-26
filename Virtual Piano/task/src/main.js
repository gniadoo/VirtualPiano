let valid_keys = ['KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ'];

document.addEventListener("keypress", function(e) {
    if(valid_keys.includes(e.code)) {
        console.log(`The \'${e.key}\' is pressed`);
    } else {
        console.log("Warning");
    }
});
