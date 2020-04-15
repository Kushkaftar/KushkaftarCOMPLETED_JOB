'use strict';
//10 task
const body = document.querySelector("body"),
    delAdv = document.querySelector(".adv"),
    books = document.querySelector(".books"),
    classBook = document.querySelectorAll(".book");

//Восстановить порядок книг.
books.append(classBook[1]);
books.append(classBook[0]);
books.append(classBook[4]);
books.append(classBook[3]);
books.append(classBook[5]);
books.append(classBook[2]);

//Заменить картинку заднего фона на другую из папки image
body.style.backgroundImage = "url(image/you-dont-know-js.jpg)";

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
 let a = classBook[4].querySelector("a");
 a.innerText = "Книга 3. this и Прототипы Объектов";

// del elem class adv Удалить рекламу со страницы
delAdv.remove();

//Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
const ul2 = classBook[0].querySelector("ul"),
    arrLi2 = ul2.querySelectorAll("li");

arrLi2[3].after(arrLi2[8]);
arrLi2[3].after(arrLi2[6]);
arrLi2[9].after(arrLi2[2]);

const arrLi5 = classBook[5].querySelectorAll("li");

arrLi5[3].before(arrLi5[9]);
arrLi5[4].after(arrLi5[2]);
arrLi5[7].after(arrLi5[5]);

//в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
const arrLi6 = classBook[2].querySelectorAll("li");
console.log(arrLi6);
let arg8 = document.createElement("li");
arg8.innerHTML = "Глава 8: За пределами ES6";
arrLi6[9].before(arg8);