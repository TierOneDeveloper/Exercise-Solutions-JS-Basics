function building(input) {
    let index = 0;
    let floor = Number(input[index]);
    index++;
    let room = Number(input[index]);
    index++;
    let buff = "";

    for (let i = floor; i >= 1; i--) {
        for (let j = 0; j < room; j++) {
            if (i === floor) {
                buff += " " + `L${i}${j}`;
            }
            else if (i % 2 === 0) {
                buff += " " + `O${i}${j}`;
            }
            else if (i % 2 !== 0) {
                buff += " " + `A${i}${j}`;
            }
        }
        console.log(buff);
        buff = "";
    }
}

building(["4", "4"])