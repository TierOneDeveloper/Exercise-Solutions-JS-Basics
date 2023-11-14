function trekkingMania(input) {
    let numberOfGroups = Number(input[0]);
    let numberOfPeople = 0;

    let musala = 0;
    let monblan = 0;
    let kilimandjaro = 0;
    let k2 = 0;
    let everest = 0;

    for (index = 1; index <= numberOfGroups; index++) {

        numberOfPeople += Number(input[index]);
        let currentGroup = Number(input[index]);

        if (currentGroup < 6) {
            musala += currentGroup;
        } else if (currentGroup < 13) {
            monblan += currentGroup;
        } else if (currentGroup < 26) {
            kilimandjaro += currentGroup;
        } else if (currentGroup < 41) {
            k2 += currentGroup;
        } else {
            everest += currentGroup;
        }
    }

    console.log(`${(musala / numberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / numberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandjaro / numberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / numberOfPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / numberOfPeople * 100).toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
