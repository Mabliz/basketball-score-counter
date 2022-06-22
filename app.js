let score = 18
let scond = 10
document.getElementById("home-score").textContent = score
document.getElementById("guest-score").textContent = scond


let addScore = document.getElementById("home-score")
let scondBtn = document.getElementById("guest-score")


function add1() {
    score = score + 1
    addScore.innerText = score

}

function add2() {
    score = score + 2
    addScore.innerText = score

}

function add3() {
    score = score + 3
    addScore.innerText = score

}

function increase1() {
    scond = scond + 1
    scondBtn.innerText = scond
}

function increase2() {
    scond = scond + 2
    scondBtn.innerText = scond
}

function increase3() {
    scond = scond + 3
    scondBtn.innerText = scond
}
