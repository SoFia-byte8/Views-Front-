// Leer un Número y Generar con ese Número la Tabla de Multiplicar Del número 1 al 10.

function tablaMul() {
    let text = document.getElementById('dosNumero');
    if (text.value != "") {
        let num = parseInt(text.value);
        tabla(num);
    } else {
        document.getElementById('mul').textContent=("Ingrese un valor");
    }
}

function tabla(num) {
    borrar();
    let max = document.getElementById('dosContador').value; 
    console.log("Número : " + num);
    for (var i = 1; i <= max; i++) {
        let operacion = num * i;  
        console.log(num + "*" + i + "=" + operacion); 
        mostrar(num, i, operacion);
    }
}

function mostrar(num, i, operacion) {
    var p = document.createElement("p"); 
    p.textContent = num + "*" + i + "=" + operacion;  
    document.getElementById('mul').appendChild(p); 
}

function borrar() {
    console.clear(); 
    document.getElementById('dosNumero').value = "";   
    document.getElementById('mul').textContent=""; 
}