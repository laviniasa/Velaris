const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const pix_get = (req, res) => {
    let string = "select * from tb_pix"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const pix_post = (req, res) => {
    let string = `insert into tb_pix values (default,
        "${req.body.chave}",
        "${req.body.CPF_CNPJ}",
        "${req.body.email}",
        "${req.body.id_cliente}")`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post(req.body, result.insertId))
        } else {
            res.status(304).end()
        }
    })
}

const pix_update = (req, res) => {
    let string = `update tb_pix set 
    nome="${req.body.nome}",
    pix="${req.body.pix}",
    senha="${req.body.senha}",
    data_cadastro="${req.body.data_cadastro}"
     where id =${req.body.id}`;
    con.query(string, (err, result) => {
        if (result.changedRows == 1) {
            res.json(req.body)
        } else {
            res.status(404).end()
        }

    })

}

const pix_delete=(req, res)=>{
    let string="delete from tb_pix where id = "+req.params.id;
    con.query(string,(err, result)=>{
        if(result.affectedRows==1){
            res.status(410).end()
        }else{
            res.status(404).end()
        }
    })
}

module.exports = {
    pix_get, pix_post, pix_update, pix_delete
}