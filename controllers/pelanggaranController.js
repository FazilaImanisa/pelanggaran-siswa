const req = require("express/lib/request")

// memanggil file model untuk Pelanggaran
let modelPelanggaran = require("../models/index").pelanggaran


exports.getDataPelanggaran = (request, response) => {
    modelPelanggaran.findAll()
    .then(result => {
        return response.json(result)
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.findPelanggaran = async (request, response) => {
    let keyword = request.body.keyword
    let sequelize = require(`sequelize`)
    let Op = sequelize.Op

    let dataPelanggaran = await modelPelanggaran.findAll({
        where: {
            nama_pelanggaran : { [Op.like]: `%${keyword}%`}
        }
    })

    return response.json(dataPelanggaran)
}

exports.addDataPelanggaran = (request, response) => {
    // tampung data request
    let newPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.create(newPelanggaran)
    .then(result => {
        return response.json({
            message: `JIAKH Data pelanggaran berhasil ditambahkan`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.editDataPelanggaran = (request, response) => {
    let id = request.params.id_pelanggaran
    let dataPelanggaran = {
        nama_pelanggaran: request.body.nama_pelanggaran,
        poin: request.body.poin
    }

    modelPelanggaran.update(dataPelanggaran, { where: {id_pelanggaran: id} })
    .then(result => {
        return response.json({
            message: `JIAKH Data pelanggaran berhasil diubah`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

exports.deleteDataPelanggaran = (request, response) => {
    let id = request.params.id_pelanggaran

    modelPelanggaran.destroy({where: {id_pelanggaran: id}})
    .then(result => {
        return response.json({
            message: `JIAKH Data pelanggaran berhasil dihapus`
        })
    })   
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
}

// fungsi utama berada di file controllers 
// yang menerima request dan menghasilkann response