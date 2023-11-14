function vacation(input) {
    index = 0;

    let tripPrice = Number(input[index]);
    index++;

    let moneyOnHand = Number(input[index]);
    index++;

    let daysCounter = 0;
    let daysConsecutive = 0;

    while (moneyOnHand >= 0) {
        daysCounter++;
        let command = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;
        if (command === "spend") {
            moneyOnHand -= currentMoney;
            if (moneyOnHand < 0) {
                moneyOnHand = 0;
            }
            daysConsecutive++;
            if (daysConsecutive === 5) {
                console.log("You can't save the money.");
                console.log(`${daysCounter}`);
                break;
            }
        }
        else if (command = "save") {
            daysConsecutive = 0;
            moneyOnHand += currentMoney;
            if (moneyOnHand >= tripPrice) {
                console.log(`You saved the money for ${daysCounter} days.`);
                break;
            }
        }
    }
}

vacation(["2000", "1000",
    "spend", "1200", "save", "2000"])


