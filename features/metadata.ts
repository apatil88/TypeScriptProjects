import 'reflect-metadata';

// const plane = {
//   color: 'red'
// };

// // //Associate metadata with object
// // Reflect.defineMetadata('note', 'hi there', plane);
// // console.log(plane);

// // const note = Reflect.getMetadata('note', plane);
// // console.log(note);

// // //Associate metdata with property in the object
// // Reflect.defineMetadata('note', 'bye there', plane, 'color');

// // const byeNote = Reflect.getMetadata('note', plane, 'color');
// // console.log(byeNote);

class Plane {
  color: string = 'red';

  @markFunction
  fly(): void {
    console.log('vrrrrrrr');
  }
}

//Using Decorators and Metadata
function markFunction(target: Plane, key: string) {
  Reflect.defineMetadata('secret', 123, target, key);
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
