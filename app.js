
let ca = require("./modulos/crearArchivos");
let cf = require("./modulos/crearCarpetas");
let nyr = "../Proyecto";

function ct(nyr,err){
    if (err) {
        console.log("FATAL ERROR "+err);
    } else {
        cf(nyr);
        ca(nyr);
        console.log("Tu Proyecto Fue creado exitosamente :)")    
    }
};
ct(nyr)
