const clock = document.querySelector("#clock");
const status = document.querySelector(".clock-status");
const carendar = document.querySelector(".carendar");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const years = String(date.getFullYear());
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDate()).padStart(2, "0");

  if (hours > 12) {
    status.innerText = "PM";
  } else {
    status.innerText = "AM";
  }

  clock.innerText = `${hours}:${minutes}:${seconds}`;
  carendar.innerText = `${years}년 ${months}월 ${days}일`;
}

getClock();
setInterval(getClock, 1000);
