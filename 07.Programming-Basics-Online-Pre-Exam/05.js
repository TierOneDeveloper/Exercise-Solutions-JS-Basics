function excursionSale(input) {
    let winMoney = 0;
    let index = 0;
    let seaTripsNumber = Number(input[index]);
    index++;
    let mountainTripsNumber = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    while (command !== "Stop") {
        if (command === "sea") {
            if (seaTripsNumber === 0) {
                command = input[index];
                index++;
                continue;

            }
            winMoney += 680;
            seaTripsNumber--;
            if (seaTripsNumber === 0 && mountainTripsNumber === 0) {
                console.log("Good job! Everything is sold.")
                console.log(`Profit: ${winMoney} leva.`)
                break;
            }
            command = input[index];
            index++;
        } else if (command === "mountain") {
            if (mountainTripsNumber === 0) {
                command = input[index];
                index++;
                continue;

            }
            winMoney += 499;
            mountainTripsNumber--;
            if (seaTripsNumber === 0 && mountainTripsNumber === 0) {
                console.log("Good job! Everything is sold.")
                console.log(`Profit: ${winMoney} leva.`)
                break;
            }
            command = input[index];
            index++;
        }
    }
    if (command === "Stop") {
        console.log(`Profit: ${winMoney} leva.`);
    }

}

excursionSale(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"])

