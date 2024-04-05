function calcular(nro1, nro2, operacion) {
/*   Una validacion de nro1 y nro2 son realmente numeros */
  return operacion(nro1,nro2)
}
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const division = (a, b) => a / b;
const multiplicacion = (a, b) => a * b;
// Pruebas de la función 'calcular'
console.log(calcular(5, 3, suma));
console.log(calcular(5, 3, resta));
console.log(calcular(5, 3, division));
console.log(calcular(5, 3, multiplicacion));
const a = 1
const b = 2
/* let mayor
 if(a>b) {
    mayor = a 
} else {
    mayor = b
} */
const mayor =  (a > b) ? a : b 
console.log('el valor mayor es: ' + mayor);