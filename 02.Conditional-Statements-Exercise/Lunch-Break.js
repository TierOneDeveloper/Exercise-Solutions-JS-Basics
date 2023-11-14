function lunchBreak(input)
{
    let name = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1/8;
    let restTime = breakTime *  1/4;
    let freeTime = breakTime - (lunchTime + restTime);

    if (freeTime >= episodeTime) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(freeTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(episodeTime - freeTime)} more minutes.`);
    }
}

lunchBreak(["Teen Wolf","48","60"])

