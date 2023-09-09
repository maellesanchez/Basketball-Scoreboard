let homeScore = 0
let homeStoreEl = document.getElementById("home-score")

let guestScore = 0
let guestStoreEl = document.getElementById("guest-score")


let homeScoreBtn1 = document.getElementById("homescore-btn1")

function homeScorePlus1(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

let homeScoreBtn2 = document.getElementById("homescore-btn2")

function homeScorePlus2(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

let homeScoreBtn3 = document.getElementById("homescore-btn3")

function homeScorePlus3(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

let guestScoreBtn1 = document.getElementById("guestscore-btn1")

function guestScorePlus1(){
    guestScore += 1
    guestStoreEl.textContent = guestScore
}

let guestScoreBtn2 = document.getElementById("guestscore-btn2")

function guestScorePlus2(){
    guestScore += 2
    guestStoreEl.textContent = guestScore
}

let guestScoreBtn3 = document.getElementById("guestscore-btn3")

function guestScorePlus3(){
    guestScore += 3
    guestStoreEl.textContent = guestScore
}
