interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}, ${this.year}, ${this.broken}`;
  },
};

//notice that the annotation is quite long
// const printVehicle = (vehicle: {name: string; year: number; broken: boolean}) : void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// }

//interfaces solves this issue
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);
