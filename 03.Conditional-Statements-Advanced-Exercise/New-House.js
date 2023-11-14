function newHouse(input)
{
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let price = 0;

    switch(flowersType) 
    {
        case "Roses":
            price = flowersCount * 5;
            if (flowersCount > 80) {
                price = price - (price * 0.10);
            }
            break;
        case "Dahlias":
            price = flowersCount * 3.80;
            if (flowersCount > 90) {
                price = price - (price * 0.15);
            }
            break;
        case "Tulips":
            price = flowersCount * 2.80;
            if (flowersCount > 80) {
                price = price - (price * 0.15);
            }
            break;
        case "Narcissus":
            price = flowersCount * 3;
            if (flowersCount < 120) {
                price = price + (price * 0.15);
            }
            break;
        case "Gladiolus":
            price = flowersCount * 2.50;
            if (flowersCount < 80) {
            price = price + (price * 0.20);
        }
            break;
    }
    let different = Math.abs(budget - price);
    if ( budget >= price) {
        console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${different.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${different.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses","55","250"])
 



