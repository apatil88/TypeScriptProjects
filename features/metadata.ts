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

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrrrrrr');
  }
}

//Using Decorators and Metadata
function markFunction(secretInfo: string) {
  return function(target: Plane, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key);
  };
}

const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');

console.log(secret);
