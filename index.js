var homeCounter = document.getElementById('home-counter'),
    guestCounter = document.getElementById('guest-counter'),
    homeCount = 0,
    guestCount = 0;
function home1() {
    homeCount += 1;
    homeCounter.textContent = homeCount;
}
function home2() {
    homeCount += 2;
    homeCounter.textContent = homeCount;
}
function home3() {
    homeCount += 3;
    homeCounter.textContent = homeCount;
}
function guest1() {
    guestCount += 1;
    guestCounter.textContent = guestCount;
}
function guest2() {
    guestCount += 2;
    guestCounter.textContent = guestCount;
}
function guest3() {
    guestCount += 3;
    guestCounter.textContent = guestCount;
}
function resetHome() {
    homeCounter.textContent = "0";
}
function resetGuest() {
    guestCounter.textContent = "0";
}