function oscarsCeremony(input) {
    let hallRentPrice = Number(input[0]);
    let statuettesPrice = 0;
    let cateringPrice = 0;
    let voiceoverPrice = 0;
    let totalSum = 0;


    statuettesPrice = hallRentPrice - (hallRentPrice * (30 * 1 / 100));
    cateringPrice = statuettesPrice - (statuettesPrice * (15 * 1 / 100));
    voiceoverPrice = cateringPrice * (1 / 2);

    totalSum = hallRentPrice + statuettesPrice + cateringPrice + voiceoverPrice;
    console.log(totalSum.toFixed(2));
}

oscarsCeremony(["5555"])