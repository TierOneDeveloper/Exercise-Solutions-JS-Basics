function numbersNTo1(input){
    let n = Number(input[0]);
    for (let i = 1; n >= i; n = n - 1){
        console.log(n);
    }
}
numbersNTo1(["50"])