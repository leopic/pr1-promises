angular.module('proyectoUno', [
        'ngSanitize'
    ])
    .controller('ProyectoUnoController',
        ['$scope', '$timeout', '$q', function ($scope, $timeout, $q) {
            $scope.init = function() {
                $scope.cuentaDePromesas = 0;
                $scope.registro = '';
            };

            /**
             * Ejemplo de como usar promesas con AngularJS.
             */
            $scope.ejemploDePromesas = function ejemploDePromesas() {
                var cuentaDePromesasLocales = ++$scope.cuentaDePromesas;

                $scope.registro += cuentaDePromesasLocales + ') Inicio (<small>Código sincrónico empezado</small>)<br/>';

                // Hacemos una nueva promesa: prometemos la cadena 'resultado' (después de esperar 3s)
                var p1 = $q(
                    // La función de resolución se llama con la capacidad de
                    // resolver o rechzar la promesa
                    function(resolve, reject) {
                        $scope.registro += cuentaDePromesasLocales + ') Promesa empezada (<small>Código asíncrono empezado</small>)<br/>';
                        // Esto sólo es un ejemplo para crear asincronismo
                        $timeout(
                            function() {
                                // ¡Cumplimos la promesa!
                                resolve(cuentaDePromesasLocales)
                            }, Math.random() * 2000 + 1000);
                    });

                // definimos que hacer cuando la promesa se ha cumplido.
                p1.then(
                    // Solo registramos el mensaje y un valor.
                    function(val) {
                        $scope.registro += val + ') Promesa cumplida (<small>Código asíncrono terminado</small>)<br/>';
                    });

                $scope.registro += cuentaDePromesasLocales + ') Promesa hecha (<small>Código sincrónico terminado</small>)<br/>';
            };

            $scope.init();
        }])
;
