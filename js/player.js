const startBtn = document.getElementById("startBtn");

if(startBtn){

    startBtn.addEventListener("click",()=>{

window.open(
    "player.html",
    "TrainingPlayer",
    "width=1280,height=720,resizable=yes"
);
    });

}