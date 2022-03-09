const express = require(`express`)
const app = express()
const authorization = require("../middlewares/authorization")

app.use(express.json()) // membaca data dalam format json

let pelanggaranController = require("../controllers/pelanggaranController")

// end-point get data siswa
app.get("/", [authorization.authorization], pelanggaranController.getDataPelanggaran)

// end-point add data siswa
app.post("/", [authorization.authorization], pelanggaranController.addDataPelanggaran)

// end-point find pelanggaran
app.post("/find", [authorization.authorization], pelanggaranController.findPelanggaran)

// end-point edit data siswa
app.put("/:id_pelanggaran", [authorization.authorization], pelanggaranController.editDataPelanggaran)

// end-point delete data siswa
app.delete("/:id_pelanggaran", [authorization.authorization], pelanggaranController.deleteDataPelanggaran)

module.exports = app