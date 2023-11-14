function coins(input) {
    let currentChange = Math.floor(Number(input[0]) * 100);
    let twoBGN = 200;
    let oneBGN = 100;
    let fiftyCentBGN = 50;
    let twentyCentBGN = 20;
    let tenCentBGN = 10;
    let fiveCentBGN = 5;
    let twoCentBGN = 2;
    let oneCentBGN = 1;

    let coinCounter = 0;
    let currentChangeWhole = 0;

    while (currentChange !== 0) {

        if (currentChange >= twoBGN) {
            currentChangeWhole = currentChange - (currentChange % twoBGN);
            currentChange = currentChange % twoBGN;
            coinCounter = currentChangeWhole / twoBGN;
        }
        if (currentChange >= oneBGN) {
            currentChangeWhole = currentChange - (currentChange % oneBGN);
            currentChange = currentChange % oneBGN;
            coinCounter += currentChangeWhole / oneBGN;
        }
        if (currentChange >= fiftyCentBGN) {
            currentChangeWhole = currentChange - (currentChange % fiftyCentBGN);
            currentChange = currentChange % fiftyCentBGN;
            coinCounter += currentChangeWhole / fiftyCentBGN;
        }
        if (currentChange >= twentyCentBGN) {
            currentChangeWhole = currentChange - (currentChange % twentyCentBGN);
            currentChange = currentChange % twentyCentBGN;
            coinCounter += currentChangeWhole / twentyCentBGN;
        }
        if (currentChange >= tenCentBGN) {
            currentChangeWhole = currentChange - (currentChange % tenCentBGN);
            currentChange = currentChange % tenCentBGN;
            coinCounter += currentChangeWhole / tenCentBGN;
        }
        if (currentChange >= fiveCentBGN) {
            currentChangeWhole = currentChange - (currentChange % fiveCentBGN);
            currentChange = currentChange % fiveCentBGN;
            coinCounter += currentChangeWhole / fiveCentBGN;
        }
        if (currentChange >= twoCentBGN) {
            currentChangeWhole = currentChange - (currentChange % twoCentBGN);
            currentChange = currentChange % twoCentBGN;
            coinCounter += currentChangeWhole / twoCentBGN;
        }
        if (currentChange >= oneCentBGN) {
            currentChangeWhole = currentChange - (currentChange % oneCentBGN);
            currentChange = currentChange % oneCentBGN;
            coinCounter += currentChangeWhole / oneCentBGN;
        }
    }
    console.log(coinCounter);
}

coins(["2.73"])