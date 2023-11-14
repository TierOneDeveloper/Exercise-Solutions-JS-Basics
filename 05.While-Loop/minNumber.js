function minNumber(input) {
    let index = 0;
    let smallestNumber = Number(input[index]);

    while (true) {
        let currentNumber = input[index];
        index++;
        if (currentNumber === "Stop") {
            console.log(smallestNumber);
            break;
        }

        if (currentNumber !== "Stop") {
            if (smallestNumber < Number(currentNumber)) {
                smallestNumber = smallestNumber;
            } else if (smallestNumber >= Number(currentNumber)) {
                smallestNumber = Number(currentNumber);
            }
        }
    }
}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"])
