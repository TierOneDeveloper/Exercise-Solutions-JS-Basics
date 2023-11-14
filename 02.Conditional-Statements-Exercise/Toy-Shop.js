function toyShop(input) 
{
    let tripPrice = Number(input[0]);
    let puzzles = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzlesPrice = puzzles * 2.60;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.10;
    let minionsPrice = minions * 8.20;
    let trucksPrice = trucks * 2;

    let totalPrice = puzzlesPrice + dollsPrice + bearsPrice + minionsPrice + trucksPrice;
    let numberOfToys = puzzles + dolls + bears + minions + trucks;
    let discount = 0;
    if (numberOfToys >= 50) {
        discount = totalPrice * 0.25;
    }
    let gain = totalPrice - discount - ((totalPrice - discount) * 0.10);
    if (gain >= tripPrice) {
        console.log(`Yes! ${(gain - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - gain).toFixed(2)} lv needed.`);
    }
}

toyShop(["320",
    "8",
    "2",
    "5",
    "5",
    "1"])


