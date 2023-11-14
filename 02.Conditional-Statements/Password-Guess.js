function passwordGuess(input)
{
    let login = input[0];
    let password = "s3cr3t!P@ssw0rd";
    if (login === password){
        console.log("Welcome");
    } else{
        console.log("Wrong password!")
    }

}

passwordGuess(["s3cr3t!P@ssw0rd"])