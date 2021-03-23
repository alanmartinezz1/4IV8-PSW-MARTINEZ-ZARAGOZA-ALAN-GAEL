function validar(formulario){
    /*Queremos validar que se escriban más de cinco caractéres en el campo nombre */

    if(formulario.nombre.value.length < 5){
        alert("Por favor, escribe más de cinco caracteres en el campo nombre")
        formulario.nombre.focus();
    return false;
    }

    /*Validar que sólo acepte letras */

    var checkOk = "QWERTYUIOPASDFGHJKLÑZXCVBNM" + "qwertyuiopasdfghjklñzxcvbnm";
    var checkStr = formulario.nombre.value;
    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;

        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo letras en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    /*Validar sólo números */

    var checkOk = "0123456789";
    var checkStr = formulario.edad.value;
    var allValid = true;

    for(var i = 0; i < checkStr.length; i++){
        var ch = checkStr.charAt(i);
        for(var j = 0; j < checkOk.length; j++)
        if(ch == checkOk.charAt(j))
            break;

        if(j == checkOk.length){
            allValid = false;
            break;
        }
    }

    if(!allValid){
        alert("Escribe solo números en el campo edada");
        formulario.edad.focus();
        return false;
    }

    /*validar correo electronico
    Expresiones regulares
    a poder diferencair una cadena de caracteres
    y definir que caracteres son validos de acuerdo a una condicion */

    var txt = formulario.email.value;
    //expresion regular
    //         algo  @algo.      .com
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?" ":" no ") + "valido");
    return b.test(txt);


}