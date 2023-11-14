function equalSumsEvenOddPosition(input) {
    //let index = 0;
    let firstNumber = input[0];
    //index++;
    let secondNumber = input[1];
    //index++;

    //let evenSum = 0;
    //let oddSum = 0;
    let printLine = "";

    for (let i = Number(firstNumber); i <= Number(secondNumber); i++) {
        let currentNumber = "" + i;
        let evenSum = 0;
        let oddSum = 0;
        for (let j = 0; j <= currentNumber.length; j++) {
            let currentDigit = Number(currentNumber.charAt(j));

            if (j % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (evenSum === oddSum) {
            printLine += " " + `${i}`;
        }
    }
    console.log(printLine);
}

equalSumsEvenOddPosition(["123456", "124000"])