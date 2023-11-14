function timePlus15Minutes(input) 
{
    let hour = Number(input[0]);
    let minutes = Number(input[1]);
    let hoursToMinutes = hour * 60;
    let newTimeInMinutes = hoursToMinutes + minutes + 15;
    let newHour = Math.floor(newTimeInMinutes / 60);
    let newMinutes = newTimeInMinutes % 60;

    if (hour >= 0 && hour <= 23) 
    {
        if (minutes >= 0 && minutes <= 59) 
        {
            if (newMinutes < 10 && newHour !== 24)
            {
                console.log(`${newHour}:0${newMinutes}`);
            }
            else if (newMinutes < 10 && newHour == 24)
            {
                console.log(`0:0${newMinutes}`);
            }
            else if (newMinutes > 10 && newHour == 24)
            {
                console.log(`0:${newMinutes}`);
            }
            else 
            {
                console.log(`${newHour}:${newMinutes}`);
            }
        }
    }
}

timePlus15Minutes(["0", "01"])