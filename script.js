let seconds = 0;
let minutes = 0;
let hours = 0;
let timer = null;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = h + ":" + m + ":" + s;
}

function stopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  updateDisplay();
}

// Start Button
document.getElementById("startBtn").addEventListener("click", function () {
  if (timer === null) {
    timer = setInterval(stopwatch, 1000);
  }
});

// Pause Button
document.getElementById("pauseBtn").addEventListener("click", function () {
  clearInterval(timer);
  timer = null;
});

// Reset Button
document.getElementById("resetBtn").addEventListener("click", function () {
  clearInterval(timer);
  timer = null;

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateDisplay();
  laps.innerHTML = "";
});

// Lap Button
document.getElementById("lapBtn").addEventListener("click", function () {

  if (display.innerText === "00:00:00") {
    return;
  }

  const li = document.createElement("li");
  li.innerText = "Lap " + (laps.children.length + 1) + " : " + display.innerText;
  laps.appendChild(li);

});

// Initial Display
updateDisplay();