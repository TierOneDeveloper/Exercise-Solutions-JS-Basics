function examPreparation(input) {
    let index = 0;
    let unsatisfactoryGradeNumber = Number(input[index]);
    index++;
    let unsatisfactoryGradeCounter = 0;
    let satisfactoryGradeCounter = 0;
    let lastExerciseName = "";
    let sumGrade = 0;

    while (unsatisfactoryGradeCounter < unsatisfactoryGradeNumber) {
        let exerciseName = input[index];
        index++;
        let grade = Number(input[index]);
        if (exerciseName === "Enough") {
            console.log(`Average score: ${(sumGrade / (satisfactoryGradeCounter + unsatisfactoryGradeCounter)).toFixed(2)}`);
            console.log(`Number of problems: ${satisfactoryGradeCounter + unsatisfactoryGradeCounter}`)
            console.log(`Last problem: ${lastExerciseName}`);
            break;
        }
        if (grade <= 4) {
            lastExerciseName = exerciseName;
            sumGrade += grade;
            unsatisfactoryGradeCounter++;
            index++;
        } else {
            lastExerciseName = exerciseName;
            sumGrade += grade;
            satisfactoryGradeCounter++;
            index++;
        }
    }

    if (unsatisfactoryGradeCounter === unsatisfactoryGradeNumber) {
        console.log(`You need a break, ${unsatisfactoryGradeCounter} poor grades.`);
    }
}

examPreparation(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"])
