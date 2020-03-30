let num = 266219;
let numStr = String(num);
let arr = numStr.split('');
let sum = 1;

//цикл
for ( let i = 0; i < numStr.length; i++) {
    sum = sum * +arr[i];
}

//переменная
let res = sum ** 3;
//не совсем понял что значит вывести на экран решил что так наверное
let block = document.getElementById('add');
const  h1 = document.createElement('h1');
h1.textContent = String(res).slice(0,2);
block.append(h1);

let lang = prompt("введите ru или en");

if (lang === 'ru') {
    console.log('пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс');
} else if (lang === 'en') {
    console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
} else {
    console.log('not ru or en');
}

switch (lang) {
    case 'ru':
        console.log('пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс');
        break;
    case  'en':
        console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
        break;
    default:
        alert('not ru or en');
}

let arrLang = {
    'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
    'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arrLang[lang]);