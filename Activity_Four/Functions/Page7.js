// Partiendo de los vectores anteriores buscar el menor y el mayor y presentar sus respectivos nombres con su edad. 

desorden(); 
function desorden(){
var edad = [12,50,23,11,18,35,41,85,16,45];
var nombre = ["Juan", "Maria", "Tereza", "Pedro", "Javier", "Ana", "Diana", "Jorge","Dayana", "Lady"];
document.getElementById('sieteO').textContent = nombre;
orden(nombre, edad);
}

function orden(nombre, edad){
    for(var i=0 ; i <= nombre.length ; i++){
        for(var o=0 ; o <= nombre.length ; o++){

            if(nombre[o] > nombre[o+1]){
                var aux = nombre[o];
                nombre[o] = nombre[o+1];
                nombre[o+1] = aux;
            }
        }
    }
    var nombrem = nombre[0];
    var nombreM = nombre[(nombre.length)-1];
    mostrar(nombre, nombrem, nombreM, edad);
}

function mostrar(nombre, nombrem, nombreM, edad){
    console.log('Orden = '+ nombre);
    document.getElementById('sieteD').textContent = ' Mayor = ' + nombreM + ' y ' + ' menor = ' + nombrem;
}