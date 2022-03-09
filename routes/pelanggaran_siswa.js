const express = require(`express`)
const app = express()
const authorization = require("../middlewares/authorization")

app.use(express.json())

let pelanggaranSiswaController = require(`../controllers/pelanggaranSiswaController`)

app.get("/", [authorization.authorization], pelanggaranSiswaController.getData)
app.get("/:id_siswa", [authorization.authorization], pelanggaranSiswaController.eachSiswa)
app.post("/", [authorization.authorization], pelanggaranSiswaController.addData)
app.post("/find", [authorization.authorization], pelanggaranSiswaController.filterPelanggaran)
app.put("/:id_pelanggaran_siswa", [authorization.authorization], pelanggaranSiswaController.updateData)
app.delete("/:id_pelanggaran_siswa", [authorization.authorization], pelanggaranSiswaController.deleteData)

module.exports = app

// file routes mengatur fungsi nya yang mana -> di dalam file controllers