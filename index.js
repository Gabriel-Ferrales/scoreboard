// Create global variables for scores
let home = document.getElementById("home")
let away = document.getElementById("away")

let homeScore = 0
let awayScore = 0

/* function increment(){
    homeScore += 1
    home.textContent = homeScore
} */

function highlight() {
    if (homeScore > awayScore) {
        home.style.color = "green"
        away.style.color = "red"
    } else if (homeScore == awayScore) {
        home.style.color = "red"
        away.style.color = "red"
    } else {
        home.style.color = "red"
        away.style.color = "green" 
    }
}

function increment(button) {
    if (button.id === "b1") {
        homeScore += 1
        home.textContent = homeScore
    } else if (button.id === "b2") {
        homeScore += 2
        home.textContent = homeScore
    } else if (button.id === "b3") {
        homeScore += 3
        home.textContent = homeScore
    }
    highlight()
}



function increment_away(button) {
    if (button.id === "b4") {
        awayScore += 1
        away.textContent = awayScore
    } else if (button.id === "b5") {
        awayScore += 2
        away.textContent = awayScore
    } else if (button.id === "b6") {
        awayScore += 3
        away.textContent = awayScore
    }
    highlight()
}

function new_game() {
    homeScore = 0
    awayScore = 0
    home.textContent = homeScore
    away.textContent = awayScore
    highlight()
}


