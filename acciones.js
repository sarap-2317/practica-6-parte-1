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
},

{
nombre: 'otono',
icono: 'otono.png',
msj: 'El mundo se ve de color naranja y marron'
},

{
nombre: 'invierno',
icono: 'invierno.png',
msj: 'Es hora de sacar la poderosa cobija del tigre'
}

];

// variable ontrola que estacion estamos mostrando
let posicion = 0;

const boton = document.getElementById('boton-estacion');
const cuerpo = document.body;
const icono = document.getElementById('icono-estacion');
const titulo = document.getElementById('titulo-estacion');
const mensaje = document.getElementById('mensaje');
const capa = document.getElementById('fondo-animado');

// caen los emojis
capa.innerHTML =
'<span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span>';

//detecta cuando presionamos el boton
boton.addEventListener('click', () => {

cuerpo.classList.remove(estaciones[posicion].nombre);
icono.classList.add('cambio-icono');

setTimeout(() => {

// esta parte es lo que hace que cambien las imagenes el icono, todo para que se vea el cambio de etacion
posicion = (posicion + 1) % estaciones.length;

const actual = estaciones[posicion];

cuerpo.classList.add(actual.nombre);

icono.src = actual.icono;

titulo.innerText =
actual.nombre.charAt(0).toUpperCase() + actual.nombre.slice(1);

mensaje.innerText = actual.msj;

if (actual.nombre === 'primavera') {

capa.innerHTML =
'<span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span>';

}

else if (actual.nombre === 'verano') {

capa.innerHTML =
'<span>🏖️</span><span>🕶️</span><span>🏖️</span><span>🕶️</span><span>🏖️</span>';

}

else if (actual.nombre === 'otono') {

capa.innerHTML =
'<span>🍁</span><span>🍂</span><span>🍁</span><span>🍂</span><span>🍁</span>';

}

else if (actual.nombre === 'invierno') {

capa.innerHTML =
'<span>❄️</span><span>☃️</span><span>❄️</span><span>☃️</span><span>❄️</span>';

}

icono.classList.remove('cambio-icono');

}, 200); // tiempo que tarda en cambiar la estacion

});