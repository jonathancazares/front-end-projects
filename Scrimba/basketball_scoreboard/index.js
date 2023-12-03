let homeNum = document.getElementById("home-count");
let guestNum = document.getElementById("guest-count");

let homePoints = 0;
let guestPoints = 0;


function addOneHome() {
    homePoints += 1;
    homeNum.textContent = homePoints;
}

function addTwoHome() {
    homePoints += 2;
    homeNum.textContent = homePoints;
}

function addThreeHome() {
    homePoints += 3;
    homeNum.textContent = homePoints;
}

function addOneGuest() {
    guestPoints += 1;
    guestNum.textContent = guestPoints;
}

function addTwoGuest() {
    guestPoints += 2;
    guestNum.textContent = guestPoints;
}

function addThreeGuest() {
    guestPoints += 3;
    guestNum.textContent = guestPoints;
}

function restart() {
    homePoints = 0;
    guestPoints = 0;
    homeNum.textContent = homePoints;
    guestNum.textContent = guestPoints;
}