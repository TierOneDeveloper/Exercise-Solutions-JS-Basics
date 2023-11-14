function fishTank(input)
{
    let a = Number(input[0]);
    let b = Number(input[1]);
    let h = Number(input[2]);
    let filledCapacityInPercent = Number(input[3]);

    let fullCapacity = Number(a * b * h);
    let filledCapacity = Number(fullCapacity - (fullCapacity * filledCapacityInPercent * (1/100)));
    let liters = Number(filledCapacity / 1000);
    
    console.log(liters);

}

fishTank(["85","75","47","17"]);
