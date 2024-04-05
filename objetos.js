let tenista = {
  nombre: "Roger",
  apellido: "Federer",
  saludar: function () {
    return "¡Hola! Me llamo " + tenista.nombre;
  },
};

console.log(tenista.saludar()); // ¡Hola! Me llamo Roger
