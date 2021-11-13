
const personalMovieDB = {
    count : 0,
    movies : {
    },
    actors : {},
    genres : [],
    privat : false,
    start: function() {
        personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "0");
    
        while (personalMovieDB.count == '' ||  personalMovieDB.count == 0 || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = prompt("Сколько фильмов вы уже посмотрели?", "0");
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
            if (personalMovieDB.genres[i - 1] === null || personalMovieDB.genres[i - 1] === '') {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB: function(private) {
        if (private) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};

personalMovieDB.start();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();

console.log([ ] + false - null + true );
