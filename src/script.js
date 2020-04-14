'use strict';
//9 task
const div = document.getElementById('row'),
    divAllTimer = document.getElementById('row1'),
    p = document.createElement("p"),
    pp = document.createElement("p");

let
    options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    };
function timer1() {
    setInterval(function () {
        let sr = '';
        let now = new Date();
        let dates = now.toLocaleString("ru", options);
        let  arr = dates.split("г.,");
        let arrTime = arr[1].split(":");
        sr = `Сегодня ${arr[0]} года, ${addHour(arrTime[0])} ${arrTime[1]} минут ${arrTime[2]} секунды`;
        p.innerHTML = sr;
        div.append(p);
    },1000)
}

function addHour(hh) {
    let hour = Number(hh);
    let res;
    switch (hour) {
        case (1 , 21):
            res = `${hour} час`;
            break;
        case (2, 3, 4, 22, 23):
            res = `${hour} часа`;
            break;
        default:
            res = `${hour} часов`;
            break;
    }
    return res;
}

function addNull(numb) {
    if (numb < 10) {
        numb = "0" + numb.toString();
    }
    return numb;
}

// timer
function timer() {
    setInterval(function () {
        let str = '';
        let now = new Date(),
            year = now.getFullYear(),
            month = now.getMonth() + 1,
            days = now.getDate(),
            hour = now.getHours(),
            minute = now.getMinutes(),
            second = now.getSeconds();

        str = `${addNull(days)}.${addNull(month)}.${year} - ${addNull(hour)}:${addNull(minute)}:${addNull(second)}`;
        pp.innerHTML = str;
        divAllTimer.append(pp);
    },1000)
}
timer ();

timer1();
