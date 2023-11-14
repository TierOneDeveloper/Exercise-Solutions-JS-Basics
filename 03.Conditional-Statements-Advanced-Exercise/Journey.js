function journey(input)
{
    let budget = Number(input[0]);
    let season = input[1];
    let destination = ["Bulgaria","Balkans","Europe"];
    let holidayType = ["Camp","Hotel"];
    let holidayPrice = 0;

    if (budget <= 100) {
        if (season ===  "summer") {
            holidayPrice = budget * 0.30;
            console.log(`Somewhere in ${destination[0]}`);
            console.log(`${holidayType[0]} - ${holidayPrice.toFixed(2)}`);
        } else if (season === "winter") {
            holidayPrice = budget * 0.70;
            console.log(`Somewhere in ${destination[0]}`);
            console.log(`${holidayType[1]} - ${holidayPrice.toFixed(2)}`);
        }

    } else if (budget > 100 && budget <= 1000) {
        if (season ===  "summer") {
            holidayPrice = budget * 0.40;
            console.log(`Somewhere in ${destination[1]}`);
            console.log(`${holidayType[0]} - ${holidayPrice.toFixed(2)}`);
        } else if (season === "winter") {
            holidayPrice = budget * 0.80;
            console.log(`Somewhere in ${destination[1]}`);
            console.log(`${holidayType[1]} - ${holidayPrice.toFixed(2)}`);
        }

    } else if ( budget > 1000) {
        if (season ===  "summer") {
            holidayPrice = budget * 0.90;
            console.log(`Somewhere in ${destination[2]}`);
            console.log(`${holidayType[1]} - ${holidayPrice.toFixed(2)}`);
        } else if (season === "winter") {
            holidayPrice = budget * 0.90;
            console.log(`Somewhere in ${destination[2]}`);
            console.log(`${holidayType[1]} - ${holidayPrice.toFixed(2)}`);
        }

    }
}
journey(["1500", "summer"])
