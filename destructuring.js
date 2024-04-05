const frutas = ["pera", "uva", "sandia"];

const [fruta1, fruta2] = frutas;

console.log({ fruta1 }, { fruta2 });

let a = 1;
let b = 2;
[a, b] = [b, a]; // intercambia valores
console.log({ a }, { b });
