function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function calculo(){
    var valor = document.formulario.nuno.value;
    var valor2 = document.formulario.ndos.value;
    var uno = parseInt(valor);
    var dos = parseInt(valor2);
    
    if(uno == dos){
        var total = uno*dos;
        document.formulario.resultado.value = ""+total;
    }
    if(uno > dos){
        var total = uno-dos;
        document.formulario.resultado.value = ""+total;
    }
    if(uno < dos){
        var total = uno+dos;
        document.formulario.resultado.value = ""+total;
    }
}

function borrar(){
    document.formulario.nuno.value = "";
    document.formulario.ndos.value = "";
    document.formulario.resultado.value = "";
}