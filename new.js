setInterval(() => {
     // get time indicator elements
     let hours = document.getElementById('hours');
     let minutes = document.getElementById('minutes');
     let secondes = document.getElementById('seconds');
     let ampm = document.getElementById('ampm');

     // digits time indicator
     let hh = document.getElementById('hh');
     let mm = document.getElementById('mm');
     let ss = document.getElementById('ss');


     // dot time indicator
     let dotH = document.querySelector('.h_dot');
     let dotM = document.querySelector('.m_dot');
     let dotS = document.querySelector('.s_dot');

     // get current time
     let h = new Date().getHours();
     let m = new Date().getMinutes();
     let s = new Date().getSeconds();
     let ap = h >= 12 ? 'PM' : 'AM';

     // convert to 12 hour format
     if (h > 12) {
          h = h - 12;
     }

     // add 0 before single digit
     h = h < 10 ? '0' + h : h;
     m = m < 10 ? '0' + m : m;
     s = s < 10 ? '0' + s : s;

     // set time and label
     hours.innerHTML = h + 'Hours';
     minutes.innerHTML = m + 'Minutes';
     secondes.innerHTML = s + 'Seconds';
     ampm.innerHTML = ap;

     // set time circular indicator
     hh.style.strokeDashoffset = 440 - (440 * h) / 12;
     mm.style.strokeDashoffset = 440 - (440 * m) / 60;
     ss.style.strokeDashoffset = 440 - (440 * s) / 60;

     // set dot time position indicator
     dotH.style.transform = `rotate(${h * 30}deg)`;
     dotM.style.transform = `rotate(${m * 6}deg)`;
     dotS.style.transform = `rotate(${s * 6}deg)`;
}, 1000);



//stopp watch 
// ================= STOPWATCH WITH MILLISECONDS =================

let swH = 0;
let swM = 0;
let swS = 0;
let swMS = 0;
let stopwatchInterval = null;

function updateStopwatch() {
     swMS += 10;

     if (swMS === 1000) {
          swMS = 0;
          swS++;
     }

     if (swS === 60) {
          swS = 0;
          swM++;
     }

     if (swM === 60) {
          swM = 0;
          swH++;
     }

     let h = swH < 10 ? "0" + swH : swH;
     let m = swM < 10 ? "0" + swM : swM;
     let s = swS < 10 ? "0" + swS : swS;
     let ms = swMS.toString().padStart(3, "0");

     document.getElementById("sw-time").innerHTML =
          `${h} : ${m} : ${s} <span id="ms">${ms}</span>`;
}

function startStopwatch() {
     if (stopwatchInterval !== null) return;
     stopwatchInterval = setInterval(updateStopwatch, 10);
}

function stopStopwatch() {
     clearInterval(stopwatchInterval);
     stopwatchInterval = null;
}

function resetStopwatch() {
     stopStopwatch();
     swH = swM = swS = swMS = 0;
     document.getElementById("sw-time").innerHTML =
          `00 : 00 : 00 <span id="ms">000</span>`;
}

