const add = (a: number, b: number): number => {
  return a + b;
};

//Named function
function divide(a: number, b: number): number {
  return a / b;
}

//Anonymous function
const multiply = function(a: number, b: number): number {
  return a * b;
};

// function that returns void
const logger = (message: string): void => {
  console.log(message);
};

// function that never returns anything
const throwError = (message: string): never => {
  throw new Error(message);
};

// Destructuring
const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ({
  date,
  weather
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
