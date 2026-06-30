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

/* if exit button is not required then remove this code */
if (exitBtn) {
    exitBtn.addEventListener("click", () => {

        if (confirm("Are you sure you want to exit the Course?")) {
            window.close();
        }

    });
}

const video = document.getElementById("trainingVideo");
const source = document.getElementById("videoSource");

if (video && source) {
    source.src = COURSE.video;
    video.load();
}

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
