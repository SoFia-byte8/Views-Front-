//Resolver el algoritmo de Fibonacci, mostrando por consola la serie hasta una cantidad determinada de números.

function post(some) {
    eliminar();
    var exit = document.getElementById('action').innerHTML = some;

    return exit;
}

function eliminar() {
    document.getElementById('action').textContent = "";
    document.getElementById('nueveText').textContent = "";
    console.clear();
}

function fibonacci() {
    var entrada = document.getElementById('nueveText');
    entrada = entrada.value;
    if (entrada != "") {
        C(entrada);
    } else {
        post('Digite un Número');
    }
}

function C(n) {
    var total = [];
    var zero = 0;
    var two = 1;

    for (var i = 1; i <= n; i++) {
        var c ;
        total.push(zero);
        c = zero + two;
        zero = two;
        two = c;
    }
    post(total);
}