let fs = require("fs");  



module.exports = createProject = { 

    create : (nyr) => { 
        
        fs.mkdir( nyr ,(err) =>{
            if (err) {
                console.log("ERORR CARPETA MAESTRA :/ "+err);
            }
        })
        fs.mkdir( nyr +"/css",(err) =>{
            if (err) {
                console.log("ERROR CARPETA CSS :/ "+err);
            }
        })
        fs.mkdir( nyr +"/js",(err) =>{
            if (err) {
                console.log("ERORR CARPETA JS :/ "+err);
            }
        })
        
        // -----------------------------
            
        fs.copyFile("./src/style.txt", nyr + "/css/style.css", (err)=>{
            if (err) {
                console.log("ERROR ARCHIVO CSS :/ "+err);
            }
        });
        
        fs.copyFile("./src/app.txt", nyr + "/js/app.js", (err)=>{
            if (err) {
                console.log("ERROR ARCHIVO JS :/ "+err);
            }
        });
        
        fs.copyFile("./src/index.txt", nyr + "/index.html", (err)=>{
            if (err) {
                console.log("ERROR ARCHIVO HTML :/ "+err);
            }
        });
               
       
    }, // fin create
}; // fin crearProyecto