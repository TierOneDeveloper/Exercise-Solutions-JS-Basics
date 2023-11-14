function sumOfTwoNumbers(input) {
    let index = 0;
    let a = Number(input[index]);
    index++;
    let b = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;
    let combinationsCounter = 0;
    let combinationsCounterEqual = 0;
    let isFirst = false;

    for (let x = a; x <= b; x++) {
        for (let y = a; y <= b; y++) {
            combinationsCounter++;
            if (x + y === n) {
                combinationsCounterEqual++;
                console.log(`Combination N:${combinationsCounter} (${x} + ${y} = ${n})`);
                isFirst = true;
                break;
            }
        }
        if (isFirst) {
            break;
        }
    }
    if (combinationsCounterEqual === 0) {
        console.log(`${combinationsCounter} combinations - neither equals ${n}`);
    }
}

sumOfTwoNumbers(["1",
    "10",
    "5"])