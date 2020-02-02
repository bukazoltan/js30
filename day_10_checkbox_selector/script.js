const checkboxes = document.querySelectorAll("input[type='checkbox']");

let lastChecked;

function checkboxClicked(e) {
    //flag variable
    let inBetween = false;

    //check shift key && check if the current checkbox is being checked it
    if (e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }
            if (inBetween) {
                checkbox.checked = true;
            }
        })
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', checkboxClicked));