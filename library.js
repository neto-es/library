// Utilizando el array de usuarios de clases pasadas y tomando como base algunos ejercicios
//  hice esta implementación de los métodos


const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
]

//Método forEach imprime cada uno de los usuarios
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
console.log('forEach (todos los usuarios): ')
forEacUsers = myForEach(users, user => console.log(user));




//Método Filter imprime los usuarios de más de 30 años
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])==true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log('Filter (mayores a 30 años): ')
const ageFilter = myFilter(users, user => user.age > 30);
console.log(ageFilter);




// Método Map imprime los correos de los usuarios
function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray;
}
console.log('Map (imprime todos los correoas): ');
const mapEmails = myMap(users, user => user.email);
console.log(mapEmails);




// Método Find busca un usuario en específico
function myFind(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            return array[i];
        }
    }
}
console.log('Find (busca e imprime el usuario Erik): ');
const findUser = myFind(users, user => user.name === 'Erik');
console.log (findUser);



// Método FindIndex busca la posición de un usuario
function myFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            return i;
        }
    }
}
console.log('FindIndex (busca la posición del usuario Óscar): ');
const findindexUser = myFindIndex(users, user => user.name === 'Oscar');
console.log (findindexUser);




// Método Contains imprime true si el valor se encuentra en los usuarios
console.log('');
const vals = [1, 2, 3];
function myContains(array, callback) {
        for(let i = 0; i < array.length; i++ ) {
        if(array[i] === callback(array)) {
            return true;
        } 
    }
    return false;
}
console.log('Contains (busca si el array CONTIENE el valor):');
const containsNumber = myContains(vals, val => val = 2);
console.log (containsNumber);



// Método Pluck imprime los nombres de los usuarios
function myPluck(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i][callback(array)]);
    }
    return newArray;
}
const pluckNames = myPluck(users, key => key = 'name');
console.log('Pluck (imprime sólo los nombres de los usuarios)');
console.log(pluckNames);