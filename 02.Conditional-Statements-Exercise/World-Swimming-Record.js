function worldSwimmingRecord(input)
{
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let time = distanceInMeters * secondsPerMeter;
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let fullTime = time + delay;
    
    if (fullTime < recordInSeconds) {
        console.log(`Yes, he succeeded! The new world record is ${fullTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(fullTime - recordInSeconds).toFixed(2)} seconds slower.`)
    }
}

worldSwimmingRecord(["55555.67","3017","5.03"])