function petShop(input)
{
    let dogPackPrice = 2.5;
    let catPackPrice = 4;
    let numDog = Number(input[0]);
    let numCat = Number(input[1]);
    let fullPrice = Number((dogPackPrice*numDog) + (catPackPrice*numCat));
    console.log(`${fullPrice} lv.`);
}

petShop(["13","9"])