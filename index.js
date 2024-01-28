const hourE1 = document.getElementById("hour");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
const dayE1 = document.getElementById("day");
const dateE1 = document.getElementById("date");
const monthE1 = document.getElementById("month");
const yearE1 = document.getElementById("year");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let x = new Date().getDay();
    let a = new Date().getDate();
    let mn = new Date().getMonth();
    let y = new Date().getFullYear();
    let ampm = "AM";        
    
    if (h > 12)
    {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    a = a < 10 ? "0" + a : a;
    mn = mn < 10 ?  "0" + (mn + 1) : (mn + 1);

    switch(x){
        case 0:
            d = "Sunday";
            break;
        case 1:
            d = "Monday";
            break;
        case 2:
            d = "Tuesday";
            break;
        case 3:
            d = "Wednesday";
            break;
        case 4:
            d = "Thursday";
            break;
        case 5:
            d = "Friday";
            break;
        case 6:
            d = "Saturday";
            break;
        
    }

    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innerText = s;
    ampmE1.innerText = ampm;
    dayE1.innerText = d;
    dateE1.innerText = a;
    monthE1.innerText = mn;
    yearE1.innerText = y;

    setTimeout(() => {
        updateClock()
    }, 1000)

}

updateClock();