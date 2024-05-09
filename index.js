let home = document.getElementById("home-counter-el")
let homeSum = 0
home.textContent = homeSum

let guest = document.getElementById("guest-counter-el")
let guestSum = 0
guest.textContent = guestSum

function add1home() {
    homeSum += 1
    home.textContent = homeSum
}

function add2home() {
    homeSum += 2
    home.textContent = homeSum
}

function add3home() {
    homeSum += 3
    home.textContent = homeSum
}

function add1guest() {
    guestSum += 1
    guest.textContent = guestSum
}

function add2guest() {
    guestSum += 2
    guest.textContent = guestSum
}

function add3guest() {
    guestSum += 3
    guest.textContent = guestSum
}