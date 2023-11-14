function projectsCreation(input)
{
    let timePerProject = 3;
    let name = input[0];
    let numOfProjects = Number(input[1]);
    let timeForAllProjects = Number(timePerProject * numOfProjects);
    console.log(`The architect ${name} will need ${timeForAllProjects} hours to complete ${numOfProjects} project/s.`);
}

projectsCreation(["Ivan", "5"])
