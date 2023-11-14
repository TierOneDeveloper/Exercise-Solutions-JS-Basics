function trainTheTrainers(input) {
    let judgesNumber = Number(input[0]);
    index = 0;
    index++;
    let command = input[index];
    let sumGrades = 0;
    let averagePresentationGrade = 0;
    let sumTotalGrade = 0;

    let gradeCounter = 0;


    while (command !== "Finish") {
        let presentationName = input[index];
        index++;

        for (let i = 1; i <= judgesNumber; i++) {
            gradeCounter++;
            let presentationGrade = Number(input[index]);
            index++;
            sumTotalGrade += presentationGrade;
            sumGrades += presentationGrade;
            averagePresentationGrade = sumGrades / judgesNumber;
        }
        console.log(`${presentationName} - ${averagePresentationGrade.toFixed(2)}.`);
        sumGrades = 0;
        command = input[index];
    }
    console.log(`Student's final assessment is ${(sumTotalGrade / gradeCounter).toFixed(2)}.`);
}

trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])


