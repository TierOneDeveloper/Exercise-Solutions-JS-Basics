function yardGreening(input)
{
    let priceForSquareMeter = 7.61 ;
    let discount = 18*(1/100);
    let area = Number(input[0]);
    let beforeDiscountPrice = (area * priceForSquareMeter);
    let afterDiscountPrice = Number(discount * beforeDiscountPrice);
    let finalPrice = Number(beforeDiscountPrice - afterDiscountPrice);
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${afterDiscountPrice} lv.`);
    //console.log(discount);
    //console.log(beforeDiscountPrice);
}

yardGreening(["550"]);