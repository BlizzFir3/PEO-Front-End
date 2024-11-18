// EXERCICE : Création d'un système de gestion d'employés

//     Définissez une classe Employee avec les propriétés suivantes :
//         name (nom de l'employé)
//         age (âge de l'employé)
//         baseSalary (salaire de base de l'employé)
//         employeeId (identifiant de l'employé)

//     Ajoutez une méthode calculateSalary() à la classe Employee qui calcule le salaire total de l'employé en ajoutant un bonus de performance au salaire de base.
//      ==> calculeSalary() renverra -> baseSalary * 1.1;

// Partie 2 : Création d'une sous-classe
//     Créez une sous-classe appelée Manager qui hérite de la classe Employee.

//     Ajoutez une propriété privée à la classe Manager appelée bonusPercentage qui représente le pourcentage de bonus que le manager reçoit en fonction de la performance.
//      -> bonusPercentage est égal à 15% pour tous les managers.
//      -> calculateSalary() renverra baseSalary * bonusPercentage

//     Redéfinissez la méthode calculateSalary() dans la classe Manager pour prendre en compte le bonus de performance en fonction du pourcentage de bonus.
//       ==> calculeSalary() renverra -> baseSalary * bonusPercentage;

class Employee {
    constructor(name, age, baseSalary, employeeId) {
        this.name = 'Quentin';
        this.age = 22;
        this.baseSalary = 1843;
        this.employeeId = 0;
    }

    calculateSalary() {
        console.log(this.baseSalary * 1.1);
        return this.baseSalary * 1.1;
    }
}

let Quentin = new Employee();

Quentin.calculateSalary();

class Manager extends Employee {
    #bonusPercentage;

    constructor(name, age, baseSalary, employeeId, bonusPercentage) {
        super(name, age, baseSalary, employeeId);
        this.bonusPercentage = 1.15;
    }

    get bonusPercentage() {
        return this.#bonusPercentage;
    }

    set bonusPercentage(newBonus) {
        this.#bonusPercentage = 1.15;
    }

    calculateSalaryManager() {
        console.log(this.baseSalary * this.bonusPercentage);
        return this.baseSalary * this.bonusPercentage;
    }
}

const Manager1 = new Manager();
Manager1.calculateSalaryManager();
