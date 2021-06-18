import CountdownTimer from "./countdown-timer.js";

const timer = new CountdownTimer({
  selector: "#timer-1",
  targetDate: "2022,1,1",
});
timer.startCountdown();
// timer.stopCountdown();
