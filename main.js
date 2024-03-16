let distance, reach_mars, distance_moon, reach_moon;
let speed = 17500, mars = 225000000, moon = 384400, km = 0.621;

console.log(typeof speed);
console.log(typeof mars);
console.log(typeof moon);
console.log(typeof km);

// ---------------------------------------

distance_mars = mars * km;
console.log(distance_mars);




reach_mars = distance_mars / speed;
console.log(reach_mars);

// -------------------------------------------


distance_moon = moon * km;
console.log(distance_moon);

reach_moon = distance_moon / speed;
console.log(reach_moon);

//------------------------------------
// let str = "Привет";
// let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;
// console.log(phrase)
// console.log(`Обратные кавычки позволяют встраивать переменные ${str}`)

// 50000 will take 5 days to reach Mars.
let name = "Bayram", surname = "Ibadov";
console.log(`Hello, ${name} ${surname}`)
console.log(`${distance_mars}  will take ${reach_mars} days to reach Mars`);



