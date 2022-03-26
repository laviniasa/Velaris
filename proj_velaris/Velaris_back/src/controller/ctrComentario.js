const Comentario = require('../model/Comentario')
const Usuario = require('../model/Usuario')

const create = async (req, res) => {
    const data = req.body;

    const ret = await Comentario.create(data)
    res.json(ret)
}

const read = async (req, res) => {
    const id = req.params.id;
    let id_comentario = req.params.id_comentario
    let filtro = {};
    
    if(id != undefined) filtro = {where : { id:id }}

    filtro.attributes = { 
        exclude : ['id_usuario']
    }

    filtro.include = [
        { model : Usuario, attributes: {exclude: [ 'senha' ] }}
    ]

    if(id_comentario !== undefined) {
        filtro.include[0].where = {id : id_comentario}
    }


    const ret = await Comentario.findAll(filtro)

    res.json(ret)
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    let ret = await Comentario.update(data, {where: { id:id }})
    ret = await Comentario.findAll({where : {id:id}});

    res.json(ret)
}

const remove = async (req, res) => {
    const id = req.params.id;
    const ret = await Comentario.destroy({where : { id:id }});

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