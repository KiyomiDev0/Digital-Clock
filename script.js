let day = document.querySelector(".day")
let hours = document.querySelector(".hours")
let minutes = document.querySelector(".minutes")
let sec = document.querySelector(".seconds")
let am = document.querySelector(".am span")
let pm = document.querySelector(".pm span")

function clock() {
  let h = new Date().getHours();
  let d;
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  if (h < 12) {
    am.classList.add("active")
  } else pm.classList.add("active")

  switch (new Date().getDay()) {
    case 0:
    d="Su";
    break;
    
    case 1:
    d="Mo";
    break;

    case 2:
    d="Tu";
    break;

    case 3:
    d="We";
    break;

    case 4:
    d="Th";
    break;

    case 5:
    d="Fr";
    break;

    case 6:
    d="Sa";
  }

  day.innerHTML = d;
  
  if (h > 12) {
    h -= 12;
  }
  if (h == 0) {
    h = 12;
  }
  if (h < 10) {
    hours.innerHTML = `0${h}`;
  } else hours.innerHTML = h; 

  if (m < 10) {
    minutes.innerHTML = `0${m}`;
  } else minutes.innerHTML = m; 

  if (s < 10) {
    sec.innerHTML = `0${s}`;
  } else sec.innerHTML = s;

}

setInterval(() => {
  clock()
}, 1000);

