function workout(input) {
    let sumEachDay = 0;
    let index = 0;
    let days = Number(input[index]);
    index++
    let firstDayKilometers = Number(input[index]);
    index++;
    let percentage = Number(input[index]);
    let currentDayKilometers = firstDayKilometers + (firstDayKilometers * (percentage * 1 / 100));
    sumEachDay = sumEachDay + currentDayKilometers + firstDayKilometers;
    index++
    for (i = 1; i < days; i++) {
        percentage = Number(input[index]);
        index++;
        currentDayKilometers = currentDayKilometers + (currentDayKilometers * (percentage * 1 / 100));
        sumEachDay += currentDayKilometers
    }
    let diff = 1000 - sumEachDay;
    let diff1 = sumEachDay - 1000;
    if (sumEachDay >= 1000) {
        console.log(`You've done a great job running ${Math.ceil(diff1)} more kilometers!`);
    } else {
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(diff)} more kilometers`);
    }
}

workout(["5",
"30",
"10",
"15",
"20",
"5",
"12"])

