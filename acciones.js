const estaciones = [

{
nombre: 'primavera',
icono: 'primavera.png',
msj: 'El mundo vuelve a florecer',
titulo: 'Primavera'
},

{
nombre: 'verano',
icono: 'vacaciones.png',
msj: 'Es hora de unas vacaciones',
titulo: 'Verano'
},

// agregamos otoño
{
nombre: 'otono',
icono: 'otono.png',
msj: 'El mundo se ve de color naranja y marron',
titulo: 'Otoño'
},

// agregamos invierno
{
nombre: 'invierno',
icono: 'invierno.png',
msj: 'Es tiempo de sacar la poderosa cobija del tigre',
titulo: 'Invierno'
}

];

//controla que estacion estamos mostrando
let posicion = 0;

// elementos del htm para poder modificarlos
const boton = document.getElementById('boton-estacion');
const cuerpo = document.body;
const icono = document.getElementById('icono-estacion');
const titulo = document.getElementById('titulo-estacion');
const mensaje = document.getElementById('mensaje');
const capa = document.getElementById('fondo-animado');

// cuando la pagina carga inicia con particulas de primavera
capa.innerHTML =
'<span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span><span>🌺</span><span>🌼</span>';

// detecta cuando presionamos el boton
boton.addEventListener('click', () => {

cuerpo.classList.remove(estaciones[posicion].nombre);
icono.classList.add('cambio-icono');

setTimeout(() => {

// en esta parte hace que cambie todo y que se vea el cambio de estacion en estacion
posicion = (posicion + 1) % estaciones.length;

const actual = estaciones[posicion];

cuerpo.classList.add(actual.nombre);

icono.src = actual.icono;

titulo.innerText = actual.titulo;

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