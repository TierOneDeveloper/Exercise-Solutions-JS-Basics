function USDtoBGN(input)
{
    let exchangeRate = 1.79549;
    let usd = Number(input[0]);
    let lev = exchangeRate * usd;
    console.log(lev);
}

USDtoBGN(["22"])
