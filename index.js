let startime;
let endtime;
let gamestate;

function changecolor() {
    document.getElementById("gameArea").style.backgroundColor = rgb(69, 232, 88);
    startime=Date.now();
    gamestate = "ready!";
}
function startgame() {
    clr = setTimeout(changecolor,5000);
    gameArea.style.backgroundColor = rgb(253,100,100);
    document.getElementById("gameArea").innerHTML= "<p><b>Wait for green!</b></p>";
    gamestate = "waiting!";
}

gameArea.addEventListener("click", function() {
    if (gamestate === "waiting!") {
        document.getElementById("gameArea").innerHTML = "<p><b>Too soon ! Wait for green!</b></p>";
        clearTimeout(clr);
        clr2 = setTimeout(startgame, 2000);
    }
    else if (gamestate === "ready!") {
        endtime = Date.now();
        reactiontime = (endtime - startime);
        document.getElementById("gameArea").innerHTML = "<p><b>"+reactiontime+"ms</b></p>";
        gamestate="Finished!";
        clearTimeout(clr);   
    }
    else{
        document.getElementById("gameArea").innerHTML = "<p><b>Click start to play again!</b></p>";
        return;
    }
});



















