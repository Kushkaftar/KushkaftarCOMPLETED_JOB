//третье доп. зпдание

//получаем значение переменной
let lang = prompt("введите ru или en");

//блок if
if (lang === 'ru') {
    console.log('пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс');
} else if (lang === 'en') {
    console.log('mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn');
} else {
    console.log('not ru or en');
}

//блок switch
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

//блок с массивом
let arrLang = {
    'ru':['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
    'en':['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
};
console.log(arrLang[lang]);