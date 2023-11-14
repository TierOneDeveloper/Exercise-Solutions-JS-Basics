function excursion(input) {
    let numberOfPeople = Number(input[0]);
    let numberOfNights = Number(input[1]);
    let numberOfTransportCards = Number(input[2]);
    let numberOfMuseumTickets = Number(input[3]);

    let priceNights = numberOfNights * 20;
    let priceTransportCards = numberOfTransportCards * 1.60;
    let priceMuseumTickets = numberOfMuseumTickets * 6;

    let pricePerPeople = priceNights + priceTransportCards + priceMuseumTickets;
    let priceTotalGroup = pricePerPeople * numberOfPeople;

    let totalPrice = priceTotalGroup + (priceTotalGroup * (25*1/100));
    console.log(totalPrice.toFixed(2));

}

excursion(["20",
    "14",
    "30",
    "6"])
