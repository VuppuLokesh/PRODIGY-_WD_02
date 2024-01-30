let startTime;
let elapsedTime = 0;
let timerInterval;

function startStopwatch() {
    if (!timerInterval) {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(updateDisplay, 10);
    }
}

function pauseStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetStopwatch() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    clearLaps();
    
    // If the stopwatch is reset, set the display to '00:00:00'
    if (timerInterval === null) {
        document.getElementById('display').textContent = '00:00:00';
    }

}


// Update the display with the current time and laps

function updateDisplay() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const formattedTime = formatTime(elapsedTime);
    document.getElementById('display').textContent = formattedTime;

}


function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const minutes = date.getUTCMinutes();
    const seconds = date.getUTCSeconds();
    const millisecondsPart = Math.floor(date.getUTCMilliseconds() / 10);

    return (
        String(minutes).padStart(2, '0') +
        ':' +
        String(seconds).padStart(2, '0') +
        ':' +
        String(millisecondsPart).padStart(2, '0')
    );
}

function lap() {
    const lapTime = elapsedTime;
    const lapList = document.getElementById('laps');
    const lapItem = document.createElement('li');
    lapItem.textContent = formatTime(lapTime);
    lapList.appendChild(lapItem);
}

function clearLaps() {
    const lapList = document.getElementById('laps');
    lapList.innerHTML = '';
}
