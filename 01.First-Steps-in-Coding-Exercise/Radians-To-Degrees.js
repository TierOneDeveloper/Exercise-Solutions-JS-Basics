function radiansToDegrees(input)
{
    let radians = Number(input[0]);
    let degrees = Number(radians * (180 / Math.PI));
    console.log(degrees);
}

radiansToDegrees(["3.1416"])