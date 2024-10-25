// Exercice 1
console.log('Exercice 1 :');
console.log(' ');

class Personne {
    #age;
    constructor(nom, age, adresse) {
        this.nom = nom;
        this.#age = age;
        this.adresse = adresse;
    }

    afficherInfos() {
        console.log(`La personne s'appelle : ${this.nom}`);
        console.log(`Cette personne a ` + this.getAge() + ` ans`);
        console.log(`Et elle habite ${this.adresse}`);
    }

    getAge() {
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }
}

const Louis = new Personne('Louis', 25, 'Montberron');
Louis.afficherInfos();
Louis.setAge(26);
console.log(
    "C'est son anniversaire, joyeux " + Louis.getAge() + 'e anniversaire'
);
console.log(' ');

// Exercice 2
console.log('Exercice 2 :');
console.log(' ');

class CompteBancaire {
    #solde;
    constructor(titulaire) {
        this.titulaire = titulaire;
        this.#solde = 0;
    }

    getSolde() {
        return this.#solde;
    }
    
    setSolde(solde) {
        this.#solde = solde;
    }
    
    afficherSolde() {
        console.log(`Le solde de ${this.titulaire} est de ` + this.getSolde() + '€');
    }

    deposit(montant) {
        this.#solde += montant;
    }

    retire(montant) {
        this.#solde -= montant;
    }
}

const monCompte = new CompteBancaire('Quentin');
monCompte.afficherSolde();
monCompte.setSolde(-200);
console.log("C'est la crise");
monCompte.getSolde();
monCompte.deposit(1000);
console.log("J'ai déposer 1000€, j'ai donc " + monCompte.getSolde() + '€');
monCompte.retire(100);
console.log("J'ai retirer 100€, j'ai donc " + monCompte.getSolde() + '€');

console.log(' ');

// Exercice 3
console.log("Exercice 3 :")
console.log(' ');