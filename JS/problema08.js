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
    var valor3 = document.formulario.ntres.value;
    var uno = parseInt(valor);
    var dos = parseInt(valor2);
    var tres = parseInt(valor3);
    
    if(uno > dos){
        if(uno > tres){
            var mayor = uno;
        }else{
            var mayor = tres;
        }
    }else if(uno == dos == tres){
        var mayor = "Son iguales.";
    }else{
        if(dos > tres){
            var mayor = dos;
        }else{
            var mayor = tres;
        }
    }

    document.formulario.resultado.value = mayor;
    
}

function borrar(){
    document.formulario.nuno.value = "";
    document.formulario.ndos.value = "";
    document.formulario.ntres.value = "";
    document.formulario.resultado.value = "";
}
