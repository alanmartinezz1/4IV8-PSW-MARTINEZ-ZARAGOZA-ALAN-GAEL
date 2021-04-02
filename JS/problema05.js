function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function porcentaje(){
    var valor = document.formulario.nm.value;
    var valor2 = document.formulario.nh.value;
    var uno = parseInt(valor);
    var dos = parseInt(valor2);
    var na = uno+dos;
    var totalh = (dos*100)/na;
    var totalm = (uno*100)/na;

    document.formulario.hombres.value = totalh + "%";
    document.formulario.mujeres.value = totalm + "%";
}

function borrar(){
    document.formulario.nm.value = "";
    document.formulario.nh.value = "";
    document.formulario.hombres.value = "";
    document.formulario.mujeres.value = "";
}