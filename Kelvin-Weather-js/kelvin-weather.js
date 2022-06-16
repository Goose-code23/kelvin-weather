const kelvin = 293;
// sets kelvin to 293
const celsius = kelvin - 273;
// set celius to kelvin - 273
let fahrenheit = celsius * (9/5)+ 32;
// set fahrenheit
fahrenheit = Math.floor(fahrenheit);
// set fahrenheit to floor
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
let newton = celsius * (33/100)
newton = Math.floor(newton)
console.log(`The temperature is ${newton} degrees newton.`)