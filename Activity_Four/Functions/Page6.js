//Datos de los Vectores, asignando cierto nivel de Rangos u/o Parametros
// edad = [12,50,23,11,18,35,41,85,16,45]
// nombre = ["juan", "maria", "tereza", "pedro", "javier", "ana", "diana", "jorge",
// "dayana", "lady"]

function existe() {
    var text = document.getElementById('name');
    text = text.value;
    if (text == "") {
        document.getElementById('exitParner').textContent = ('Ingrese un nombre');
    } else {
        console.log('El texto digitado fue : ' + text);       
        if(comprobar(text)){
            console.log('El Nombre existe ');       
        }else{
            console.log('El Nombre no existe ');
            document.getElementById('exitParner').textContent = ('El Nombre No existe, Verifique la Identidad ');
        }
    }
}

function comprobar(t) {
    borrar();
    var edad = [12, 50, 23, 11, 18, 35, 41, 85, 16, 45];
    var nombre = ["juan", "maria", "tereza", "pedro", "javier", "ana", "diana", "jorge", "dayana", "lady"];
    document.getElementById('exitParner').value=('El Texto Digitado fue : ' + t );
    var existe = false;
    for (var i = 0; i <= nombre.length; i++) {
        if (nombre[i] == t) {
            existe= true;
            console.log('La edad de : ' + nombre [i] + ' es : ' + edad [i] );
            mostrar(nombre [i] , edad [i] )
        break;
        }
    }

    return existe;
}
function mostrar(n, e){
    document.getElementById('exitParner').textContent = ('El Nombre :'  +  n  + ',' + 'Existe' + ' y su Edad es : ' + e);
}

function borrar(){
    console.clear();
    document.getElementById('name').value= " ";
    document.getElementById('exitParner').textContent = (" ");
}