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

const exitBtn = document.getElementById("exitBtn");

if (exitBtn) {
    exitBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to exit the training?")) {
            window.close();
        }

    });
}

const video = document.getElementById("trainingVideo");

if (video) {

    const savedTime = localStorage.getItem("videoTime");

    if (savedTime) {
        video.addEventListener("loadedmetadata", () => {
            video.currentTime = parseFloat(savedTime);
        });
    }

    video.addEventListener("timeupdate", () => {
        console.log("Saving:", video.currentTime);
        localStorage.setItem("videoTime", video.currentTime);
    });

}
