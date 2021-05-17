var apptelefonos= {};
var mistelefonos = (datos)=>{
 apptelefonos = datos;
 var html = ""
 html +="<h2> los Telefonos del grupo de programacion web </h2>"
apptelefonos.map((telefonos) =>{
    html += "<img src='" + telefonos.foto + "'></img>"
    html +="<hr/>"
    for(propiedades in telefonos){
        html +=  "<li type=>" + propiedades + " : " + telefonos[propiedades] + "</li>"
    }
    html += "<hr/>"
});

    document.getElementById("resultados").innerHTML = html;
} //fin de la funcion misTelefonos
