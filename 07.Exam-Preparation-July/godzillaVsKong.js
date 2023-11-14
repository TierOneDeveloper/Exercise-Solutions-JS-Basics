function godzillaVsKong(input) {
    let filmBudget = Number(input[0]);
    let numberOfExtras = Number(input[1]);
    let clothesPricePerExtras = Number(input[2]);

    let decor = filmBudget * (10 * 1 / 100);
    let clothesTotalPrice = clothesPricePerExtras * numberOfExtras;

    if (numberOfExtras > 150) {
        clothesTotalPrice = clothesTotalPrice - (clothesTotalPrice * (10 * 1 / 100));
    }
    let filmTotalSum = decor + clothesTotalPrice;

    if (filmBudget >= filmTotalSum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - filmTotalSum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(filmTotalSum - filmBudget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["20000",
    "120",
    "55.5"])
