let numberOfFilms;

function start() {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");

    while (numberOfFilms == '' ||  numberOfFilms == 0 || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
    }
}

start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {
    },
    actors : {},
    genres : [],
    privat : false
};

function showMyDB(private) {
    if (private == false) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function rememberMyFilms() {
    for (i = 0; i < 2; i++) {
        const a = prompt("Один из последних просмотренных фильмов?"),
              b = prompt("На сколько оцените его?");
    
        if (a != null && b != null & a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов")
    } if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель")
    } if (personalMovieDB.count > 30) {
        console.log('Вы кионман')
    }    
}

detectPersonalLevel();

function writeYourGenres() {
    for (i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
};

writeYourGenres()