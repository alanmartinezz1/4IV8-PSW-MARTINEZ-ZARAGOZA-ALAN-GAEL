function validarn(e){
    var teclado = (document.all)?e.keyCode:e.which;
    if(teclado == 8)return true;

    var patron = /[0-9\d .]/;

    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);


}

function edades(){
    var valor = document.formulario.da.value;
    var valor2 = document.formulario.ma.value;
    var valor3 = document.formulario.aa.value;
    var uno = parseInt(valor);
    var dos = parseInt(valor2);
    var tres = parseInt(valor3);

    var valor4 = document.formulario.dn.value;
    var valor5 = document.formulario.mn.value;
    var valor6 = document.formulario.an.value;

    var año = valor3-valor6;
    
    if((valor2 >= valor5) && (valor4 >= valor)){
        var edadd = año;
        document.formulario.edad.value = edadd + " años.";
    }else{
        var edadd = año - 1;
        document.formulario.edad.value = edadd + " años.";
    }

}

function borrar(){
    document.formulario.da.value = "";
    document.formulario.ma.value = "";
    document.formulario.aa.value = "";
    document.formulario.dn.value = "";
    document.formulario.mn.value = "";
    document.formulario.an.value = "";
    document.formulario.edad.value = "";
}