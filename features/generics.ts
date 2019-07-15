class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

//Generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfAnything = new ArrayOfAnything<string>(['a', 'b', 'c', 'd']);

//Type Inference with Generics
//const arrayOfAnything = new ArrayOfAnything(['a', 'b', 'c', 'd']);

//Example of Generics with functions
function printString(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['a', 'b', 'c']);

//Generic Constraints

interface Printable {
  print(): void;
}

class Car {
  print(): void {
    console.log('I am a car');
  }
}

class House {
  print(): void {
    console.log('I am a house');
  }
}

function printHouseOrCar<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printHouseOrCar<House>([new House(), new House()]);
printHouseOrCar<Car>([new Car(), new Car()]);
