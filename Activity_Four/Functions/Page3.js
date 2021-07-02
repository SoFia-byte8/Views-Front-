// Generar las tablas de multiplicar desde el numero 2 al 9, cada una desde el Numero 1 al 10 - tener en cuenta flexbox para pintar la solucion

let html = "";
function tabla() {
    borrar();
    var tablas = [];
    for (var c = 2; c <= 9; c++) {
        console.log("Numero : " + c);
        html += "<table class='tresTable'>";
    
        for (var o = 1; o <= 10; o++) {   
            var operacion = c * o;    
            console.log(c + " * " + o + " = " + operacion);  
            tablas.push(c + " * " + o + " = " + operacion);
            html += "<tr>"; 
            html += "<td>" + c + " * " + o + " = " + operacion + "</td>";
            html += "</tr>";
        }
        html += "</table>";
    }
    document.getElementById('mul').innerHTML = html;;
}

function borrar() {
    console.clear();
}
