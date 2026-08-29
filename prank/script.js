* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {

    min-height: 100vh;

    font-family:
        "Trebuchet MS",
        Arial,
        sans-serif;

    background:
        linear-gradient(
            135deg,
            #eee8ff,
            #fff4fa,
            #e8f7ff
        );

    color: #25204a;

    display: flex;

    justify-content: center;

    align-items: center;

    padding: 20px;
}


/* =========================================
   MAIN APP
========================================= */

.app {

    width: 100%;

    max-width: 700px;

    min-height: 650px;

    background: rgba(255, 255, 255, 0.9);

    border: 1px solid #ffffff;

    border-radius: 28px;

    box-shadow:
        0 20px 60px rgba(92, 67, 160, 0.18);

    overflow: hidden;

    position: relative;
}


/* =========================================
   PAGES
========================================= */

.page {

    display: none;

    min-height: 650px;

    padding: 30px 45px;

    flex-direction: column;

    align-items: center;

    text-align: center;

    position: relative;
}

.page.active {
    display: flex;
}


/* =========================================
   TOP BAR
========================================= */

.topbar {

    width: 100%;

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding-bottom: 18px;

    border-bottom: 1px solid #eeeafa;

    margin-bottom: 25px;
}

.app-name {

    font-weight: 900;

    font-size: 16px;

    color: #3d2a78;
}

.version {

    font-size: 12px;

    font-weight: bold;

    color: #8b76c9;
}


/* =========================================
   PAGE NUMBER
========================================= */

.page-number {

    background:
        linear-gradient(
            90deg,
            #8757ed,
            #b45cff
        );

    color: white;

    padding: 8px 20px;

    border-radius: 30px;

    font-size: 12px;

    font-weight: 900;

    margin-bottom: 25px;

    box-shadow:
        0 6px 15px rgba(135, 87, 237, 0.2);
}


/* =========================================
   PAGE 1
========================================= */

.brain-icon {

    font-size: 65px;

    margin-bottom: 10px;

    animation: float 2s ease-in-out infinite;
}

@keyframes float {

    0%, 100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-8px);
    }
}

.page h1 {

    font-size: clamp(38px, 7vw, 62px);

    line-height: 1.05;

    margin-bottom: 25px;

    font-weight: 900;
}

.page h1 span {

    background:
        linear-gradient(
            90deg,
            #ff3e91,
            #7350ff
        );

    -webkit-background-clip: text;

    color: transparent;
}


/* =========================================
   INFO CARD
========================================= */

.info-card {

    width: 100%;

    max-width: 520px;

    background: white;

    border-radius: 18px;

    padding: 20px;

    text-align: left;

    box-shadow:
        0 8px 30px rgba(80, 60, 150, 0.08);

    margin-bottom: 15px;
}

.info-card p {

    font-size: 13px;

    margin: 8px 0;

    font-weight: bold;
}

.progress {

    height: 12px;

    background: #e9e5ff;

    border-radius: 20px;

    overflow: hidden;

    margin-top: 15px;

    width: 85%;

    display: inline-block;
}

.progress-fill {

    width: 87%;

    height: 100%;

    background:
        linear-gradient(
            90deg,
            #6d4cff,
            #1baaf5
        );

    border-radius: 20px;

    animation: loading 2s ease;
}

@keyframes loading {

    from {
        width: 0;
    }

    to {
        width: 87%;
    }
}


/* =========================================
   WARNING
========================================= */

.warning-card {

    width: 100%;

    max-width: 520px;

    padding: 20px;

    border-radius: 18px;

    background: #fff0f4;

    border: 1px solid #ffbfd2;

    color: #e52e67;

    font-size: 14px;

    line-height: 1.7;

    margin-bottom: 20px;
}

.description {

    max-width: 500px;

    color: #716a86;

    font-size: 14px;

    line-height: 1.6;

    margin-bottom: 20px;
}


/* =========================================
   BUTTONS
========================================= */

.main-btn {

    border: none;

    background:
        linear-gradient(
            90deg,
            #7045f5,
            #17a9ed
        );

    color: white;

    padding: 15px 35px;

    min-width: 190px;

    border-radius: 15px;

    font-size: 15px;

    font-weight: 900;

    cursor: pointer;

    box-shadow:
        0 8px 20px rgba(102, 71, 225, 0.25);

    transition: 0.2s ease;
}

.main-btn:hover {

    transform: translateY(-3px);

    box-shadow:
        0 12px 25px rgba(102, 71, 225, 0.3);
}

.main-btn:active {

    transform: translateY(1px);
}


/* =========================================
   PAGE 2
========================================= */

.question-card {

    width: 100%;

    max-width: 580px;

    background: white;

    border: 1px solid #e8e2ff;

    border-radius: 22px;

    padding: 30px;

    box-shadow:
        0 12px 35px rgba(75, 55, 150, 0.1);
}

.question-number {

    color: #e83c91;

    font-size: 12px;

    font-weight: 900;

    text-align: left;
}

.emoji {

    font-size: 45px;

    margin: 10px;
}

.question-card h2 {

    font-size: 38px;

    line-height: 1.15;

    margin-bottom: 30px;
}

.question-card h2 span {

    color: #6547ec;
}

.answer-buttons {

    display: flex;

    justify-content: center;

    gap: 25px;
}

.answer-btn {

    width: 150px;

    height: 80px;

    border: none;

    border-radius: 17px;

    color: white;

    font-size: 38px;

    font-weight: 900;

    cursor: pointer;

    background:
        linear-gradient(
            135deg,
            #ff4c9b,
            #a94cff
        );

    box-shadow:
        0 8px 18px rgba(181, 62, 220, 0.25);

    transition: 0.2s ease;
}

.answer-btn:nth-child(2) {

    background:
        linear-gradient(
            135deg,
            #23aaf3,
            #5964ff
        );
}

.answer-btn:hover {

    transform: translateY(-5px);

    box-shadow:
        0 13px 25px rgba(90, 70, 180, 0.25);
}

.hint-card {

    margin-top: 20px;

    padding: 15px 25px;

    background: #f7f4ff;

    border-radius: 15px;

    font-size: 13px;

    color: #615780;

    line-height: 1.7;
}

.hint-card span {

    color: #ff4388;

    font-weight: bold;
}


/* =========================================
   PAGE 3
========================================= */

.error-card {

    width: 100%;

    max-width: 550px;

    padding: 30px;

    background: #fff1f6;

    border: 2px solid #ff8eb5;

    border-radius: 20px;

    margin-bottom: 20px;
}

.error-icon {

    font-size: 65px;

    margin-bottom: 10px;
}

.error-title {

    color: #ef3475;

    font-weight: 900;

    font-size: 14px;

    letter-spacing: 1px;
}

.error-card h1 {

    color: #c8265d;

    font-size: 45px;

    margin: 10px 0;
}

.error-card p {

    font-size: 16px;

    color: #8e4a66;
}

.status-card {

    width: 100%;

    max-width: 550px;

    padding: 18px 25px;

    background: white;

    border-radius: 16px;

    box-shadow:
        0 8px 25px rgba(90, 60, 160, 0.08);

    text-align: left;

    margin-bottom: 20px;
}

.status-card p {

    font-size: 13px;

    font-weight: bold;

    margin: 8px;
}


/* =========================================
   PAGE 4
========================================= */

.scan-title {

    font-size: 27px;

    margin-bottom: 8px;

    color: #3d2a78;
}

.scan-description {

    color: #2767e7;

    font-size: 18px;

    margin-bottom: 20px;
}

.slider-card {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 30px;

    width: 100%;

    max-width: 580px;

    background: white;

    border-radius: 22px;

    padding: 25px;

    box-shadow:
        0 10px 30px rgba(80, 60, 150, 0.09);
}

.slider-section {

    display: flex;

    flex-direction: column;

    align-items: center;
}

.slider-top,
.slider-bottom {

    font-size: 11px;

    font-weight: 900;

    color: #6d3fd0;

    max-width: 180px;
}

.slider-bottom {

    color: #514b67;

    margin-top: 12px;
}

.slider-wrapper {

    height: 250px;

    width: 55px;

    display: flex;

    align-items: center;

    justify-content: center;

    position: relative;
}

#careSlider {

    appearance: none;

    -webkit-appearance: none;

    position: absolute;

    width: 250px;

    height: 28px;

    background: transparent;

    transform: rotate(-90deg);

    cursor: pointer;
}

#careSlider::-webkit-slider-runnable-track {

    height: 24px;

    background: #eeeaff;

    border: 2px solid #b7a7ed;

    border-radius: 20px;
}

#careSlider::-webkit-slider-thumb {

    appearance: none;

    -webkit-appearance: none;

    width: 45px;

    height: 45px;

    margin-top: -12px;

    border-radius: 50%;

    background:
        linear-gradient(
            135deg,
            #ff5ca8,
            #7546ef
        );

    border: 3px solid white;

    box-shadow:
        0 4px 12px rgba(105, 65, 210, 0.35);

    cursor: grab;
}

#careSlider::-moz-range-track {

    height: 24px;

    background: #eeeaff;

    border: 2px solid #b7a7ed;

    border-radius: 20px;
}

#careSlider::-moz-range-thumb {

    width: 45px;

    height: 45px;

    border-radius: 50%;

    background: #7546ef;

    border: 3px solid white;

    cursor: grab;
}


/* System card */

.system-card {

    width: 200px;

    padding: 20px;

    background: #f7f4ff;

    border-radius: 18px;

    text-align: left;
}

.system-card h3 {

    font-size: 14px;

    color: #6842dd;

    margin-bottom: 15px;
}

.system-card p {

    font-size: 11px;

    margin: 12px 0;

    font-weight: bold;
}

.fake-wave {

    color: #8c5cff;

    font-size: 17px;

    margin-top: 20px;
}


/* DING button */

.ding-button {

    display: none;

    margin-top: 20px;

    animation: pop 0.5s ease;
}

.ding-button.show {

    display: block;
}

@keyframes pop {

    0% {
        transform: scale(0);
        opacity: 0;
    }

    70% {
        transform: scale(1.1);
    }

    100% {
        transform: scale(1);
        opacity: 1;
    }
}


/* =========================================
   PAGE 5
========================================= */

.cute-robot {

    font-size: 80px;

    margin: 25px;

    animation: float 2s infinite;
}

.final-question-card {

    width: 100%;

    max-width: 570px;

    padding: 35px;

    background:
        linear-gradient(
            135deg,
            #f8f3ff,
            #fff3fa
        );

    border: 1px solid #e5d9ff;

    border-radius: 24px;

    box-shadow:
        0 12px 35px rgba(80, 60, 160, 0.1);
}

.warning-text {

    color: #f07b38;

    font-weight: 900;

    margin-bottom: 15px;
}

.final-question-card h1 {

    font-size: 35px;

    margin-bottom: 15px;
}

.final-question-card p {

    color: #77718b;

    margin-bottom: 20px;
}


/* =========================================
   PAGE 6
========================================= */

.final-title {

    font-size: 18px;

    font-weight: 900;

    color: #7a43ef;

    margin: 15px;
}

.result-card {

    width: 100%;

    max-width: 550px;

    padding: 30px;

    border-radius: 22px;

    background: white;

    border: 1px solid #ddd2ff;

    box-shadow:
        0 10px 30px rgba(80, 60, 160, 0.1);
}

.result-card p {

    font-size: 15px;

    color: #3d2c91;

    font-weight: 900;
}

.iq {

    font-size: 90px;

    line-height: 1;

    font-weight: 900;

    background:
        linear-gradient(
            90deg,
            #ff3c91,
            #7148f5
        );

    -webkit-background-clip: text;

    color: transparent;

    margin: 10px;
}

.result-card h2 {

    color: #159be0;

    font-size: 25px;
}

.diagnosis-card {

    width: 100%;

    max-width: 550px;

    margin-top: 18px;

    padding: 20px;

    text-align: left;

    border-radius: 18px;

    background: #f6f0ff;

    color: #493e68;

    font-size: 13px;

    line-height: 1.6;
}

.final-buttons {

    display: flex;

    gap: 15px;

    margin-top: 20px;

    justify-content: center;

    flex-wrap: wrap;
}

.replay-btn {

    border: 2px solid #7546ef;

    background: white;

    color: #7546ef;

    padding: 13px 25px;

    border-radius: 15px;

    font-weight: 900;

    cursor: pointer;

    font-size: 14px;
}


/* =========================================
   CONFETTI
========================================= */

#confetti {

    position: absolute;

    inset: 0;

    overflow: hidden;

    pointer-events: none;
}

.confetti-piece {

    position: absolute;

    top: -20px;

    width: 8px;

    height: 15px;

    animation: fall 3s linear forwards;
}

@keyframes fall {

    to {
        transform:
            translateY(700px)
            rotate(720deg);
    }
}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 600px) {

    body {
        padding: 8px;
    }

    .app {
        border-radius: 20px;
    }

    .page {
        min-height: 700px;

        padding: 22px 18px;
    }

    .answer-buttons {
        gap: 12px;
    }

    .answer-btn {
        width: 120px;

        height: 70px;

        font-size: 32px;
    }

    .slider-card {
        flex-direction: column;

        gap: 15px;

        padding: 18px;
    }

    .system-card {
        width: 100%;

        max-width: 250px;
    }

    .slider-wrapper {
        height: 220px;
    }

    #careSlider {
        width: 220px;
    }

    .question-card h2 {
        font-size: 32px;
    }

    .error-card h1 {
        font-size: 38px;
    }

    .final-question-card h1 {
        font-size: 29px;
    }

    .iq {
        font-size: 75px;
    }
}




.answer-btn {
    width: 150px;
    height: 80px;
    border: none;
    border-radius: 17px;
    color: white;
    font-size: 38px;
    font-weight: 900;
    cursor: pointer;

    background: linear-gradient(
        135deg,
        #ff4c9b,
        #a94cff
    );

    box-shadow:
        0 8px 18px rgba(181, 62, 220, 0.25);

    transition: 0.2s ease;
}



.dog-answer {
    width: 150px;
    height: 65px;

    border: none;
    border-radius: 18px;

    color: white;

    font-family: "Trebuchet MS", Arial, sans-serif;
    font-size: 20px;
    font-weight: 900;

    cursor: pointer;

    box-shadow: 0 8px 20px rgba(100, 70, 180, 0.25);

    transition: 0.2s ease;
}

.nothing-btn {
    background: linear-gradient(
        135deg,
        #ff45a0,
        #b44cff
    );
}

.dog-only {
    background: linear-gradient(
        135deg,
        #20a9ed,
        #5265f5
    );
}

.dog-answer:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 25px rgba(100, 70, 180, 0.3);
}

.dog-answer:active {
    transform: scale(0.97);
}
/* ===== PAGE 8 LOVE BUTTONS ===== */

.love-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 25px;
    margin-top: 35px;
    min-height: 100px;
}

/* YES ❤️ */

.love-yes {
    min-width: 170px;
    height: 65px;

    border: none;
    border-radius: 20px;

    background: linear-gradient(
        135deg,
        #ff4f9a,
        #ff2f70
    );

    color: white;

    font-family: "Trebuchet MS", Arial, sans-serif;
    font-size: 23px;
    font-weight: 900;

    cursor: pointer;

    box-shadow:
        0 8px 20px rgba(255, 47, 112, 0.30);

    transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
}

.love-yes:hover {
    transform: translateY(-4px);

    box-shadow:
        0 13px 28px rgba(255, 47, 112, 0.40);
}

/* NO 😌 */

.love-no {
    min-width: 120px;
    height: 55px;

    border: 2px solid #d9d1eb;
    border-radius: 17px;

    background: white;

    color: #625a78;

    font-family: "Trebuchet MS", Arial, sans-serif;
    font-size: 17px;
    font-weight: 800;

    cursor: pointer;

    box-shadow:
        0 5px 15px rgba(90, 70, 150, 0.10);

    transition:
        background 0.2s ease,
        transform 0.2s ease;
}

.love-no:hover {
    background: #faf7ff;

    transform: translateY(-2px);
}
#page6 .dog-answer {
    width: 180px;
    height: 70px;
    font-size: 22px;
    border-radius: 18px;
    font-weight: 900;
}
@media (max-width: 600px) {

    .iq {
        font-size: 58px;
        white-space: nowrap;
        letter-spacing: -2px;
    }

}
.dog-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
}

@media (max-width: 600px) {

    .dog-buttons {
        gap: 18px;
        margin-top: 30px;
    }

    .dog-answer {
        width: 150px;
        height: 65px;
        font-size: 18px;
    }

}
.dog-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
}

@media (max-width: 600px) {

    .dog-buttons {
        gap: 18px;
        margin-top: 30px;
    }

    .dog-answer {
        width: 150px;
        height: 65px;
        font-size: 18px;
    }

}
