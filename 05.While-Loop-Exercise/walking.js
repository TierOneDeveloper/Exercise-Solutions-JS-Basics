function walking(input) {
    let index = 0;
    let command = input[index];
    index++;
    
    let stepsSum = 0;
    let stepstTarget = 10000;

    while (command !== "Going home") {
        let steps = Number(command);
        stepsSum += steps;

        if (stepsSum >= stepstTarget) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - stepstTarget} steps over the goal!`);
            break;
        }
        command = input[index];
        index++;
    }

    if (command === "Going home") {
        stepsSum += Number(input[index]);
        if(stepsSum >= stepstTarget) {
            console.log("Goal reached! Good job!");
            console.log(`${stepsSum - stepstTarget} steps over the goal!`);
        } else {
            console.log(`${stepstTarget - stepsSum} more steps to reach goal.`);
        }
    }
}

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])





