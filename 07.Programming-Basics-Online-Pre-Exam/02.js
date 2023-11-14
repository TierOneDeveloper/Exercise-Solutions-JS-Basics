function maidenParty(input) {

    let maidenPartyPrice = Number(input[0]);
    let loveMessageNumber = Number(input[1]);
    let waxRosesNumber = Number(input[2]);
    let keyChainsNumber = Number(input[3]);
    let caricatureNUmber = Number(input[4]);
    let luckSurpriseNumber = Number(input[5]);

    let itemNumber = loveMessageNumber + waxRosesNumber + keyChainsNumber + caricatureNUmber + luckSurpriseNumber;

    let itemsPrice = loveMessageNumber * 0.60 + waxRosesNumber * 7.20 + keyChainsNumber * 3.60 + caricatureNUmber * 18.20 + luckSurpriseNumber * 22;
    let discount = 0;
    if (itemNumber > 25) {
        discount = itemsPrice - (itemsPrice * 0.65);
    }
    let priceAfterDiscount = itemsPrice - discount;
    let pricePerHosting = priceAfterDiscount - (priceAfterDiscount * 0.9);
    let priceAfterHosting = priceAfterDiscount - pricePerHosting;
    if (priceAfterHosting > maidenPartyPrice) {
        console.log(`Yes! ${(priceAfterHosting - maidenPartyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyPrice - priceAfterHosting).toFixed(2)} lv needed.`);
    }


}

maidenParty(["320",
"8",
"2",
"5",
"5",
"1"])


