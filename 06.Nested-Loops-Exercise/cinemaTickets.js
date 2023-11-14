function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    let filmName = input[index];

    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (command !== "Finish") {
        filmName = input[index];
        index++;
        let freePlaces = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        while (ticketType !== "End") {
            if (ticketType === "student") {
                totalTickets++;
                studentTickets++;
                ticketType = input[index];
                if (totalTickets >= freePlaces) {
                    break;
                }
                index++;
            }
            else if (ticketType === "standard") {
                totalTickets++;
                standardTickets++;
                ticketType = input[index];
                if (totalTickets >= freePlaces) {
                    break;
                }
                index++;
            }
            else if (ticketType === "kid") {
                totalTickets++;
                kidTickets++;
                ticketType = input[index];
                if (totalTickets >= freePlaces) {
                    break;
                }
                index++;
            }
        }
        let hallFullnesPercentage = totalTickets / freePlaces * 100;
        console.log(`${filmName} - ${hallFullnesPercentage.toFixed(2)}% full.`)
        totalTickets = 0;
        command = input[index];
    }
    let finalTicketsNumber = studentTickets + standardTickets + kidTickets;
    console.log(`Total tickets: ${studentTickets + standardTickets + kidTickets}`);
    console.log(`${(studentTickets / finalTicketsNumber * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / finalTicketsNumber * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / finalTicketsNumber * 100).toFixed(2)}% kids tickets.`);
}

cinemaTickets(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])
