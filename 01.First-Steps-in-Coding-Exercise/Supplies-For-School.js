function suppliesForSchool(input)
{
    //let pensPackPrice = 5.80;
   // let markersPackPrice = 7.20;
   // let cleaningLiquidPerLiter = 1.20;
    let numPensPack = Number(input[0]);
    let numMarkersPack = Number(input[1]);
    let numLiters = Number(input[2]);
    let discount = Number(input[3]);
    let sumBeforeDiscount = Number((5.80 * numPensPack) + (7.20 * numMarkersPack) + (1.20 * numLiters));
    let sumAfterDiscount = Number(sumBeforeDiscount * (discount * (1/100)));
    console.log(sumBeforeDiscount - sumAfterDiscount);
}

suppliesForSchool(["4","2","5","13"])