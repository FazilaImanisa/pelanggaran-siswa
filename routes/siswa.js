const express = require(`express`)
const app = express()

app.use(express.json()) // membaca data dalam format json

let siswaController = require("../controllers/siswaController")

// end-point get data siswa
app.get("/", siswaController.getDataSiswa)

// end-point add data siswa
app.post("/", siswaController.addDataSiswa)

// end-point edit data siswa
app.put("/:id_siswa", siswaController.editDataSiswa)

// end-point delete data siswa
app.delete("/:id_siswa", siswaController.deleteDataSiswa)

module.exports = app