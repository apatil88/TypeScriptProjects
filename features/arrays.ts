const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

const carsByMake1 = [['f150'], ['corolla'], ['camaro']];

// Help with inference while extracting values
const carMaker = carMakers[0];

// Prevent incompatible values
carMakers.push(1);

// Help with map
carMakers.map(
  (car: string): string => {
    return car.toUpperCase();
  }
);

// Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-09');
importantDates.push(10);
