let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function add(points, side){
    if (side == "home"){
        homeScore += points
        homeScoreEl.textContent = homeScore
    } else {
        guestScore += points
        guestScoreEl.textContent = guestScore
    }
}

// function saveFirstPeriod(){
//     let firstRoundEl = document.getElementById("first-period-results")
//     firstRoundEl.textContent = "First round score is: " + homeScore + ' - ' + guestScore
//     homeScore = 0
//     homeScoreEl = 0
//     guestScore = 0
//     guestScoreEl = 0
// }