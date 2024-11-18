const persons = [
    { firstName: 'Malcom', lastName: 'Reynolds' },
    { firstName: 'Kaylee', lastName: 'Frye' },
    { firstName: 'Jayne', lastName: 'Cobb' },
];

let newPersons = persons.map((persons) =>
    [persons.firstName, persons.lastName].join(' ')
);

const chiffres = [1, 2, 3, 4];
console.log(chiffres);

// function mapCarre(tab) {
//     for (let i = 0; i < tab.length; i++) {
//         tab[i] *= tab[i];
//     }
// return tab.map((number) => number * number)
// }

const mapCarre = (tab) => tab.map((number) => number * number);

let chiffresCarré = mapCarre(chiffres);
console.log(chiffresCarré);
