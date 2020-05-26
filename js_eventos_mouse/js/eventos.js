function cambioFotoAstronauta(){
    document.getElementById('Astronauta').style="width:50%"
}


function cambioFotoExtraterrestre(){
    document.getElementById('Extraterrestre').style="-webkit-filter:blur(5px);filter:blur(5px);"
}

function cambioFotoPlanetas(){
    document.getElementById('planetas').style="filter:hue-rotate(90deg);-webkit-filter: hue-rotate(90deg);"
}


function cambioFotoNave(){
    document.getElementById('nave_espacial').style="filter: sepia(100%);-webkit-filter:sepia(100%);"
}

function eventoOnFocus(event){
    var seleccion = event.currentTarget.id
    switch (seleccion){
        case"animales":
            document.getElementById('sel_animales').disable = false
            $(document).ready(function(){$('select').material_select()})
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
    switch (seleccion){
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
