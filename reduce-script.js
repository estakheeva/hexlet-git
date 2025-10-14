const numbers = [10, 20, 30, 40];

// сумма
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 100

// среднее
const avg = numbers.reduce((acc, num, _, arr) => acc + num / arr.length, 0);
console.log(avg); // 25
//delete ramones
