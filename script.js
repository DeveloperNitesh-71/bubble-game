const again = document.querySelector(".scoreboard button")
const timer = document.querySelector(".timer p")
const back = document.querySelector(".scoreBack")
const div = document.querySelector("main")
const next = document.querySelector(".next p")
const score = document.querySelector(".score p")
const scoreboard = document.querySelector(".scoreboard h1")
function fillPanel() {
    for (let i = 0; i < 518; i++) {
        let randnum = Math.floor(Math.random() * 10)
        let option = document.createElement("div")
        option.textContent = randnum;
        click(option)
        div.appendChild(option)
    }
}

fillPanel()

function rand() {
    let nextnum = Math.floor(Math.random() * 10)
    next.textContent = nextnum
}
rand()

let s = 0;
let time = 60
let count = 0
function click(option) {
    option.addEventListener("click", (e) => {
        if(count === 0){
            timers(time)
            count++;
        }
        if (e.target.textContent === next.textContent) {
            s++;
            score.textContent = s
            rand()
            div.innerHTML = ""
            fillPanel()
        }
        else {
            score.textContent = s
            rand()
            div.innerHTML = ""
            fillPanel()
            clearInterval(tim)
            time = 60
            timer.textContent = time
            timer.textContent = 60
            count = 0;
            back.style.display = "flex"
            scoreboard.textContent = `Score: ${s}`
            s = 0;
        }
    })
}



let tim = null;
function timers(num) {
    tim = setInterval(() => {
        if (num > 0) {
            num--;
            timer.textContent = num
        }
        else {
            clearInterval(tim)
            back.style.display = "flex"
            scoreboard.textContent = `Score: ${s}`
        }
    }, 1000)
}

again.addEventListener("click", () => {
    back.style.display = "none";
    s = 0;
    count = 0
    time = 60
    timer.textContent = time
    score.textContent = s
    div.innerHTML = ""
    fillPanel()
})