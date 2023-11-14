function uniquePINCodes(input) {
    let firstDiggitTopLimit = Number(input[0]);
    let secondDiggitTopLimit = Number(input[1]);
    let thirdDiggitTopLimit = Number(input[2]);



    for (i = 2; i <= firstDiggitTopLimit; i += 2) {
        for (j = 2; j <= secondDiggitTopLimit; j++) {
            for (k = 2; k <= thirdDiggitTopLimit; k += 2) {
                if (j === 2 || j === 3 || j === 5 || j === 7) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}



uniquePINCodes(["8",
    "2",
    "8"])