let timer;
let isRunning = false;
let elapsedTime = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    document.getElementById('display').textContent = formatTime(0);
}

function updateTime() {
    elapsedTime++;
    document.getElementById('display').textContent = formatTime(elapsedTime);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}
