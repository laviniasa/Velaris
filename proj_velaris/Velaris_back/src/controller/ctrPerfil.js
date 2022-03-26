const Perfil = require('../model/Perfil')
const Comentario = require('../model/Comentario')
const Atendente = require('../model/Atendente')
const Usuario = require('../model/Usuario')
const Livro = require('../model/Livro')

const create = async (req, res) => {
    const data = req.body;

    const ret = await Perfil.create(data)
    res.json(ret)
}

const read = async (req, res) => {
    const id = req.params.id;
    let id_perfil = req.params.id_perfil
    let filtro = {};
    
    if(id != undefined) filtro = {where : { id:id }}

    filtro.attributes = { 
        exclude : ['id_comentario', 'id_atendente', 'id_usuario', 'id_livro']
    }

    filtro.include = [
        { model : Comentario},
        { model : Atendente, attributes: {exclude: [ 'senha' ] }},
        { model : Usuario, attributes: {exclude: [ 'senha' ] }},
        { model : Livro}
    ]

    if(id_perfil !== undefined) {
        filtro.include[0].where = {id : id_perfil}
    }

    const ret = await Perfil.findAll(filtro)

    res.json(ret)
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    let ret = await Perfil.update(data, {where: { id:id }})
    ret = await Perfil.findAll({where : {id:id}});

    res.json(ret)
}

const remove = async (req, res) => {
    const id = req.params.id;
    const ret = await Perfil.destroy({where : { id:id }});

    if (ret == 1){
        res.json({ id:id })
    }else{
        res.status(400).send();
    }

}

module.exports = {
    create,
    read,
    update,
    remove
}