function moving(input) {
    let index = 0;
    let width = Number(input[index]);
    index++;
    let length = Number(input[index]);
    index++;
    let height = Number(input[index]);
    index++;
    let command = input[index];
    index++;

    let boxVolume = 1 * 1 * 1;
    let totalVolume = (length * width * height) * boxVolume;
    let startVolume = 0;

    while (command !== "Done") {
        let boxes = Number(command);
        startVolume += boxes;
        if (startVolume >= totalVolume) {
            console.log(`No more free space! You need ${Math.abs(totalVolume - startVolume)} Cubic meters more.`)
            break;
        }
        command = input[index];
        index++;
    }
    if (command === "Done") {
        console.log(`${totalVolume - startVolume} Cubic meters left.`);
    }
}

moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
