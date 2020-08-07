"use strict";

if (4 == 9) {
    console.log('ok');
} else {
    console.log('Error');
}

const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Mnogo');
// } else {
//     console.log('Ok');
// }

// ( num==50 ) ? console.log('Ok') : console.log('Error');

switch (num) {
    case 49:
        console.log('Neverno');
        break;
    case 100:
        console.log('Neverno');
        break;
    case 50:
        console.log('Verno');
        break;
    default:
        console.log('Ne v etot raz');
        break;
}