function patito(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    return numero;
}

function jugar(opcion) {
    var colores = ["red","blue","green"]
    var tabla = document.getElementById("tabla");
    



    
    var piedra = 0;
    var papel = 1;
    var tijera = 2;


    var opciones = ["Piedra", "Papel", "Tijera"];
    var opcionesObjeto = {
        Piedra: 0,
        Papel: 1,
        Tijera: 2
    }
    var opcionUsuario = opcionesObjeto[opcion]
    var opcionMaquina = patito(0, 2);
    tabla.innerHTML += "<center><p  style='color:"+ colores[opcionUsuario]+ "'>El usuario eligio: " + opcion + "</p></center>"
    
    tabla.innerHTML += "<center><p style='color:"+ colores[opcionMaquina]+"'>Maquina eligio: " + opciones[opcionMaquina] + "</p></center>"
    if (opcionUsuario == piedra)

    {
        if (opcionMaquina == piedra) {
            tabla.innerHTML += "<p><center>Empate -_-</center></p>";
        } else if (opcionMaquina == papel) {
            tabla.innerHTML += "<p><center>Perdiste .l. -_- .l.</center></p>";
        } else if (opcionMaquina == tijera) {
            alert("ganaste");
            tabla.innerHTML += "<p><center>Ganaste </center></p>";
        }
    } else if (opcionUsuario == papel) {
        if (opcionMaquina == piedra) {
            alert("ganaste");
            tabla.innerHTML += "<p><center>Ganaste </center></p>";
        } else if (opcionMaquina == papel) {
            tabla.innerHTML += "<p><center>Empate -_-</center></p>";
        } else if (opcionMaquina == tijera) {
            tabla.innerHTML += "<p><center>Perdiste .l. -_- .l.</center></p>";
        }
    } else if (opcionUsuario == tijera) {
        if (opcionMaquina == piedra) {
            tabla.innerHTML += "<p><center>Perdiste .l. -_- .l.</center></p>";
        } else if (opcionMaquina == papel) {
            alert("ganaste");
            tabla.innerHTML += "<p><center>Ganaste </center></p>";
        } else if (opcionMaquina == tijera) {
            tabla.innerHTML += "<p><center>Empate -_-</center></p>";
        }
    }
}