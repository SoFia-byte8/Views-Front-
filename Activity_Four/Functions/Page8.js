// Dado una palabra definir si es palíndromo o no.

function comprobar() {
    var text = document.getElementById('8Text');
    text = text.value;
    if (text == "") {
        console.log('Ingrese una palabra');
        document.getElementById('count').textContent = ('Ingrese una palabra');
    } else {
        var textArray = text.split(""); 
        console.log('Palabra : ' + textArray);
        console.log('Tamaño : ' + textArray.length);

        var tamaño = textArray.length; 
        var contador = 0;  
        var final = tamaño-1;   
        console.log('End : ' + final);

        for (var i=0 ; i<tamaño; i++) {
            console.log(textArray[i]);
            if(textArray[i] == textArray[final]){
                contador++;
            }
                final--;
        }
        for (var e=textArray.length ; e >= 0; e--) {
            console.log(textArray[e]);
        }
        console.log('contador : '+ contador);
        if(contador == tamaño){
            console.log("Palindrome");
            document.getElementById('count').textContent = (text + ' es Palindrome');
        }else{
            console.log("No Palindrome");
            document.getElementById('count').textContent = (text + ' no es Palindrome');
        } 
    }
}