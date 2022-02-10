const fs = require('fs');

function userLog (req, res, next) {
    fs.appendFileSync('src/logs/userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`)
    /* En la ruta ya definida src y log, dentro creará userLogs.txt alli irá escribiendo todas las acciones del usuario */
    next()
}


module.exports = userLog;