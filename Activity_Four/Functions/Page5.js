// Cargar el Vector Edad = [12,50,23,11,18,35,41,85,16,45], Ordenarlos en forma ascendiente.

desorden();
function desorden() {
    var edad = [12, 50, 23, 11, 18, 35, 41, 85, 16, 45];
    var htmlE = document.getElementById('cincotable');
    console.log('Edades : ' + edad);
    htmlE.innerHTML += "<td'>" + edad + "</td>";
    orden(edad);
}

function orden(edad) {
    for (var i = 0; i <= edad.length; i++) {
        for (var o = 0; o <= (edad.length); o++) {
            if (edad[o] > edad[o + 1]) {
                var aux = edad[o];
                edad[o] = edad[o + 1];
                edad[o + 1] = aux;
            }
        }
    }
    mostrar(edad);
}

function mostrar(edad) {
    var htmlS = document.getElementById('cincotable2');
    htmlS.innerHTML += '<td>' + edad + '</td>';
    console.log('Edad Ordenadas: ' + edad);
}
