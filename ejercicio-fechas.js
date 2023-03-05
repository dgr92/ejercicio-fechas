// Dado el formulario HTML.
// Al pulsar el botón de añadir fecha, se añadirá la fecha correcta a un array. Debe ser indicado por un alert.
// Al pulsar el botón de mostrar fechas, se debe mostrar la fecha mayor, la menor y el número de fechas introducidas.

let date = [],
    i = 0;
    

const addDate = () => {

    date[i] = new Date( formFechas.fecha.value );
        if( date[i] == "Invalid Date" ){
            alert( "Introduzca la fecha correctamente" );
            return;
        }
    alert( `Se ha añadido la fecha:  ${date[i].toLocaleDateString()}` );
    i++;
}



const showResult = () => {

    // Fecha mayor
    let dateH = date[0];

    for (let n = 1; n < date.length; n++) {
        if( date[n] > dateH ){
            dateH = date[n];
        }    
    }

    dateH = dateH.toLocaleDateString();
    document.getElementById( "fechaMayor" ).innerHTML = dateH;

    // Fecha menor
    let dateL = date[0];

    for (let n = 1; n < date.length; n++) {
        if( date[n] < dateL ){
            dateL = date[n];
        }   
    }

    dateL = dateL.toLocaleDateString();
    document.getElementById( "fechaMenor" ).innerHTML = dateL;


    // Numero de fechas
    let nDate = date.length;
    document.getElementById( "numFechas" ).innerHTML = nDate;


}