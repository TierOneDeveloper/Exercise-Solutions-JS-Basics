function combinations(input) {
    let n = Number(input[0]);
    let combinationsCounter = 0;
    for (let x = 0; x <= 25; x++) {
        for (let y = 0; y <= 25; y++){
            for (let z = 0; z <= 25; z++) {

                if(x + y + z === n) {
                    combinationsCounter++;
                    //console.log(`${x} + ${y} + ${z} = ${n}`);
                }
            }
        }
    }
    console.log(combinationsCounter);
}

combinations(["20"])