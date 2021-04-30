/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function validarCosas(formulario){
    
    //caracteres
    
    if(formulario.nombre.value.length < 3){
        alert("Por favor, escribe más de tres caracteres");
        formulario.nombre.focus();
    return false;
    }
    
    if(formulario.appat.value.length < 3){
        alert("Por favor, escribe más de tres caracteres");
        formulario.appat.focus();
    return false;
    }
    
    if(formulario.apmat.value.length < 3){
        alert("Por favor, escribe más de tres caracteres");
        formulario.apmat.focus();
    return false;
    }
    
    //letras

    var checkOk="QWERTYUIOPASDFGHJKLÑZXCVBNM+"+"qwertyuiopasdfghjklñzxcvbnm"+" ";
    var checkNombre=formulario.nombre.value;
    var checkAppat=formulario.appat.value;
    var checkApmat=formulario.apmat.value;
    var allValid=true;
    
    for(var i=0; i<checkNombre.length;i++){
        var ch=checkNombre.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }
    
    for(var i=0; i<checkAppat.length;i++){
        var ch=checkAppat.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }
    
    for(var i=0; i<checkApmat.length;i++){
        var ch=checkNombre.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }

    //numeros
    
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
    
    var checkStr = formulario.ideliminar.value;
    
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
        formulario.ideliminar.focus();
        return false;
    }
    
    //email
    
    var txt = formulario.email.value;
    //expresion regular
    //         algo  @algo.      .com
    var b = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    alert("Email" + (b.test(txt)?" ":" no ") + "valido");
    return b.test(txt);
    
}