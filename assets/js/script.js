let countDownDate = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;

let timerInterval = setInterval(function () {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("hari").textContent = days < 10 ? "0" + days : days;
    document.getElementById("jam").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("menit").textContent = minutes < 10 ? "0" + minutes : minutes;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById("hari").textContent = "00";
        document.getElementById("jam").textContent = "00";
        document.getElementById("menit").textContent = "00";
    }
}, 1000);