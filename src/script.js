//третье доп. зпдание
//переменные
let form  = document.getElementsByTagName('form');
let language = document.getElementById('icon_prefix');
let firstName = document.getElementById('icon_prefix2');
let lang = null;

language.addEventListener("input",  () => {validLang(language)});

const validLang = (input) => {

    if (input.value === 'ru' || input.value === 'en') {
        lang = input.value;

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
    }
};

firstName.addEventListener("input",  () => {addName(firstName)});

const addName = (input) => {
    if (input.value !== '') {
        let namePerson = input.value;
        let position = namePerson === 'Артем' ? "директор" : namePerson === 'Максим' ? "преподаватель" : "студент";
        console.log(position);
    }
};
