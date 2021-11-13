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
      movieList = document.querySelector('.promo__interactive-list'),
      films = document.querySelectorAll('.promo__interactive-item'),
      form = document.querySelector('.add'),
      btn = form.querySelector('button'),
      input = form.querySelector('.adding__input'),
      del = movieList.querySelectorAll('.delete');


promoBg.style.background = 'url("../project/img/bg.jpg") center center/cover no-repeat';
promoGenre.textContent = 'Драма';
movieDB.movies.sort();

movieList.innerHTML = '';
movieDB.movies.forEach((item, i) => {
  movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
  <div class="delete"></div>
</li>`;
});

let deleteElement = function(e) {
    console.log(e.target);
}

del.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});



adv.forEach(item => {
    item.remove();
});

form.addEventListener('submit', (e) =>{
    e.preventDefault();   
    if (input.value.length < 21) {
        movieDB.movies.push(input.value);
    } else {
        movieDB.movies.push(input.value.slice(0, 22) + '...');
    }
    movieDB.movies.sort();
    movieList.innerHTML = '';
    movieDB.movies.forEach((item, i) => {
        movieList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${item}
        <div class="delete"></div>
    </li>`;
    });
});