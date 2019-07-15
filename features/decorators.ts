//Decorators are run when the class is defined and NOT when an instance is created
@classDecorator
class Boat {
  @testDecorator
  color: string = 'red';

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  //@logError('Boat was sunk!')
  pilot(@parameterDecorator speed: string): void {
    if (speed === 'fast') {
      console.log('swish');
    } else {
      console.log('nothing');
    }
    throw new Error();
    console.log('swish');
  }
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

//When we use decorators around instance properties inside a class,
//we cannot get direct access to those properties because the decorator is executed before we create an instance and the only argument we get to the decorator is the prototype
function testDecorator(target: any, key: string) {
  //console.log(target.color);
  console.log(key);
}

//Decorator Factory: function that returns a decorator
function logError(errorMessage: string) {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
    //console.log('Target:', target);
    //console.log('Key:', key);

    const method = desc.value;

    try {
      method();
    } catch (e) {
      console.log(errorMessage);
    }
  };
}

//new Boat().pilot();
