const names: string[] = [];

//string[]
const carMakers = ["Ford", "Toyota", "Chevy"];

//Date[]
const dates = [new Date(), new Date()];

//string[][]
const carsByMake = [["f150"], ["corolla"], ["camaro"]];

//why use typed arrays?

//help with inference when extracting values
const yourCar = carMakers[0];
const myCar = carMakers.pop();
//prevent icompatible values
carMakers.push(100);

//Flexible typed arrays
const importantDates: (string | Date)[] = [new Date(), "2020-10-01"];
