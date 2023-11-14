function cinemaVoucher(input) {
    let index = 0;
    let voucherValue = Number(input[index]);
    index++;
    let command = input[index];
    index++
    let otherProductsCounter = 0;
    let otherProductsPrice = 0;
    let ticketCounter = 0;
    let ticketPrice = 0;
    while (command !== "End") {
        if (command.length > 8) {
            ticketPrice = command.charCodeAt(0) + command.charCodeAt(1);
            if (voucherValue < ticketPrice) {
                break;
            }
            ticketCounter++;
            voucherValue = voucherValue - ticketPrice;
            command = input[index];
            index++;
        } else {
            otherProductsPrice = command.charCodeAt(0);
            if (voucherValue <= otherProductsPrice) {
                break;
            }
            otherProductsCounter++;
            voucherValue = voucherValue - otherProductsPrice;
            command = input[index];
            index++;
        }
    }
    console.log(ticketCounter);
    console.log(otherProductsCounter);
}

cinemaVoucher(["1500",
"Avengers: Endgame",
"Bohemian Rhapsody",
"Deadpool 2",
"End"])
