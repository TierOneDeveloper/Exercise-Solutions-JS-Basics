function tennisRanklist(input) {
    let numberOfTournaments = Number (input[0]);
    let startingPoints = Number (input[1]);

    let totalPoints = 0;
    let winsCounter = 0;
    let averagePointsPerTournament = 0

    for (index = 2; index < input.length; index++) {
        let stage = input[index];
        switch (stage) {
            case "W": 
            startingPoints += 2000;
            averagePointsPerTournament +=2000;
            winsCounter++;
            break;
            
            case "F": 
            startingPoints += 1200;
            averagePointsPerTournament += 1200;
            break;
            
            case"SF": 
            startingPoints += 720;
            averagePointsPerTournament += 720;
            break;
        }
    }

    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${Math.floor(averagePointsPerTournament / numberOfTournaments)}`);
    console.log(`${(winsCounter/numberOfTournaments*100).toFixed(2)}%`);
}

tennisRanklist(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
