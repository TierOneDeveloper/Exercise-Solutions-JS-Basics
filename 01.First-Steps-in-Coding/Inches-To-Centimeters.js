function inchesToCentimeters(input)
{
    let a = 2.54;
    let inches = Number(input[0]);
    let centimeters = Number(a*inches);
    console.log(centimeters);
}

inchesToCentimeters("3")