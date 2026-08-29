/* =========================================
   PAGE SYSTEM
========================================= */

let currentPage = 1;

function showPage(pageNumber) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const page = document.getElementById(
        "page" + pageNumber
    );

    if (page) {
        page.classList.add("active");
        currentPage = pageNumber;
    }

    if (pageNumber === 9) {
        createConfetti();
    }
}


function nextPage() {

    if (currentPage < 9) {
        showPage(currentPage + 1);
    }

}


/* =========================================
   PAGE 2
   4 RUNS AWAY 😂
========================================= */

const yesButton =
    document.getElementById("yesButton");


yesButton.addEventListener(
    "mouseenter",
    moveYesButton
);


yesButton.addEventListener(
    "touchstart",
    function(event) {

        event.preventDefault();

        moveYesButton();

    }
);


function moveYesButton() {

    const maxX =
        window.innerWidth -
        yesButton.offsetWidth -
        20;

    const maxY =
        window.innerHeight -
        yesButton.offsetHeight -
        20;

    const randomX =
        Math.max(
            10,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            10,
            Math.random() * maxY
        );

    yesButton.style.position = "fixed";

    yesButton.style.left =
        randomX + "px";

    yesButton.style.top =
        randomY + "px";
}


/* =========================================
   PAGE 4
   SLIDER
========================================= */

const careSlider =
    document.getElementById("careSlider");

const dingButton =
    document.getElementById("dingButton");

const attemptCount =
    document.getElementById("attemptCount");

let sliderAttempts = 0;

let sliderTimer;


careSlider.addEventListener(
    "input",
    function() {

        clearTimeout(sliderTimer);

        sliderAttempts++;

        attemptCount.textContent =
            sliderAttempts + " / 2";


        sliderTimer = setTimeout(
            function() {

                careSlider.value = 0;


                if (sliderAttempts >= 2) {

                    dingButton.classList.add(
                        "show"
                    );

                }

            },
            200
        );

    }
);


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    const container =
        document.getElementById("confetti");

    container.innerHTML = "";


    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.background =
            [
                "#ff4c9b",
                "#7546ef",
                "#20a9ed",
                "#ffbd3e",
                "#55c878"
            ][
                Math.floor(
                    Math.random() * 5
                )
            ];


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        container.appendChild(piece);

    }

}


/* =========================================
   SHARE
========================================= */

function shareQuiz() {

    const shareData = {

        title: "Brain Test 🧠",

        text:
            "I found a very serious intelligence test 😂",

        url:
            window.location.href

    };


    if (
        navigator.share
    ) {

        navigator.share(
            shareData
        );

    } else {

        alert(
            "Copy this website link and send it to your friend 😂"
        );

    }

}


/* =========================================
   RESTART
========================================= */

function restartQuiz() {

    currentPage = 1;

    sliderAttempts = 0;

    careSlider.value = 0;

    attemptCount.textContent = "0 / 2";

    dingButton.classList.remove(
        "show"
    );

    yesButton.style.position = "";

    yesButton.style.left = "";

    yesButton.style.top = "";

    showPage(1);

}


/* =========================================
   START
========================================= */

showPage(1);
const loveNo = document.getElementById("loveNo");
const loveYes = document.getElementById("loveYes");

let loveYesSize = 1;
let noClicks = 0;

loveNo.addEventListener("click", function() {

    noClicks++;

    // Make YES bigger
    loveYesSize += 0.25;

    loveYes.style.transform =
        `scale(${loveYesSize})`;

    // After 10 NO clicks
    if (noClicks >= 10) {

        loveNo.style.position = "absolute";

        loveNo.style.zIndex = "0";

        loveYes.style.position = "relative";

        loveYes.style.zIndex = "10";

        // Put NO underneath YES
        loveNo.style.left = "50%";
        loveNo.style.top = "50%";

        loveNo.style.transform =
            "translate(-50%, -50%)";

    }

});