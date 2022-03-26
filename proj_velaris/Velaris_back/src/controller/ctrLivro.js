const Livro = require('../model/Livro')
const Leitura = require('../model/Leitura')

const create = async (req, res) => {
    const data = req.body;

    const ret = await Livro.create(data)
    res.json(ret)
}

const read = async (req, res) => {
    const id = req.params.id;
    let id_livro = req.params.id_livro
    let filtro = {};
    
    if(id != undefined) filtro = {where : { id:id }}

    filtro.attributes = { 
        exclude : ['id_leitura']
    }

    filtro.include = [
        { model : Leitura}
    ]

    if(id_livro !== undefined) {
        filtro.include[0].where = {id : id_livro}
    }


    const ret = await Livro.findAll(filtro)

    res.json(ret)
}

const update = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    let ret = await Livro.update(data, {where: { id:id }})
    ret = await Livro.findAll({where : {id:id}});

    res.json(ret)
}

const remove = async (req, res) => {
    const id = req.params.id;
    const ret = await Livro.destroy({where : { id:id }});

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