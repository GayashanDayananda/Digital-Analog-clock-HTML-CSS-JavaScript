// Analog clock //
let hr = document.querySelector("#hrs");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});

// Digital clock //
function updateDigitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = h >= 12 ? "PM" : "AM";

  // Convert 24Hrs Clock to 12Hrs Clock
  if (h > 12) {
    h = h - 12;
  }

  // Add Zero Before Single Digit Number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}

setInterval(updateDigitalClock, 1000);
updateDigitalClock(); // Initial call to set the time immediately
