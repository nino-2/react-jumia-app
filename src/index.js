const countDownDate = new Date("2026-07-02T10:24:09").getTime();
const x = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const countdownElements = document.querySelectorAll("#demo");

  if (!countdownElements.length) return;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const output =
    days + "d : " + hours + "h : " + minutes + "m : " + seconds + "s ";

  countdownElements.forEach((element) => {
    element.innerHTML = output;
  });

  if (distance < 0) {
    clearInterval(x);
    countdownElements.forEach((element) => {
      element.innerHTML = "EXPIRED";
    });
  }
}, 1000);
