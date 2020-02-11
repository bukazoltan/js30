let keys = [];
let secret = "38384040373937396665"
window.addEventListener('keyup', (e) => {
    keys.push(e.which);
    keys.splice(-secret.length - 1, keys.length - secret.length);
    if (keys.join('') === secret) {
        rekt.get();
    }
});