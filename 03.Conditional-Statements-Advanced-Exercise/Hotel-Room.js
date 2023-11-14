function hotelRoom(input)
{
    let month = input[0];
    let numberOfNights = Number(input[1]);
    let studioPrice = 0
    let apartmentPrice = 0;
    if (month === "May" || month === "October") {
        studioPrice = numberOfNights * 50;
        apartmentPrice = numberOfNights * 65;
        if (numberOfNights > 7 && numberOfNights < 14) {
            studioPrice = studioPrice - (studioPrice * 0.05);
        } else if (numberOfNights > 14 ) {
            studioPrice = studioPrice - (studioPrice * 0.30);
            apartmentPrice = apartmentPrice - (apartmentPrice * 0.10);
        }
    } else if (month === "June" || month === "September") {
        studioPrice = numberOfNights * 75.20;
        apartmentPrice = numberOfNights * 68.70;
        if ( numberOfNights > 14) {
            studioPrice = studioPrice - (studioPrice * 0.20);
            apartmentPrice = apartmentPrice - (apartmentPrice * 0.10); 
        }
    } else if (month === "July" || month === "August") {
        studioPrice = numberOfNights * 76;
        apartmentPrice = numberOfNights * 77;
        if ( numberOfNights > 14) {
        apartmentPrice = apartmentPrice - (apartmentPrice * 0.10); 
        }
    }
    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}

hotelRoom(["May","15"])