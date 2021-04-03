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
    var cuatro = parseInt(valor4);
    var cinco = parseInt(valor5);
    var seis = parseInt(valor6);

    var año = tres-seis;
    
    if(dos >= cinco && cuatro >= uno){
        var edadd = año;
        document.formulario.edad.value = edadd + " años.";
    }else if(dos <= cinco && cuatro < uno);{
        var edadd = año - 1;
        document.formulario.edad.value = edadd + " años.";
    }

    if(valor3 > 2100 || valor6 > 2021){
        document.formulario.edad.value = "Viaje en el tiempooo";
    }

    if(valor6 < 1920){
        document.formulario.edad.value = "Eres muy viejo 0.o";
    }
    if(valor3 < 2021){
        document.formulario.edad.value = "¿seguro?";
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