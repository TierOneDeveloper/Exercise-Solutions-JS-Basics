function computerFirm(input) {
    let index = 0;
    let models = Number(input[index]);
    index++;
    let rating = 0;
    let possibleSales = 0;
    let makedSales = 0;
    let totalMakedSales = 0;
    let totalRating = 0;

    let buff = "";

    for (i = 0; i < models; i++) {
        let n = input[index];
        index++;
        for (j = 0; j < n.length; j++) {
            let currentDigit = Number(n.charAt(j));
            if (j === 0 || j === 1) {
                buff += currentDigit;
                possibleSales = Number(buff);
            }
            if (j === 2) {
                rating = currentDigit;
            }
        }
        switch (rating) {
            case 2:
                makedSales = 0;
                break;
            case 3:
                makedSales = possibleSales * (50 * 1 / 100);
                break;
            case 4:
                makedSales = possibleSales * (70 * 1 / 100);
                break;
            case 5:
                makedSales = possibleSales * (85 * 1 / 100);
                break;
            case 6:
                makedSales = possibleSales;
                break;
        }
        totalMakedSales += makedSales;
        totalRating += rating;
        buff = "";
    }
    console.log(`${totalMakedSales.toFixed(2)}`);
    console.log(`${(totalRating / models).toFixed(2)}`);

}

computerFirm(["2", "204", "206"])