function mostrar_tecla(event){
    var tecla = event.which || event.keyCode;
    document.querySelector("#tarjeta_muestra_tecla #texto_tarjeta")
        .innerHTML="Presionaste la tecla: "+String.fromCharCode(tecla);
}
