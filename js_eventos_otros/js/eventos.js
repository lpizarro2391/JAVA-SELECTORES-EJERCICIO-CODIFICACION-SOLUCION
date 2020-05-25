function cambiarRadioButton(){
    var estadoRB=document.getElementById('activar_rb').checked; 
    if(estadoRB){
        var estado = "true"
        document.getElementById('animales').disable = false
        document.getElementById('postres').disable = false
        document.getElementById('musica').disable = false
    }else{
        document.getElementById('animales').disable = true
        document.getElementById('postres').disable = true
        document.getElementById('musica').disable = true
    }
}