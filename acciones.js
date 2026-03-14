const estaciones = [

{
nombre: 'primavera',
icono: 'primavera.png',
msj: 'El mundo vuelve a florecer'
},

{
nombre: 'verano',
icono: 'vacaciones.png',
msj: 'Es hora de unas vacaciones'
}

];

// variable que controla que estacion estamos mostrando
let posicion = 0;

// elementos del html para poder modificarlos
const boton = document.getElementById('boton-estacion');
const cuerpo = document.body;
const icono = document.getElementById('icono-estacion');
const titulo = document.getElementById('titulo-estacion');
const mensaje = document.getElementById('mensaje');
const capa = document.getElementById('fondo-animado');

// cuando la pagina carga inicia con particulas de primavera
capa.innerHTML =
'<span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span>';

// evento que detecta cuando presionamos el boton
boton.addEventListener('click', () => {

cuerpo.classList.remove(estaciones[posicion].nombre);
icono.classList.add('cambio-icono');

setTimeout(() => {

// avanza a la siguiente estacion
posicion = (posicion + 1) % estaciones.length;

const actual = estaciones[posicion];

// cambia el fondo
cuerpo.classList.add(actual.nombre);

// cambiamos la imagen del icono
icono.src = actual.icono;

// cambiamos el titulo
titulo.innerText =
actual.nombre.charAt(0).toUpperCase() + actual.nombre.slice(1);

// cambiamos mensaje
mensaje.innerText = actual.msj;

// cambiamos los emojis que caen dependiendo la estacion
if (actual.nombre === 'primavera') {

capa.innerHTML =
'<span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span>';

}

else if (actual.nombre === 'verano') {

capa.innerHTML =
'<span>🏖️</span><span>🕶️</span><span>🏖️</span><span>🕶️</span><span>🏖️</span>';

}

icono.classList.remove('cambio-icono');

}, 200); // tiempo que tarda en cambiar la estacion

});
