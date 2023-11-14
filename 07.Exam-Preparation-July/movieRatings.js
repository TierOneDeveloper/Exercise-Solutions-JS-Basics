function movieRatings(input) {
    let index = 0;
    let numberOfFilms = Number(input[index]);
    index++;
    let averageRating = 0;
    let ratingSum = 0;
    let highestRatingFilmName = "";
    let highestRatingFilm = 0;
    let lowestRatingFilmName = "";
    let lowestRatingFilm = 0;

    for (j = 0; j < numberOfFilms; j++) {
        let filmName = input[index];
        index++;
        let filmRating = Number(input[index]);
        index++;
        if (filmRating > highestRatingFilm) {
            highestRatingFilm = filmRating;
            highestRatingFilmName = input[index - 2];
            lowestRatingFilm = filmRating;
        }
        if (filmRating <= lowestRatingFilm) {
            lowestRatingFilm = filmRating;
            lowestRatingFilmName = input[index -2];
        }
        ratingSum += filmRating;
    }
    averageRating = ratingSum / numberOfFilms;

    //if(lowestRatingFilm === highestRatingFilm) {
    //    console.log(`${highestRatingFilmName} is with highest rating: ${highestRatingFilm.toFixed(1)}`);
    //    console.log(`${lowestRatingFilmName} is with lowest rating: ${lowestRatingFilm.toFixed(1)}`);
    //    console.log(`Average rating: ${averageRating.toFixed(1)}`);

    //} else {
    console.log(`${highestRatingFilmName} is with highest rating: ${highestRatingFilm.toFixed(1)}`);
    console.log(`${lowestRatingFilmName} is with lowest rating: ${lowestRatingFilm.toFixed(1)}`);
    console.log(`Average rating: ${averageRating.toFixed(1)}`);
    //}
}

movieRatings(["3",
"Interstellar",
"8.5",
"Dangal",
"8.5",
"Green Book",
"8.5"])


