//4 task

const arr = ['4635598',
            '216846',
            '6846945',
            '583743',
            '79845612',
            '985921',
            '29683515',
            ];

inConsole(arr);

function inConsole(arr) {
    arr.forEach(elem => elem[0] === '2' ||  elem[0] === '4' ? console.log(elem) : elem)
}

let n = 100;

nextPrime:
    for (let i = 2; i <= n; i++) {

        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue nextPrime;
        }

        console.log( `${i} Делители этого числа: 1 и ${i}` );
    }

// mainCycle(15);
// function mainCycle(n) {
//     let arr = [];
//     for (let i = 1; i < n; i++) {
//         if (i !== 1) {
//             for (let j = i; j < n; j++) {
//                 if (j%i !== 0) {
//                     arr.push(j);
//                 }
//             }
//         }
//     }
//     console.log(arr)
// }


