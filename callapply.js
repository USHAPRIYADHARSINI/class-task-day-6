const name = ["usha","siva","heena"];
const marks= [10,20,100];
const max = Math.max.apply(null,marks);
console.log(max);
const maximum = Math.max.call(10,20,100);
console.log(maximum);
