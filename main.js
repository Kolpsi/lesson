let numberOfFilms;

const personalMovieDB = {
    count : numberOfFilms,
    movies : {
    },
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
    
        while (numberOfFilms == '' ||  numberOfFilms == 0 || isNaN(numberOfFilms)) {
            numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "0");
        }
    },
    showMyDB: function(private) {
        if (private == false) {
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель");
        } if (personalMovieDB.count > 30) {
            console.log('Вы кионман');
        }    
    },
    writeYourGenres: function() {
        for (i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
};

personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();