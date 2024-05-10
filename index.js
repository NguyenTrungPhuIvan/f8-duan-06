// slider

const run = (() => {
    playVideo();
    showContent();
    copy();
    SliderShow(".specialities");
    SliderShow(".asmosphere");
})();

function playVideo() {
    // video
    const playbtn = document.querySelector(".intro__video-play");
    const introBtn = document.querySelector(".intro__video-card");
    const video = document.querySelector(".intro__video-video");
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
    // question
    const btnQuestio = document.querySelector(".question__item-btn");
    const itemQuestion = document.querySelector(".question__item");

    const btnQuestios = document.querySelectorAll(".question__item-btn");
    const itemQuestions = document.querySelectorAll(".question__item");

    itemQuestions.forEach((item, index) => {
        btn = btnQuestios[index];
        btn.onclick = () => {
            const active = document.querySelector(".question__item.active");
            active.classList.remove("active");
            item.classList.add("active");
        };
    });
}

function copy() {
    // footer
    const header = document.querySelector(".header");
    const footer = document.querySelector(".footer__main");
    footer.innerHTML = header.innerHTML;

    const headerLink = document.querySelector(".header__mail");
    const footerLink = document.querySelector(".footer_mail");
    footerLink.innerHTML = headerLink.innerHTML;

    const nav = document.querySelector(".nav");
    const barsNav = document.querySelector(".bars-bg-nav");
    barsNav.innerHTML = nav.innerHTML;
}

function SliderShow(element) {
    const sliderItem = document.querySelectorAll(
        `${element} .slider-show__item`
    );
    const chevronLeft = document.querySelector(`${element}  .chevron-left`);
    const chevronRight = document.querySelector(`${element}  .chevron-right`);
    const sliderList = document.querySelector(`${element}  .slider-show__list`);
    const sliderBullet = document.querySelectorAll(`${element}  .buttlet`);
    const width = sliderItem[0].offsetWidth;

    const lengthSlider = sliderItem.length;
    let curr = 0;
    chevronRight.addEventListener("click", () => {
        if (curr == lengthSlider - 1) {
            curr = 0;
            sliderList.style.transform = `translateX(${width * -1 * curr}px)`;
            document
                .querySelector(".buttlet.active")
                .classList.remove("active");
            sliderBullet[curr].classList.add("active");
        } else {
            curr++;
            sliderList.style.transform = `translateX(${width * -1 * curr}px)`;
            document
                .querySelector(".buttlet.active")
                .classList.remove("active");
            sliderBullet[curr].classList.add("active");
        }
    });
    chevronLeft.addEventListener("click", () => {
        if (curr == 0) {
            curr = lengthSlider - 1;
            sliderList.style.transform = `translateX(${width * -1 * curr}px)`;
            document
                .querySelector(".buttlet.active")
                .classList.remove("active");
            sliderBullet[curr].classList.add("active");
        } else {
            curr--;
            sliderList.style.transform = `translateX(${width * -1 * curr}px)`;
            document
                .querySelector(".buttlet.active")
                .classList.remove("active");
            sliderBullet[curr].classList.add("active");
        }
    });
}
