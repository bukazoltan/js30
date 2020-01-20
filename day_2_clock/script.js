const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function updateClock () {
    var currentTime = new Date();

    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    const secondsDeg = ((currentSeconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;

    const minutesDeg = ((currentMinutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;

    const hoursDeg = ((currentHours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;

    const allHands = document.querySelectorAll('.hand');

    if(secondsDeg === 90) {
        allHands.forEach(hand => hand.style.transition = 'none');
    } else {
        allHands.forEach(hand => hand.style.transition = '');
    }

    const digitalSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    const digitalMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    const digitalHour = (currentHours > 12 ? currentHours - 12 : currentHours);
    const timeOfDay = (currentHours >12 ? "PM" : "AM");

    const currentTimeString = `${digitalHour}:${digitalMinutes}:${digitalSeconds} ${timeOfDay}`
    document.getElementById("digital").firstChild.nodeValue = currentTimeString;
}

const t = setInterval('updateClock()', 1000);