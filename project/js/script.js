/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        promoGenre = poster.querySelector('.promo__genre'),
        promoBg = document.querySelector('.promo__bg'),
        movieList = document.querySelector('.promo__interactive-list'),
        films = document.querySelectorAll('.promo__interactive-item'),
        form = document.querySelector('.add'),
        btn = form.querySelector('button'),
        input = form.querySelector('.adding__input'),
        del = movieList.querySelectorAll('.delete'),
        inputs = form.querySelectorAll('input');

    const makeChanges = () => {
        promoBg.style.background = 'url("../project/img/bg.jpg") center center/cover no-repeat';

        promoGenre.textContent = 'Драма';
    };

    adv.forEach(item => {
        item.remove();
    });

    const createMovieList = (arr, parent) => {
        movieList.innerHTML = '';
        sortArr(arr);

        arr.forEach((item, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                sortArr(movieDB.movies);
                createMovieList(arr, parent);
            });
        });
    };

    const checkFilm = (film) => {
        if (film.length < 21) {
            movieDB.movies.push(film);
        } else {
            movieDB.movies.push(film.slice(0, 22) + '...');
        }
        if (inputs[1].checked) {
            console.log('Добавляем любимый фильм');
        }
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    createMovieList(movieDB.movies, movieList);
    makeChanges();

    form.addEventListener('submit', (e) => {
        const newFilm = input.value;
        e.preventDefault();
        if (newFilm) {
            checkFilm(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        e.target.reset();
    });
});