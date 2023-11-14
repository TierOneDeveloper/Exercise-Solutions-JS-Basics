function vacationBooksList(input)
{
    let numOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysPerBook = Number(input[2]);
    let hourPerDay = Number((numOfPages / pagesPerHour) / daysPerBook);
    console.log(hourPerDay);
}

vacationBooksList(["432","15","4"])
