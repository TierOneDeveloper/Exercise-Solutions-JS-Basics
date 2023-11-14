function cinema(input) {
    let type = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);
    let totalPrice = 0;

    switch (type) {
        case "Premiere":
            totalPrice = row * column * 12.00;
            console.log(`${totalPrice.toFixed(2)} leva`);
            break;
        case "Normal":
            totalPrice = row * column * 7.50;
            console.log(`${totalPrice.toFixed(2)} leva`);
            break;
        case "Discount":
            totalPrice = row * column * 5.00;
            console.log(`${totalPrice.toFixed(2)} leva`);
            break;
    }
}
cinema(["Discount", "12", "30"])

