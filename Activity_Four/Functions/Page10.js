//Resolve action

function sueldo() {
    let s = document.getElementById('diezT');
    if (s.value != "") {
        s = s.value;
        console.log(s);
        calculadora(s);
    } else {
        document.getElementById('data').textContent = 'Ingrese algún valor';
    }
}

function calculadora(sueldo) {
    ActionMovil();
    let salud = sueldo * 0.125;
    let pension = sueldo * 0.16;
    let arl = sueldo * 0.05;
    let par = sueldo * 0.09;
    let total = salud+pension+arl+par;
    console.log('Factura : '+total);

    let html = '';
    html += 'Ingreso: ' +sueldo+'<br>';
    html += 'Pensión: ' + pension+'<br>';
    html += 'Salud: ' + salud+'<br>';
    html += 'ARL: ' + arl+'<br>';
    html += 'Parafiscales: ' + par+'<br>';
    html += 'Factura: ' +total+'<br>';

    document.getElementById('data').innerHTML = html;
}

function ActionMovil(){
    console.clear();
    document.getElementById('data').value = "";
    document.getElementById('diezT').value = "";
}