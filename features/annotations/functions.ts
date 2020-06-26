//without return annotation
const add = (a: number, b: number) => {
  return a + b;
};

//with return annotation*
const subtract = (a: number, b: number): number => {
  return a - b;
};

//function keyword annotation
function divide(a: number, b: number): number {
  return a / b;
}

//anonymous func annotation
const multiply = function (a: number, b: number): number {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

//annotate with return value 'never' if we dont want the func to completely execute and return some value
const throwError = (message: string): never => {
  throw new Error(message);
};

//destructuring with annotations
const todaysWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
