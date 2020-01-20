let keyToSound = {
    "KeyA": "clap",
    "KeyS": "hihat",
    "KeyD": "kick",
    "KeyF": "openhat",
    "KeyG": "boom",
    "KeyH": "ride",
    "KeyJ": "snare",
    "KeyK": "tom",
    "KeyL": "tink"
}

let audios = document.getElementsByTagName("audio");
console.log(audios.length);
for (var i = 0; i < audios.length; i++) {
    audios[i].addEventListener("play", onPlay, false);
    audios[i].addEventListener("ended", onEnded, false);
}

function playAudio(file) {
    let sound = document.getElementById(file);
    sound.currentTime = 0;
    sound.play();
}

function onPlay(e){
    let button = document.getElementById(e.target.id + "-btn");
    button.classList.add("playing")
}

function onEnded(e){
    let button = document.getElementById(e.target.id + "-btn");
    button.classList.remove("playing")
}

document.addEventListener('keypress', keyPress);

function keyPress(e) {
    if (keyToSound[e.code]) {
        playAudio(keyToSound[e.code])
    }
}