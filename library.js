// Utilizando el array de autos de clases pasadas y tomando como base algunos ejercicios
// hice esta implementación de los métodos


const cars = [
    {
        brand: 'Chevrolet',
        model: 'Aveo',
        color: 'Rojo',
        year: 2020,
        price: 11000
    },
    {
        brand: 'Ford',
        model: 'Fiesta',
        color: 'Azul',
        year: 2012,
        price: 8000
    },
    {
        brand: 'Volkswagen',
        model: 'Vento',
        color: 'Blanco',
        year: 2006,
        price: 10000
    },
    {
        brand: 'Nissan',
        model: 'Versa',
        color: 'Naranja',
        year: 2015,
        price: 14000
    },
    {
        brand: 'KIA',
        model: 'Rio Sedan',
        color: 'Negro',
        year: 2010,
        price: 12500
    }
];

//Método forEach imprime cada uno de los autos
function myForEach(array, callback) {
    for (let i = 0; i < array.length; i++){
        callback(array[i]);
    }
}
console.log('forEach (todos los autos): ')
forEachCars = myForEach(cars, car => console.log(car));




//Método Filter imprime los autos de 2012 en adelante
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (callback(array[i])==true) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log('Filter (autos de 2012 en adelante): ')
const yearFilter = myFilter(cars, car => car.year > 2011);
console.log(yearFilter);




// Método Map imprime todas las marcas
function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(callback(array[i]))
    }
    return newArray;
}
console.log('Map (imprime las marcas de autos): ');
const mapBrands = myMap(cars, car => car.brand);
console.log(mapBrands);




// Método Find busca un elemento en específico del array
function myFind(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            return array[i];
        }
    }
}
console.log('Find (busca el auto modelo Versa): ');
const findCar = myFind(cars, car => car.model === 'Versa');
console.log(findCar);



// Método FindIndex busca un elemento en una posición específica
function myFindIndex(array, callback) {
    for(let i = 0; i < array.length; i++ ) {
        if(callback(array[i]) === true) {
            return i;
        }
    }
}
console.log('FindIndex (busca la posición de la marca Volkswagen): ');
const findindexCar = myFindIndex(cars, car => car.brand === 'Volkswagen');
console.log(findindexCar);




// Método Contains imprime true si el valor se encuentra en el array
const vals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myContains(array, callback) {
        for(let i = 0; i < array.length; i++ ) {
        if(array[i] === callback(array)) {
            return true;
        } 
    }
    return false;
}
console.log('Contains (busca un valor en el array e imprime true si lo encuentra):');
const containsNumber = myContains(vals, val => val = 7);
console.log (containsNumber);



// Método Pluck imprime los precios de los autos
function myPluck(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        newArray.push(array[i][callback(array)]);
    }
    return newArray;
}
const pluckPrices = myPluck(cars, key => key = 'price');
console.log('Pluck (imprime los precios de los autos):');
console.log(pluckPrices);