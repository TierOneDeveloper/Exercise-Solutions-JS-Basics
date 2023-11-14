function repainting(input)
{
    //let floorProtectorPrice = 1.50;
    //let paintPrice = 14.50;
    //let paintThinnerPrice = 5;
    //let bags = 0.40;
    let floorProtector = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let hours = Number(input[3]);

    let sumMaterialsPrice = (((paint + (paint * 10 * (1/100))) * 14.50) + ((floorProtector + 2) * 1.50) + (paintThinner * 5) + 0.40);
    let workPerHour = Number(sumMaterialsPrice * (30 * (1/100)));
    let fullPrice = Number(sumMaterialsPrice + (hours * workPerHour));
    
    console.log(fullPrice);

}

repainting(["10","11","4","8"])
