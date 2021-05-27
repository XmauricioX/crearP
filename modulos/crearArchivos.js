let fs = require("fs");  
module.exports = function ca(nyr,err) {
    if (err) {
        console.log("Algo salio mal con los archivos :/ "+err);
    } 
    else {
        
    fs.copyFile("./src/style.txt", nyr + "/css/style.css", (err)=>{
        if (err) {
            console.log("ERROR ARCHIVOS :/ "+err);
        }
    });
    
    fs.copyFile("./src/app.txt", nyr + "/js/app.js", (err)=>{
        if (err) {
            console.log("ERROR ARCHIVOS :/ "+err);
        }
    });
    
    fs.copyFile("./src/index.txt", nyr + "/index.html", (err)=>{
        if (err) {
            console.log("ERROR ARCHIVOS :/ "+err);
        }
    });
           
    }
}

    