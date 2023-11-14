function oscarsWeekInCinema(input) {
    let filmName = input[0];
    let hallType = input[1];
    let ticketsNumber = Number(input[2]);

    let filmIncome = 0;

    //7.35 лв.	9.45 лв.	12.75 лв.
    //8.15 лв.	10.25 лв.	13.25 лв.
    //8.75 лв.	11.55 лв.	13.95 лв.

    switch (filmName) {
        case "A Star Is Born":
            switch (hallType) {
                case "normal": filmIncome += ticketsNumber * 7.50;
                    break;
                case "luxury": filmIncome += ticketsNumber * 10.50;
                    break;
                case "ultra luxury": filmIncome += ticketsNumber * 13.50;
                    break;

            }
            break;
        case "Bohemian Rhapsody":
            switch (hallType) {
                case "normal": filmIncome += ticketsNumber * 7.35;
                    break;
                case "luxury": filmIncome += ticketsNumber * 9.45;
                    break;
                case "ultra luxury": filmIncome += ticketsNumber * 12.75;
                    break;
            }
            break;
        case "Green Book":
            switch (hallType) {
                case "normal": filmIncome += ticketsNumber * 8.15;
                    break;
                case "luxury": filmIncome += ticketsNumber * 10.25;
                    break;
                case "ultra luxury": filmIncome += ticketsNumber * 13.25;
                    break;
            }
            break;
        case "The Favourite":
            switch (hallType) {
                case "normal": filmIncome += ticketsNumber * 8.75;
                    break;
                case "luxury": filmIncome += ticketsNumber * 11.55;
                    break;
                case "ultra luxury": filmIncome += ticketsNumber * 13.95;
                    break;
            }
            break;
    }
    console.log(`${filmName} -> ${filmIncome.toFixed(2)} lv.`);
}

oscarsWeekInCinema(["A Star Is Born",
    "luxury",
    "42"])
