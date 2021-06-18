export default class CountdownTimer {
  selector;
  targetDate;
  daysRef;
  hoursRef;
  minutesRef;
  secondsRef;
  countdown;

  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
    this.daysRef = document.querySelector(`${selector} [data-value="days"]`);
    this.hoursRef = document.querySelector(`${selector} [data-value="hours"]`);
    this.minutesRef = document.querySelector(`${selector} [data-value="mins"]`);
    this.secondsRef = document.querySelector(`${selector} [data-value="secs"]`);
    this.countdown = 0;
  }

  getCountdownTime() {
    const currentTime = Date.now();
    const timeDiff = this.targetDate - currentTime;
    if (timeDiff <= 0) {
      return 0;
    }
    return timeDiff;
  }

  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return { days, hours, mins, secs };
  }

  startCountdown() {
    this.countdown = setInterval(() => {
      const countdownTime = this.getCountdownTime();
      const timerInterfase = this.getTimeComponents(countdownTime);
      this.renderTime(timerInterfase);
      if (countdownTime === 0) this.stopCountdown();
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.countdown);
  }

  renderTime(data) {
    this.daysRef.textContent = String(data.days).padStart(2, "0");
    this.hoursRef.textContent = String(data.hours).padStart(2, "0");
    this.minutesRef.textContent = String(data.mins).padStart(2, "0");
    this.secondsRef.textContent = String(data.secs).padStart(2, "0");
  }
}
