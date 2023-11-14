function accountBalance(input) {
    let index = 0;
    let payment = input[index];
    let totalSum = 0;

    while (true) {
        let currentPayment = input[index];
        if(currentPayment === "NoMoreMoney"){
            break;
        }
        index++;
        if (currentPayment !== "NoMoreMoney") {
            if (currentPayment < 0) {
                console.log("Invalid operation!");
                break;
            }
            console.log(`Increase: ${Number(currentPayment).toFixed(2)}`);
            totalSum = totalSum + Number(currentPayment);
        }
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["120",
"45.55",
"-150"])

