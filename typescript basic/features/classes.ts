class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("vroom");
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);

const kia = new Car(4, "red");
console.log(kia.color, kia.wheels);
