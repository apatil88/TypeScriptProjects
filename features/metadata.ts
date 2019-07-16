import 'reflect-metadata';

const plane = {
  color: 'red'
};

//Associate metadata with object
Reflect.defineMetadata('note', 'hi there', plane);
console.log(plane);

const note = Reflect.getMetadata('note', plane);
console.log(note);

//Associate metdata with property in the object
Reflect.defineMetadata('note', 'bye there', plane, 'color');

const byeNote = Reflect.getMetadata('note', plane, 'color');
console.log(byeNote);
