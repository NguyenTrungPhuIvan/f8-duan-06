// video
const playbtn = document.querySelector(".intro__video-play");
const introBtn = document.querySelector(".intro__video-card");
const video = document.querySelector(".intro__video-video");
// question
const btnQuestio = document.querySelector(".question__item-btn");
const itemQuestion = document.querySelector(".question__item");

const btnQuestios = document.querySelectorAll(".question__item-btn");
const itemQuestions = document.querySelectorAll(".question__item");
// footer
const header = document.querySelector(".header");
const footer = document.querySelector(".footer__main");

const run = (() => {
    playVideo();
    showContent();
    copyHeader();
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

function showContent() {
    itemQuestions.forEach((item, index) => {
        btn = btnQuestios[index];
        btn.onclick = () => {
            const active = document.querySelector(".question__item.active");
            active.classList.remove("active");
            item.classList.add("active");
        };
    });
}

function copyHeader() {
    footer.innerHTML = header.innerHTML;
}
