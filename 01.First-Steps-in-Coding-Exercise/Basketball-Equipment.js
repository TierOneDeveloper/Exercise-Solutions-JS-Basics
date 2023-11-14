function basketballEquipment(input)
{
    let taxPerYear = Number(input[0]);

    let shoes = Number(taxPerYear - (taxPerYear * (40 * (1/100))));
    let outfit = Number(shoes - (shoes * (20 * (1/100))));
    let ball = Number(outfit / 4);
    let accessories = Number(ball / 5);

    let finalPrice = Number(taxPerYear + shoes + outfit + ball + accessories);
    console.log(finalPrice);
}

basketballEquipment([365]);
