function godzillaAgainstKong(input) 
{
    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let clothesPricePerExtras = Number(input[2]);

    let decor = budget * 0.10;
    let clothesPrice = extras * clothesPricePerExtras;
    if (extras > 150) {
        clothesPrice = clothesPrice - (clothesPrice * 0.10);
    }
    let finalPricePerMovie = decor + clothesPrice;
    if (budget >= finalPricePerMovie) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - finalPricePerMovie).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalPricePerMovie - budget).toFixed(2)} leva more.`);
    }
}

godzillaAgainstKong(["15437.62", "186", "57.99"])
