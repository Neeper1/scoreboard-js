let scoreEl = document.getElementById("score-el");
let scoreElGuest = document.getElementById("score-el-guest")
let count = 0

function onePoint() {
    count += 1
    scoreEl.textContent = count
}

function twoPoints() {
    count += 2
    scoreEl.textContent = count
}

function threePoints() {
    count += 3
    scoreEl.textContent = count
}

function onePointGuest() {
    count += 1
    scoreElGuest.textContent = count
}

function twoPointsGuest() {
    count += 2
    scoreElGuest.textContent = count
}

function threePointsGuest() {
    count += 3
    scoreElGuest.textContent = count
}
