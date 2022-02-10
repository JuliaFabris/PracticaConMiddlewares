let controller = {

    index: (req, res) => {
        res.render('index')
    },
    admin: (req, res) => {
        res.send('Bienvenidos administradores!!!')
    }
}



module.exports = controller;