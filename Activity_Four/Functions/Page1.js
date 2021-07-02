//Leer un número y definir si es par o impar
function parOimpar(){
    let text = document.getElementById('unoNumero');
    if(text.value != ""){
        var num = parseInt(text.value);
        mensaje(num);
    }else{
        console.log("Ingrese un valor");

        document.getElementById('unoAlarm').value="Ingrese un valor";
    }
}

function operacion(num){
    var operacion = num / 2; 
    var aux = false;
    if(operacion != parseInt(operacion) ){
        aux=true;
    }
    return aux;
}

function mensaje(num){
    borar();
    if(!operacion(num)){
        document.getElementById('unoAlarm').value =( num + " Es par ");
        console.log(num + ' Es par');
    }else {
        document.getElementById('unoAlarm').value =( num + " Es Impar ");
        console.log(num + ' Es Impar');
    }
}

function borar(){
    document.getElementById('unoNumero').value="";
    console.clear();
}