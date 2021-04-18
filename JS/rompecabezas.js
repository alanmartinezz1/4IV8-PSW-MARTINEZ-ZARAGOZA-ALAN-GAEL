//vamos a obtener los elementos del html po medio de las clases

var piezas = document.getElementsByClassName('movil');

var tamWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];

var tamHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

//enviar esos atributos para que se redimensionen las imagenes

for(var i = 0; i < piezas.length; i++){
    piezas[i].setAttribute("width", tamWidth[i]);
    piezas[i].setAttribute("height", tamHeight[i]);
    //posiciones de las piezas
    piezas[i].setAttribute("x", Math.floor((Math.random()*10)+1));
    piezas[i].setAttribute("y", Math.floor((Math.random()*409)+1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementosSeleccionados = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function seleccionarElemento(evt){
    elementosSeleccionados = reordenar(evt);
    currentX = evt.clienteX;
    currentY = evt.clienteY;

    currentPosX = parseFloat(elementosSeleccionados.attr("x"));
    currentPosY = parseFloat(elementosSeleccionados.attr("y"));

    alert(CurrentPosX);

    elementosSeleccionados.setAttribute("onmousemove", "moverElemento(evt)");

}

function moverElemento(evt){

    //verificar los elementos seleciionados vs el reordenamiento
    elementosSeleccionados = reordenar(evt);

    var dx = evt.clienteX - currentX;
    var dy = evt.clienteY - currentY;

    //posicion
    currentPosX = currentPosX + dx;
    currentPosY = currentPosY + dy;

    elementosSeleccionados.setAttribute("x", currentPosX);
    elementosSeleccionados.setAttribute("y", currentPosY);

    currentX = evt.clienteX;
    currentY = evt.clienteY;

    //cuando queremos deseleccionar

    elementosSeleccionados.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementosSeleccionados.setAttribute("onmouseup", "deseleccionarElemento(evt)");
    
    //funcion de iman

    iman();
}

function deseleccionarElemento(evt){
    //necesito una funcion que sepa que pieza estoy tomando
    testing();
    if(elementosSeleccionados != 0){
        elementosSeleccionados.removeAttribute("onmousemove");
        elementosSeleccionados.removeAttribute("onmouseout");
        elementosSeleccionados.removeAttribute("onmouseup");

        elementosSeleccionados = 0;
    }
}

var entorno = document.getElementById('entorno');

//vamos a ordenar los elementos

function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;
}

//que pasa con pikachu

var origX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
var origY =[100, 100, 100, 233, 204, 233, 33, 7, 366, 337];

//ahora si mi funciin de iman para cuando se coloque de forma erronea la pieza

function iman(){
    for(var i = 0; i < piezas.length; i++){
        if(Math.abs(currentPosX-origX[i])<15 && Math.abs(currentPosY-origY[i])<15){
            elementosSeleccionados.setAttribute("x", origX[i]);
            elementosSeleccionados.setAttribute("y", origY[i]);
        }
    }
}

//Ahora falta saber si están en la posición final del rompecabezas

//para ganar
var win = document.getElementById('win');

function testing(){
    //vamos a saber si está bien ubicada
    var bien_ubicacion = 0;
    var padres = document.getElementsByClassName('padre');
    
    for(var i = 0; i < piezas.length; i++){
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));

        ide = padres[i].getAttribute("id");

        if(origX[ide] == posx && origY[ide] == posy){
            bien_ubicacion = bien_ubicacion + 1;
        }

    }
    if(bien_ubicacion == 9){
        //una funcion pa ganar
        //que mande una alerta
        //yo k se

        //pondremos unaas fanfarrias
        window.PluginArray();
        //poner un audio
    }
}