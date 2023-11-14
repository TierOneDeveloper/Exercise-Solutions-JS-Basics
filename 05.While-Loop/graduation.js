function graduation(input) {
    let grade = 0;
    let name = input[grade];
    grade++;
    let counterGPA = 0;
    let totalGPA = 0;
    while (grade <= 12) {
        let yearlyGradePoints = Number(input[grade]);
        if (yearlyGradePoints >= 4.00) {
            totalGPA += yearlyGradePoints;
            if (grade === 12) {
                console.log(`${name} graduated. Average grade: ${(totalGPA/12).toFixed(2)}`);
                break;
            }
            grade++;
        } else if (yearlyGradePoints < 4) {
            counterGPA++;
            if (counterGPA === 2) {
                console.log(`${name} has been excluded at ${grade-1} grade`);
                break;
            }
            grade++;
        }
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])



