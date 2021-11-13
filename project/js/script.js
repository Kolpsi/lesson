/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

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
      films = document.querySelectorAll('.promo__interactive-item');

promoBg.style.background = 'url("../project/img/bg.jpg") center center/cover no-repeat';
promoGenre.textContent = 'Драма';
movieDB.movies.sort();

films.forEach((item, i) => {
  item.innerHTML = `${i+1} ` + movieDB.movies[i];
});

adv.forEach(item => {
    item.remove();
});