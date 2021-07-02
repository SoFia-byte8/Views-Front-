// Leer el Número ingresado y definir si es Primo o No?

function primo() {
    let text = document.getElementById('cuatroNumero');
    if (text.value != "") {
        var num = parseInt(text.value);
        if (num == 0 || num == 1) {
            document.getElementById('cuatroSalida').textContent = ("No puede ingresar 0 o 1");
        }else{
            if (!operacion(num)) {
                console.log(num + 'Primo');
                document.getElementById('cuatroSalida').textContent = num + ' es Primo';
            } else {
                console.log(num + ' No primo');
                document.getElementById('cuatroSalida').textContent = num + ' No es Primo';
            }
        }        
    } else {
        document.getElementById('cuatroSalida').textContent = ("Ingrese valor");
    }
}

function operacion(num) {
    borrar();
    var numberPrimo = false;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num % i == 0);
            primo = true;
        }
    }

    return numberPrimo;
}

function borrar() {
    console.clear();
    document.getElementById('cuatroSalida').textContent = ('');
    document.getElementById('cuatroNumero').value = ('');
}