function clock(input) {

    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            console.log(`${h}:${m}`);
            //if (h < 10 && m < 10) {
            //    console.log(`0${h}:0${m}`);
            //} else if (h < 10 && m > 9) {
            //    console.log(`0${h}:${m}`);
            //} else if (h > 9 && m < 10) {
            //    console.log(`${h}:0${m}`);
            //} else {
            //    console.log(`${h}:${m}`);
            //}
        }
    }
}

clock()