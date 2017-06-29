const cars = [
    { 'id' : 1, 'model' : 'Opel',    'color' : 'red' },
    { 'id' : 2, 'model' : 'Opel',    'color' : 'black' },
    { 'id' : 3, 'model' : 'BMW',     'color' : 'black' },
    { 'id' : 4, 'model' : 'BMW',     'color' : 'red' },
    { 'id' : 5, 'model' : 'BMW',     'color' : 'white' },
    { 'id' : 6, 'model' : 'Subaru',  'color' : 'black' },
    { 'id' : 7, 'model' : 'Hyundai', 'color' : 'red' }
];

const RED_CAR     = 'Red car';
const RED_BMW_CAR = 'Best car';
const BLACK_CAR   = 'Black car';
const CAR         = 'Car';

console.log(getNewCarsList(cars));

function getNewCarsList(cars) {
    let newCarsList = [];

    cars.forEach((car) => {
        if (isCarRedBMW(car)) {
            newCarsList.push({ 'id' : car.id, 'title' : RED_BMW_CAR });
        }
        else if (isCarRed(car)) {
            newCarsList.push({ 'id' : car.id, 'title' : RED_CAR });
        }
        else if (isCarBlack(car)) {
            newCarsList.push({ 'id' : car.id, 'title' : BLACK_CAR });
        }
        else {
            newCarsList.push({ 'id' : car.id, 'title' : CAR });
        }
    });

    return newCarsList;
}

function isCarRed(car) {
    return car.color === 'red';
}

function isCarBlack(car) {
    return car.color === 'black';
}

function isCarBMW(car) {
    return car.model === 'BMW';
}

function isCarRedBMW(car) {
    return isCarRed(car) && isCarBMW(car);
}