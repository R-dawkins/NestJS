export {};
const carMakers = ["ford", "toyota", "chevy"];
// const carMakers: string[] = [];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];
// const carsByMake = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
// carMakers.push(100);

// Help with "map"
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates = [new Date(), "2030-10-10"];
// const importantDates: (string | Date)[] = [];
importantDates.push("2030-10-10");
importantDates.push(new Date());
