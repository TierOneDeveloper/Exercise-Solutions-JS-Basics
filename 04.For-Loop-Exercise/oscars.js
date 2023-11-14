function oscars(input) {
    let actorName = input[0];
    let startingScores = Number(input[1]);
    let judges = Number(input[2]);


    for (let index = 3; index < input.length; index++) {
        let currentJudge = input[index];
        index++;
        let judgeScores = Number(input[index]);

        startingScores = startingScores + ((currentJudge.length * judgeScores) / 2);

        if (startingScores > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${startingScores.toFixed(1)}!`);
            break;
        }
    }

    if (startingScores <= 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingScores).toFixed(1)} more!`);
    }
}


oscars(["Sandra Bullock",
    "340",
    "5",
    "Robert De Niro",
    "50",
    "Julia Roberts",
    "40.5",
    "Daniel Day-Lewis",
    "39.4",
    "Nicolas Cage",
    "29.9",
    "Stoyanka Mutafova",
    "33"])

