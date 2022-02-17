const req = require("express/lib/request")

// memanggil file model untuk Pelanggaran
let modelPelanggaran_siswa = require("../models/index").pelanggaran_siswa


exports.getDataPelanggaran_siswa = (request, response) => {
    modelPelanggaran_siswa.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.addDataPelanggaran_siswa = (request, response) => {
    // tampung data request
    let newPelanggaran_siswa = {
        waktu: request.body.waktu,
        id_siswa: request.body.id_siswa,
        id_user: request.body.id_user
    }

    modelPelanggaran_siswa.create(newPelanggaran_siswa)
    .then(result => {
        return response.json({
            message: `JIAKH Data pelanggaran siswa berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataPelanggaran_siswa = (request, response) => {
    let id = request.params.id_pelanggaran_siswa
    let dataPelanggaran_siswa = {
        waktu: request.body.waktu,
        id_siswa: request.body.id_siswa,
        id_user: request.body.id_user
    }

    modelPelanggaran_siswa.update(dataPelanggaran_siswa, { where: {id_pelanggaran: id} })
    .then(result => {
        return response.json({
            message: `JIAKH Data pelanggaran siswa berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataPelanggaran_siswa = (request, response) => {
    let id = request.params.id_pelanggaran_sewa

    modelPelanggaran_siswa.destroy({where: {id_pelanggaran_sewa: id}})
    .then(result => {
        return response.json({
            message: `JIAKH Data pelanggaran siswa berhasil dihapus`
        })
    })   
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}