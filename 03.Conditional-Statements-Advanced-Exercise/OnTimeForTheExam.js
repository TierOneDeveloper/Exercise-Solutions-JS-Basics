function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arriveHour = Number(input[2]);
    let arriveMinute = Number(input[3]);

    let examHourInMinutes = examHour * 60 + examMinute;
    let arriveHourInMinutes = arriveHour * 60 + arriveMinute;
    let diff = Math.abs(examHourInMinutes - arriveHourInMinutes);
    let h = Math.floor(diff / 60);
    let min = diff % 60;

    if (arriveHourInMinutes < examHourInMinutes && ((diff) > 30)) {
        console.log("Early");
        if (h > 0) {
            if (min < 10) {
                console.log(`${h}:0${min} hours before the start`);
            } else {
                console.log(`${h}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }
    } else if (arriveHourInMinutes <= examHourInMinutes) {
        console.log("On time");
        if (min > 0) {
            console.log(`${min} minutes before the start`);
        }
    } else {
        (arriveHourInMinutes > examHourInMinutes)
        console.log("Late");
        if (h > 0) {
            if (min < 10) {
                console.log(`${h}:0${min} hours after the start`);
            } else {
                console.log(`${h}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    }
}

onTimeForTheExam
    (["9",
        "00",
        "8",
        "30"])