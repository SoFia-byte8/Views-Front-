//console.log("Hello Work");

var btn = document.getElementById('btn'); 
var txtExit = document.getElementById('txtExit');
var names = [];

/*Rules
1: Si es valor es ""(vacio) que muestre todos los nombre digitados.
2: No pueden haber nombres repetidos.
3: DROP en Ingresados, correctamente.
4: Generar conteo de los registros Ingresados.
*/

count(names);
btn.addEventListener('click', () =>  {
    var txtGo = document.getElementById('txtGo');
    if (txtGo != " ") { 
        if (!existencia(txtGo)) {
            names.push(txtGo); 
        } else {
            txtExit.innerHTML = " El Nombre: " + txtGo + " Existe."; 
            console.log("Exists :" + txtGo);
        }
    } else {
        mostrarArreglo();
        console.log("Show All");
    }
    count(names);
    borrar();
});
function count(names){ 
    var count = document.getElementById('count');

    if(names.length == 0){
        count.value = 0;
    }
    for(var i = 0; i < names.length ; i++){
        count.value=i+1;
    }
}
function reset(){ 
    document.getElementById('count').value = 0;  
    names=[]; 
    console.clear(); 
    txtExit.textContent=""; 
}
function existencia(txtGo) {
    var aux = false;
    for (var use of names) {      
        if (txtGo == use) {
            aux=true;
        }
    }
    return aux;
}
function mostrarArreglo() {
    for (var user of names) {
        var p = document.createElement("p");
        p.textContent=user;
        txtExit.appendChild(p);
    }
}
function borrar() {
    txtGo.value = "";
}