function cleverLily(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toyPrice = Number(input[2]);
    let moneyCounter = 0;
    let toyCounter = 0;
    let stolenMoney = 0;
    let selledToys = 0;

    for (let index = 1; index < age + 1; index++) {

        if (index % 2 === 0) {
            moneyCounter = moneyCounter + (10 * index) / 2;
        } else {
            toyCounter++;
        }
    }
    
    stolenMoney = Math.floor((age / 2) * 1);
    selledToys = toyPrice * toyCounter;
    let totalMoney = (moneyCounter + selledToys) - stolenMoney;

    //console.log(stolenMoney);
    //console.log(selledToys);
    //console.log(totalMoney);
    //console.log(moneyCounter);

    if (totalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(totalMoney - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - totalMoney).toFixed(2)}`);
    }
}

cleverLily(["21","1570.98","3"])

