const Atendente = require('../model/Atendente');

const create = async (req, res) => {
    const data = req.body;

    let ret = [];

    try{
        ret = await Atendente.create(data)

        delete ret.dataValues.senha;
    }catch(err){
        if(err.parent.code == 'ER_DUP_ENTRY'){
            ret = {
                msg: 'Email já cadastrado'
            }
            res.status(400);
        }
    }

    res.json(ret);
}

const read = async (req, res) => {
    let filtro = {};
    let id = req.params.id;

    if(id != undefined) filtro = {
        where : { 
            id : id 
        }
    }
    const ret = await Atendente.findAll(filtro);

    res.json(ret);
}

const update = async (req, res) => {
    const id = req.params.id;

    const data = req.body;

    let ret = await Atendente.update(data, {
        where : { id:id }
    })

    ret = await Atendente.findAll({
        attributes: { 
            exclude: ['senha']
        },
        where : { id:id }
    })
    
    res.json(ret);
}

const remove = async (req, res) => {
    const id = req.params.id;
    
    const ret = await Atendente.destroy({
        where : { id:id }
    })

    if(ret == 1){
        res.json('Id '+id+' removido com sucesso')
    }else{
        res.status(400)
    }
}

const login = async (req, res) => {
    const data = req.body;
    const ret = await Atendente.findAll({
        attributes: {
            exclude: ["senha"]
        },
        where : { 
            email: data.email,
            senha: data.senha
        }
    })
    res.json(ret)
}

module.exports = {
    create,
    read,
    update,
    remove,
    login
}