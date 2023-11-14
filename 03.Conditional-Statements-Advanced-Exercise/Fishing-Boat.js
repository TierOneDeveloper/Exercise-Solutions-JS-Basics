function fishingBoat(input)
{
    let budget = Number(input[0]);
    let season = input[1];
    let fishermans = Number(input[2]);
    let rent = 0;

   // if (budget >= 1 && budget <=8000) {
        //if (fishermans >= 4 && fishermans <= 18) {
            if (season === "Spring") {
                rent = rent + 3000;
            } else if ( season === "Summer" || season === "Autumn") {
                rent = rent + 4200;
            } else if ( season === "Winter") {
                rent = rent + 2600;
            }

            if (fishermans <= 6) {
                rent = rent - (rent * 0.10);
            } else if ( fishermans >= 7 && fishermans <= 11) {
                rent = rent - (rent * 0.15);
            } else if ( fishermans >= 12) {
                rent = rent - (rent * 0.25);
            }
            
            if (fishermans % 2 === 0 && season !== "Autumn") {
                rent = rent - (rent * 0.05);
            }

            let diff = Math.abs(budget - rent);

            if (budget >= rent) {
                console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
            }
        }
    //}
//}

fishingBoat(["3600",
"Autumn",
"6"])

