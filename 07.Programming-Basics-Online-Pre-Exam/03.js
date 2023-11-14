function santasHoliday(input) {
    let stayDays = Number(input[0]);
    let roomType = input[1];
    let rating = input[2];

    let stayNights = stayDays - 1;

    let onePersonPrice = stayNights * 18.00;
    let apartmentPrice = stayNights * 25.00;
    let presidentPrice = stayNights * 35.00;
    let lastPrice = 0;
    
    switch (roomType) {
        case "room for one person":
            lastPrice = onePersonPrice;
            break;
        case "apartment":
            if (stayDays < 10) {
                lastPrice = apartmentPrice - (apartmentPrice * 0.30);
            } else if (stayDays >= 10 && stayDays <= 15) {
                lastPrice = apartmentPrice - (apartmentPrice * 0.35);
            } else if (stayDays > 15) {
                lastPrice = apartmentPrice - (apartmentPrice * 0.50);
            }
            break;
        case "president apartment":
            if (stayDays < 10) {
                lastPrice = presidentPrice - (presidentPrice * 0.10);
            } else if (stayDays >= 10 && stayDays <= 15) {
                lastPrice = presidentPrice - (presidentPrice * 0.15);
            } else if (stayDays > 15) {
                lastPrice = presidentPrice - (presidentPrice * 0.20);
            }
            break;
    }

    if (rating === "positive") {
        lastPrice = lastPrice + (lastPrice * 0.25);
    } else if (rating === "negative") {
        lastPrice = lastPrice - (lastPrice * 0.10);
    }
    console.log(lastPrice.toFixed(2));
}

santasHoliday(["14",
"apartment",
"positive"])
