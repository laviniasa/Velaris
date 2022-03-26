
const Leitura = require('../model/Leitura')

const create = async (req, res) => {
    const data = req.body;

    const ret = await Leitura.create(data)
    res.json(ret)
}

const read = async (req, res) => {
    let id = req.params.id;
    let filtro = {};
    
    if(id != undefined) filtro = {where : { id:id }}
    const ret = await Leitura.findAll(filtro)

    res.json(ret)
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    let ret = await Leitura.update(data, {where: { id:id }})
    ret = await Leitura.findAll({where : {id:id}});

    res.json(ret)
}

const remove = async (req, res) => {
    const id = req.params.id;
    const ret = await Leitura.destroy({where : { id:id }});

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