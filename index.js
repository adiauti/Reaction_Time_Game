let startime;
let endtime;
let gamestate;
let clr1;
let clr2;

function startgame() {
    document.getElementById("gameArea").innerHTML= "<p style='font-size:40px'><b>Wait for green!</b></p>";
    gameArea.style.backgroundColor = "rgb(253,100,100)";
    gamestate = "waiting!";
    clr1 = setTimeout(changecolor,5000);
}

function changecolor() {
    document.getElementById("gameArea").style.backgroundColor = "rgb(69, 232, 88)";
    startime=Date.now();
    gamestate = "ready!";
}

gameArea.addEventListener("click", function() {
    if (gamestate === "waiting!") {
        document.getElementById("gameArea").innerHTML = "<p style='font-size:40px'><b>Too soon ! Wait for green!</b></p>";
        clearTimeout(clr1);
        clr2 = setTimeout(startgame, 2000);
    }
    else if (gamestate === "ready!") {
        endtime = Date.now();
        reactiontime = (endtime - startime);
        document.getElementById("gameArea").innerHTML = "<p style='font-size:40px'><b>"+reactiontime+"ms</b></p>";
        gamestate="Finished!";
        clearTimeout(clr1);   
    }
    else{
        document.getElementById("gameArea").innerHTML = "<p style='font-size:40px'><b>Click start to play again!</b></p>";
        return;
    }
});



















