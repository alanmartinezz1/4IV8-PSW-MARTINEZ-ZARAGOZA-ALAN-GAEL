function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function sueldo(){
    var valor = document.formulario.horas.value;
    var valor2 = document.formulario.pago.value;
    var uno = parseInt(valor);
    var dos = parseInt(valor2);
    
    if (uno > 48) {
        var trabajo = uno - 48;
        var total = 40 * dos + (8 * dos * 2) + (trabajo * dos * 3);
    } else {
        if (uno > 40) {
            var trabajooo = uno - 40;
            var total = 40 * dos + (trabajooo * dos * 2)
        } else {
            var total = uno * dos;
        }
    }

    document.formulario.sueldooo.value = total + " $";
}

function borrar(){
    document.formulario.horas.value = "";
    document.formulario.pago.value = "";
    document.formulario.sueldo.value = "";
}