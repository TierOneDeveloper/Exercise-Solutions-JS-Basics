function tradeCommissions(input)
{
    let town = input[0];
    let numberOfSales = Number(input[1]);

    switch (town) {

        case "Sofia":
            if (numberOfSales >= 0 && numberOfSales <= 500) {
                console.log((numberOfSales * (5*1/100 )).toFixed(2));
            }
            else if (numberOfSales >= 500 && numberOfSales <= 1000) {
                console.log((numberOfSales * (7*1/100 )).toFixed(2));
            }
            else if (numberOfSales >= 1000 && numberOfSales <= 10000) {
                console.log((numberOfSales * (8*1/100 )).toFixed(2));
            }
            else if (numberOfSales > 10000) {
                console.log((numberOfSales * (12*1/100 )).toFixed(2));
            }
            else {
                console.log("error");
            }
            break;

        case "Varna":
            if (numberOfSales >= 0 && numberOfSales <= 500) {
                console.log((numberOfSales * (4.5*1/100 )).toFixed(2));
            }
            else if (numberOfSales >= 500 && numberOfSales <= 1000) {
                console.log((numberOfSales * (7.5*1/100 )).toFixed(2));
            }
            else if (numberOfSales >= 1000 && numberOfSales <= 10000) {
                console.log((numberOfSales * (10*1/100 )).toFixed(2));
            }
            else if (numberOfSales > 10000) {
                console.log((numberOfSales * (13*1/100 )).toFixed(2));
            }
            else {
                console.log("error");
            }
            break;

        case "Plovdiv":
            if (numberOfSales >= 0 && numberOfSales <= 500) {
                console.log((numberOfSales * (5.5*1/100 )).toFixed(2));
            }
            else if (numberOfSales >= 500 && numberOfSales <= 1000) {
                console.log((numberOfSales * (8*1/100 )).toFixed(2));
            }
            else if (numberOfSales >= 1000 && numberOfSales <= 10000) {
                console.log((numberOfSales * (12*1/100 )).toFixed(2));
            }
            else if (numberOfSales > 10000) {
                console.log((numberOfSales * (14.5*1/100 )).toFixed(2));
            }
            else {
                console.log("error");
            }
            break;
        default: console.log("error");
    }
}

tradeCommissions(["Sofia","1500"])

