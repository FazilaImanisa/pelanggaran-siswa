const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const db = require("../db")

const secret = '#$@^%$^%*&%$$@&'

function hashPassword(password){
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(password, salt)
}

module.exports = {
    registrasi: (req, res) => {
        const {nama_lengkap, email, password} = req.body
        if (!nama_lengkap, !email || !password) res.status(402).json({messase: 'nama lengkap, email da password harus diisi.'}) 
        
        return db.query('insert into user set ?', {nama_lengkap, email, password: hashPassword(password)}, (err, result) => {
            if (err) return res.status(500).json({ err }) 

            return res.json({ message: 'registrasi berhasil bestie', data: result})
        })   
        
    }
}