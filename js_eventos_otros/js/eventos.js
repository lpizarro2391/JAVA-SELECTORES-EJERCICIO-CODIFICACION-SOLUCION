function cambiarRadioButtons(){
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

function cargarPagina(){
    alert('Se ha cargado la página')
}

document.getElementsByTagName('body')[0].onload = cargarPagina;


function eventoOnFocus(event) {
    var seleccion = event.currentTarget.id
    switch (seleccion) {
        case "animales":
            document.getElementById('sel_animales').disable = false
            $(document).ready(function () { $('select').material_select() })
            break
        case "postres":
            document.getElementById('sel_postres').disable = false
            $(document).ready(function () { $('select').material_select() })
            break
        case "musica":
            document.getElementById('sel_musica').disable = false
            $(document).ready(function () { $('select').material_select() })
            break;
        default:
    }
}


function eventoOnBlur(event) {
    var seleccion = event.currentTarget.id;
    switch (seleccion) {
        case "animales":
            document.getElementById('sel_animales').disable = true
            $(document).ready(function () { $('select').material_select() })
            break
        case "postres":
            document.getElementById('sel_postres').disable = true
            $(document).ready(function () { $('select').material_select() })
            break
        case "musica":
            document.getElementById('sel_musica').disable = true
            $(document).ready(function () { $('select').material_select() })
            break
        default:
    }
}


function asignarEventoRB() {
    document.getElementById('animales').onfocus = evento0nFocus
    document.getElementById('postres').onfocus = evento0nFocus
    document.getElementById('musica').onfocus = evento0nFocus

    document.getElementById('animales').onblur = evento0nFocus
    document.getElementById('postres').onblur = evento0nFocus
    document.getElementById('musica').onblur = evento0nFocus

}

asignarEventoRB()