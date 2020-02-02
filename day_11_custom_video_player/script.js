// Selecting the controlled elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const time = player.querySelector('.timestamp');
const progress = player.querySelector('.progress');
const speed = player.querySelector('.playback');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const fscreenButton = player.querySelector('.fscreen');
const ranges = player.querySelectorAll('.player__slider');

// Control functions
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
};

function updateButton() {
    const icon = this.paused ? '►' : '❚❚';
    toggle.textContent = icon;
};

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
};

function handleRangeUpdate() {
    video[this.name] = this.value;
    if (this.name === "playbackRate") {
        speed.textContent = `${this.value * 100}%`;
    }
};

function displayTime(sec, mode) {
    if (mode === "gone") {
        let currentTime = Math.floor(sec);
        let mins = Math.floor(currentTime / 60);
        let seconds = currentTime % 60;
        if (mins < 10) {
            mins = `0${mins}`
        };
        if (seconds < 10) {
            seconds = `0${seconds}`
        };
        return `${mins}:${seconds}`;
    } else if (mode === "left") {
        let currentTime = Math.floor(video.duration - sec);
        let mins = Math.floor(currentTime / 60);
        let seconds = currentTime % 60;
        if (mins < 10) {
            mins = `0${mins}`
        };
        if (seconds < 10) {
            seconds = `0${seconds}`
        };
        return `-${mins}:${seconds}`;
    }
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
    if (positiveTracking) {
        timeStamp = displayTime(video.currentTime, "gone");
    } else {
        timeStamp = displayTime(video.currentTime, "left");
    }
    time.textContent = timeStamp;
};

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
};

function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
        element.msRequestFullscreen();
    }
};

function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
        document.msExitFullscreen();
    }
};

function checkFullscreen() {
    if (document.fullscreen) {
        closeFullscreen();

    } else {
        openFullscreen(player);
    }
}


// Event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip));

fscreenButton.addEventListener('click', checkFullscreen);

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

let positiveTracking = true;
time.addEventListener('click', () => positiveTracking = !positiveTracking);