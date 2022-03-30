const model = require("../modelo/model.js");
const { param } = require("../rotas/routes.js");
const { con } = require("./db/connect.js");

const pix_get = (req, res) => {
    let string = "select * from tb_pix where id_pix = " + req.params.id;
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const pix_post = (req, res) => {
    let string = `insert into tb_pix 
        (id_pix,id_cliente,tipo,status,chave) 
        values (default,
        "${req.body.id_cliente}",
        "${req.body.tipo}",
        "${req.body.status}",
        "${req.body.chave}")`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json("{ status: "+model.model_post(req.body.status, result.insertId)+" }")
        } else {
            res.status(304).end()
        }
    })
}

const pix_update = (req, res) => {
    let string = `update tb_pix set 
    chave="${req.body.chave}" 
     where id_pix =${req.params.id}`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
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