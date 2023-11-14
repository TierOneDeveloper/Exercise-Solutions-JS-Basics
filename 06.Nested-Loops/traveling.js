function traveling(input) {
    index = 0;
    let destination = input[index];
    index++;
    let minimalBudget = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    index++;
    let totalSavedMoney = 0;

    let isGoing = false;

    while (destination !== "End") {
        while (totalSavedMoney <= minimalBudget) {
            totalSavedMoney += savedMoney;
            if (totalSavedMoney >= minimalBudget) {
                console.log(`Going to ${destination}!`);
                isGoing= true;
                break;
            }
            savedMoney = Number(input[index]);
            index++;
        }
        savedMoney = 0;
        totalSavedMoney = 0;
        destination = input[index];
        index++;
        minimalBudget =Number(input[index]);
        index++;
    }
}

traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])
