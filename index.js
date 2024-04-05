var x = 'equis'
x
let y
const z = {
  nombre: 'fabio',
  genero: 'masculino'
}

z.nombre = 'damian'
z.genero = 'no binario'
z

const array = ['manzana','pera','uva']
array[0] = 'sandia'
array

//tipos de datos primitivas 
typeof 'hola mundo'
typeof 10 // integer
typeof 3.1415 // float double real
typeof true
typeof false
typeof undefined

//tipos de datos no primitivas los definimos con const
typeof null
typeof {}
typeof []
typeof (function (){})

typeof '1'
typeof 1
'1' == 1
'1' === 1
'1' != 1
'1' !== 1
// comparación < <= > >= NO SON => =<

// estructuras condicionales
if (1==='1'){
  "'1' es igual a 1"
} else {
  "'1' no es igual a 1"
}
let a = 'manzana'
switch(a) {
  case 'manzana': 'es una fruta'
  case 'pera': 'es otra fruta'
  default: 'no es una fruta'
}

// estructuras repetitivas
// for cuando se la cantidad de veces que itero
for (let index = 0; index < 10; index++) {
  'este bucle se repite 10 veces'
}

