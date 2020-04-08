//7 task
const div = document.getElementById('row'),
    ul = document.createElement('ul'),
    li = document.createElement('li');

let now = new Date(),
    day = now.getDay(),
    week = ['пн', 'вт', 'ср','чт', 'пт', 'сб', 'вс'],
    weekLi = '',
    l = '';


console.log(now.getDay());

for (let i = 0; i < week.length; i++) {
    if (i === day - 1) {
        l = `<strong>${week[i]}</strong>`;
    } else {
        l = week[i];
    }

    if (i >= 5) {
        l = `<em>${l}</em>`;
    }
    weekLi += `<li>${l}</li>`;

}

ul.innerHTML = weekLi;
div.append(ul);


