function maxNumber(input) {
    let index = 0;
    let number = input[index];
    let nextNumber = input[index + 1];

    let biggestNumber = Number(input[index]);;

    while (true) {
        let currentNumber = input[index];
        index++;
        if (currentNumber === "Stop") {
            console.log(biggestNumber);
            break;
        }

        if (currentNumber !== "Stop") {
            if (biggestNumber >= Number(currentNumber)) {
                biggestNumber = biggestNumber;
            } else if (biggestNumber < Number(currentNumber)) {
                biggestNumber = Number(currentNumber);
            }
        }
    }
}

maxNumber(["45",
    "-20",
    "7",
    "99",
    "Stop"])


