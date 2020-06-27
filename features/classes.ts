class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  drive(): void {
    console.log("chugga chugga");
  }

  honk(): void {
    console.log("beep beep");
  }
}

//basic inheritance
class Car extends Vehicle {
  drive(): void {
    console.log("vroom");
  }
}

const car = new Car("red");
car.drive();
car.honk();

//instance method modifiers(exclusive to typescript)
