const express = require(`express`)
const app = express()

app.use(express.json()) // membaca data dalam format json

let pelanggaran_siswaController = require("../controllers/pelanggaran_siswaController")

// end-point get data siswa
app.get("/", pelanggaran_siswaController.getDataPelanggaran_siswa)

// end-point add data siswa
app.post("/", pelanggaran_siswaController.addDataPelanggaran_siswa)

// end-point edit data siswa
app.put("/:id_pelanggaran_siswa", pelanggaran_siswaController.editDataPelanggaran_siswa)

// end-point delete data siswa
app.delete("/:id_pelanggaran_siswa", pelanggaran_siswaController.deleteDataPelanggaran_siswa)

module.exports = app