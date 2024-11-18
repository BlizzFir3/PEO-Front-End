function helloName(name) {
    return name;
}

let name = helloName('Kévin');

console.log(name);

const helloNameFleche = (name) => {
    return name;
};

console.log(helloNameFleche('Quentin'));
const helloNameFleche2 = (name) => name;

const myTab = [1, 6, 7, 9, 14, 16, 17, 4];

function moyenne(tab) {
    let x = 0;

    for (let i = 0; i < tab.length; i++) {
        x += tab[i];
    }
    return x / tab.length;
}

console.log(moyenne(myTab));

const moyenneFlechee = (tab) => {
    let x = 0;

    for (let i = 0; i < tab.length; i++) {
        x += tab[i];
    }
    return x / tab.length;
};

console.log(moyenneFlechee(myTab));
