var timer = 60;
var score = 0;
var hitRn = 1000;
function makeBubble() {
    let clutter = '';

    for(let i = 1; i <= 112; i++){
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble"> ${rn} </div>`;
    }

    document.querySelector('.pbtm').innerHTML = clutter;
}

function runTime(){
    var timerInterval = setInterval(() => {
        if(timer == 1){
            document.querySelector('.pbtm').innerHTML = `<h1>Game Over</h1>`;
            clearInterval(timerInterval);
            
        }
        timer--;
        document.querySelector('#timerVal').textContent = timer;
    }, 1000);
}

function getNewHit(){
    hitRn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerHTML = hitRn;
}

function increaseScore(){
    score += 10;
    document.querySelector('#scoreVal').textContent = score;
}

document.querySelector('.pbtm').addEventListener('click', function(dets){
    let clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble();
runTime();
getNewHit();