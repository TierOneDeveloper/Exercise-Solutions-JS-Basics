function shopping(input)
{
    let budget = Number(input[0]);
    let GPU = Number(input[1]);
    let CPU = Number(input[2]);
    let RAM = Number(input[3]);

    let priceGPU = 250 * GPU;
    let priceCPU = (priceGPU * 0.35) * CPU;
    let priceRAM = (priceGPU * 0.10) * RAM;

    let finalPrice = priceGPU + priceCPU + priceRAM;

    if (GPU > CPU) {
        finalPrice = finalPrice - (finalPrice * 0.15);   
    }

    if ( budget >= finalPrice) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(["920.45","3","1","1"])


