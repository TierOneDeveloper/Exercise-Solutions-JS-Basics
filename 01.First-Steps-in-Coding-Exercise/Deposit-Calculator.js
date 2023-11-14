function depositCalculator(input)
{
    let depositSum = Number(input[0]);
    let depositTerm = Number(input[1]);
    let annualInterestRate = Number(input[2] * (1/100));
    let finalSum = depositSum + depositTerm * ((depositSum * annualInterestRate)/12);
    console.log(finalSum);
}

depositCalculator(["2350","6","7"]);