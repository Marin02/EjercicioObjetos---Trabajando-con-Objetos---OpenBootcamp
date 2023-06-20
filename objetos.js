const datosPersonales = {
    nombre: 'Felipe',
    apellido: 'Marin',
    edad: 19,
    altura: 1.72,
    eresDesarrollador: true
}

const propEdad = "edad";
console.log(datosPersonales[propEdad])

const datosJose = { ...datosPersonales }
datosJose.nombre = 'Jose'
datosJose.apellido = 'Alvarez'
datosJose.edad = 18
datosJose.altura = 1.70
datosJose.eresDesarrollador = false
console.log(datosJose)

const datosPablo = { ...datosPersonales }
datosPablo.nombre = 'Pablo'
datosPablo.apellido = 'Patiño'
datosPablo.edad = 20
datosPablo.altura = 1.78
datosPablo.eresDesarrollador = false
console.log(datosPablo)

const arrayDatos = [
    datosPersonales,
    datosJose,
    datosPablo
]
console.log(arrayDatos)

const ordenEdad = arrayDatos.sort((a, b) => b.edad - a.edad)
console.log(ordenEdad)