function nav() {

    let html = "";

    html += ' <div class="title-js">';
    html += ' <h1 id="JavaScriptText">Taller JavaScript</h1>';
    html += '</div>';

    html += '<nav class="Principal-menu">';
    html += ' <ul class="estiloInterior">';
    html += '   <a href="1.html">Par o Impar</a>';
    html += '  <a href="2.html">Tabla Multiplicar 1</a>';
    html += '  <a href="3.html">Tabla Multiplicar 2</a>';
    html += '   <a href="4.html">Primo si o no?</a>';
    html += '   <a href="5.html">Orden Ascendente</a>';
    html += '   <a href="6.html">El nombre existe o no?</a>';
    html += '   <a href="7.html">Nombres mayor y menor</a>';
    html += '  <a href="8.html">Palindromo?</a>';
    html += '  <a href="9.html">Fibonacci</a>';
    html += '  <a href="10.html">Parafiscales</a>';
    html += '   </ul>';
    html += ' </nav >';

    document.getElementById('nav').innerHTML = html;

}

nav();