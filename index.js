const playbtn = document.querySelector(".intro__video-play");
const introBtn = document.querySelector(".intro__video-card");
const video = document.querySelector(".intro__video-video");

const run = (() => {
    playVideo();
})();

function playVideo() {
    playbtn.onclick = (e) => {
        video.setAttribute("controls", "controls");
        video.setAttribute("muted", "muted");
        video.setAttribute("autoplay", "autoplay");

        playbtn.style.display = "none";
        introBtn.style.display = "none";

        video.play();
    };
    introBtn.onclick = (e) => {
        video.setAttribute("controls", "controls");
        video.setAttribute("muted", "muted");
        video.setAttribute("autoplay", "autoplay");
        playbtn.style.display = "none";
        introBtn.style.display = "none";
        video.play();
    };
}
