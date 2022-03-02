const {body} = require(`express-validator`)

exports.validate = [
    // validadi password
    body(`password`)
    .isLength({min: 8})
    .withMessage(`Passwort mindestens 8 Zeichen`)
    .notEmpty()
    .withMessage(`Passwort muss ausgefüllt werden`),

    //validasi username
    body(`usename`).notEmpty()
    .withMessage(`Benutzername muss ausgefüllt werden`),

    // validasi nama_user
    body(`nama_user`).notEmpty()
    .withMessage(`Name des Benutzers muss ausgefüllt werden`)
]