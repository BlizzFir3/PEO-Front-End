//Global

let ici

if()
{
//sous-
console.log(ici)
let la
console.log(la)
}

console.log(la)

function varTest(){

    var test = true
}

if(){
    var testDeux;
}


function sayHello(){
    return 'Hello'
}


function salutation(){

    maFct()
}

salutation(sayHello)

function returnFct(){

    return function (a,b){
        console.log(a*b)
    }
}


const maFct = returnFct()
console.log(maFct)
console.log(maFct(2,3))


const myArrowFct = function (){}

let usersList = ""

const addUser = user => userList + user

addUser()

//
//

const arrayNb = [3,2,1]
const arrayNbB = [23,644, 1268]
const arrayTwo = [...arrayNb, 1,23]
console.log(arrayTwo)

// <index>0 => 3
// <index>1 => 2
// <index>2 => 1

arrayNb[0]= 55
console.log(arrayNb)

console.log("ArrayTwo",arrayTwo)

const arrayNbC = [3,2,1]

const [nbUn, ,nbTrois] = arrayNbC;

console.log(nbTrois)

const users = ["Tom", "Remi", "Audrey", "Yacine"]

// users.forEach((user, index, tab)=>{console.log(index + " : " + user)})

//map, filter

// const usersMinus = users.(mapuser => user.toLowerCase())

// console.log(usersMinus)

//filter

const longNames = users.filter(userName => userName.length > 4).map(user=> user.toLowerCase())

console.log(longNames)