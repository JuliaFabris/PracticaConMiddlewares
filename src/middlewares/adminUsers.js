const ADMIN_USERS = [ "Ada", "Greta", "Vim", "Tim" ]; 

function adminUsers (req, res, next) {
    if (req.query.user == "Ada" || req.query.user == "Greta" || req.query.user == "Vim" || req.query.user == "Tim") {
      next()
    } else {
        res.send("No tienes los privilegios para ingresar")
    }
}


/* Entonces en la ruta para llegar a los admin pondria:
localhost:3000/admin?user=('nombre del admin') */
module.exports = adminUsers;