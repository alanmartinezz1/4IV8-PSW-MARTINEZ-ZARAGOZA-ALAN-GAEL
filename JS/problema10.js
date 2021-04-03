function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function utilidadd(){
    var valor = document.formulario.tiempo.value;
    var uno = parseInt(valor);
    
    var por = 5;
    var por2 = 7;
    var por3 = 10;
    var por4 = 15;
    var por5 = 20;

    if(uno <= 1){
        document.formulario.porcentaje.value = "Tiene "+ por +" % del salario.";
    }else if(uno >= 1 && uno < 2){
        document.formulario.porcentaje.value = "Tiene "+ por2 +" % del salario.";
    }else if(uno >= 2 && uno < 5){
        document.formulario.porcentaje.value = "Tiene "+ por3 +" % del salario.";
    }else if(uno >= 5 && uno < 10){
        document.formulario.porcentaje.value = "Tiene "+ por4 +" % del salario.";
    }else(uno >= 10);{
        document.formulario.porcentaje.value = "Tiene "+ por5 +" % del salario.";
    }

    
}

function borrar(){
    document.formulario.tiempo.value = "";
    document.formulario.porcentaje.value = "";
}