let centiSecs = document.querySelector('.centisecs');
let secs = document.querySelector('.secs');
let mins = document.querySelector('.mins');
let hours = document.querySelector('.hours');
let startStopButton = document.querySelector('.toggle');
let resetButton = document.querySelector('.reset')
let centiSecsTimer;

class StopWatch {
  constructor() {
    this.bindEvents();
  }

  bindEvents() {
    startStopButton.addEventListener('click', this.handleStartStop.bind(this));
    resetButton.addEventListener('click', this.handleReset.bind(this));
  }

  runTimer() {
    centiSecs.textContent = Number(centiSecs.textContent) + 1;

    if (Number(centiSecs.textContent) === 100) {
      secs.textContent = Number(secs.textContent) + 1
      centiSecs.textContent = 0;
    }

    if (Number(secs.textContent) === 60) {
      mins.textContent = Number(mins.textContent) + 1
      secs.textContent = 0;
    }

    if (Number(mins.textContent) === 60) {
      hours.textContent = Number(hours.textContent) + 1;
      mins.textContent = 0;
    }

    this.displayTime();
  }

  handleStartStop(e) {
    e.preventDefault()

    if (startStopButton.textContent === 'Start') {
      startStopButton.textContent = 'Stop';
      centiSecsTimer = setInterval(this.runTimer.bind(this), 10);
    } else {
      clearInterval(centiSecsTimer);
      startStopButton.textContent = 'Start';
    }
  }

  handleReset() {
    centiSecs.textContent = 0;
    secs.textContent = 0;
    mins.textContent = 0;
    hours.textContent = 0;

    this.displayTime();
  }

  displayTime() {
    if (centiSecs.textContent.length === 1) {
      centiSecs.textContent = '0' + centiSecs.textContent;
    } else {
      centiSecs.textContent;
    }

    if (secs.textContent.length === 1) {
      secs.textContent = '0' + secs.textContent;
    } else {
      secs.textContent;
    }

    if (mins.textContent.length === 1) {
      mins.textContent = '0' + mins.textContent;
    } else {
      mins.textContent;
    }

    if (hours.textContent.length === 1) {
      hours.textContent = '0' + hours.textContent;
    } else {
      hours.textContent;
    }
  }
}

new StopWatch();