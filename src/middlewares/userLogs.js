const fs = require('fs');

function userLog (req, res, next) {
    fs.appendFileSync('src/logs/userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`)
    /* En la ruta ya definida src y log, crea userLogs.txt, irá escribiendo todas las rutas donde ingresa el usuario */
    next()
}


module.exports = userLog;