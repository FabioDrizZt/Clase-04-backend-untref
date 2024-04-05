function crearContador () {
    let cuenta = 0;
    function incrementar(){
        cuenta++;
        console.log(cuenta);
    }
    function decrementar(){
        cuenta--;
        console.log(cuenta);
    }
    return {
        incrementar,
        decrementar
    }
}

const miContador1 = crearContador()
const miContador2 = crearContador()

miContador1.incrementar(); // Imprime: 1
miContador1.incrementar(); // Imprime: 1
miContador1.incrementar(); // Imprime: 2
miContador2.incrementar(); // Imprime: 1