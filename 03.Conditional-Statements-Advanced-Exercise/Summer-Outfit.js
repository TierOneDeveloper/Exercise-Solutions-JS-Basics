function summerOutfit(input) {
    let degrees = Number(input[0]);
    let dayPeriod = input[1];
    let outfit = ["Sweatshirt", "Shirt", "T-Shirt", "Swim Suit"];
    let shoes = ["Sneakers", "Moccasins", "Sandals", "Barefoot"];

    switch (dayPeriod) {
        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your ${outfit[0]} and ${shoes[0]}.`);
            } else if (degrees > 18 && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your ${outfit[1]} and ${shoes[1]}.`);
            } else if (degrees >= 25) {
                console.log(`It's ${degrees} degrees, get your ${outfit[2]} and ${shoes[2]}.`);
            }
            break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your ${outfit[1]} and ${shoes[1]}.`);
            } else if (degrees > 18 && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your ${outfit[2]} and ${shoes[2]}.`);
            } else if (degrees >= 25) {
                console.log(`It's ${degrees} degrees, get your ${outfit[3]} and ${shoes[3]}.`);
            }
            break;
        case "Evening":
            if (degrees >= 10 && degrees <= 18) {
                console.log(`It's ${degrees} degrees, get your ${outfit[1]} and ${shoes[1]}.`);
            } else if (degrees > 18 && degrees <= 24) {
                console.log(`It's ${degrees} degrees, get your ${outfit[1]} and ${shoes[1]}.`);
            } else if (degrees >= 25) {
                console.log(`It's ${degrees} degrees, get your ${outfit[1]} and ${shoes[1]}.`);
            }
            break;
    }
}
summerOutfit(["16", "Morning"])