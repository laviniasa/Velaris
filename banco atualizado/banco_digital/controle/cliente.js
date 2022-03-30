const model = require("../modelo/model.js");
const { con } = require("./db/connect.js");

const cliente_get = (req, res) => {
    let string = "select * from tb_cliente"
    con.query(string, (err, result) => {
        res.json(result)
    })
}

const cliente_post = (req, res) => {
    let body = req.body
    let string = `insert into tb_cliente(nome, cpf, usuario, email, senha) values(
        "${body.nome}",
        "${body.cpf}",
        "${body.usuario}",
        "${body.email}",
        "${body.senha}")`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json(model.model_post("{ id_cliente: " + result.insertId + ", nome: "+ body.nome+", usuario: "+body.usuario+" }"))
        } else {
            res.status(304).end()
        }
    })
}

const cliente_update = (req, res) => {
    let string = `update tb_cliente
     set rg="${req.body.rg}", telefone="${req.body.telefone}", imagem="${req.body.imagem}" where id_cliente=${req.body.id_cliente}`;
    con.query(string, (err, result) => {
        if (result.affectedRows == 1) {
            res.json("{ imagem: "+req.body.imagem + " }")
        } else {
            res.status(404).end()
        }
    })

}

const cliente_delete=(req, res)=>{
    let string="delete from tb_cliente where id_cliente = "+req.params.id;
    console.log(string)
     con.query(string,(err, result)=>{
         if(result.affectedRows==1){ 
           res.status(410).end()
         }else{
             res.status(404).end()
         }
    })
 }

module.exports = {
    cliente_get, cliente_post, cliente_update, cliente_delete
}