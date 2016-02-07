// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promesa

'use strict';
var cuentaDePromesas = 0;

/**
 * Ejemplo de como usar promesas.
 */
function ejemploDePromesas() {
    var cuentaDePromesasLocales = ++cuentaDePromesas;

    var registro = document.getElementById('log');
    registro.insertAdjacentHTML('beforeend', cuentaDePromesasLocales +
        ') Inicio (<small>Código sincrónico empezado</small>)<br/>');

    // Hacemos una nueva promesa: prometemos la cadena 'resultado' (después de esperar 3s)
    var p1 = new Promise(
        // La función de resolución se llama con la capacidad de
        // resolver o rechzar la promesa
        function(resolve, reject) {
            registro.insertAdjacentHTML('beforeend', cuentaDePromesasLocales +
                ') Promesa empezada (<small>Código asíncrono empezado</small>)<br/>');
            // Esto sólo es un ejemplo para crear asincronismo
            window.setTimeout(
                function() {
                    // ¡Cumplimos la promesa!
                    resolve(cuentaDePromesasLocales)
                }, Math.random() * 2000 + 1000);
        });

    // definimos que hacer cuando la promesa se ha cumplido.
    p1.then(
        // Solo registramos el mensaje y un valor.
        function(val) {
            registro.insertAdjacentHTML('beforeend', val +
                ') Promesa cumplida (<small>Código asíncrono terminado</small>)<br/>');
        });

    registro.insertAdjacentHTML('beforeend', cuentaDePromesasLocales +
        ') Promesa hecha (<small>Código sincrónico terminado</small>)<br/>');
}

var btn = document.getElementById('btn');
btn.onclick = ejemploDePromesas;
