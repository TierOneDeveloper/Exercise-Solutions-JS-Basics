function foodDelivery(input)
{
    let chickenMenus = Number(input[0]);
    let fishMenus = Number(input[1]);
    let vegetarianMenus = Number(input[2]);
    
    let chickenPrice = 10.35;
    let fishPrice = 12.40;
    let vegetarianPrice = 8.15;
    let delivery = 2.50;

    let dessert = Number(((chickenMenus * chickenPrice) + (fishMenus * fishPrice) + (vegetarianMenus * vegetarianPrice)) * 20 * (1/100));
    let finalPrice = Number(dessert + delivery + ((chickenMenus * chickenPrice) + (fishMenus * fishPrice) + (vegetarianMenus * vegetarianPrice)));
    console.log(finalPrice);
}

foodDelivery([" 2 "," 4 "," 3 "]);