let fs = require("fs");  
module.exports = function cf(nyr,err){
    if (err) {
        console.log("Algo salio mal con las carpetas :/ "+err);
    }
    else{
    fs.mkdir( nyr ,(err) =>{
        if (err) {
            console.log("ERORR CARPETAS :/ "+err);
        }
    })
    fs.mkdir( nyr +"/css",(err) =>{
        if (err) {
            console.log("ERROR CARPETAS :/ "+err);
        }
    })
    fs.mkdir( nyr +"/js",(err) =>{
        if (err) {
            console.log("ERORR CARPETAS :/ "+err);
        }
    })
    }
};


