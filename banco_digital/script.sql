drop database banco;
create DATABASE banco charset=UTF8 collate utf8_general_ci;
use banco;


	CREATE TABLE tb_clientes (
	id_cliente integer PRIMARY KEY auto_increment,
	nome varchar(30) not null,
	cpf varchar(30) not null,
	rg varchar(30),
	usuario varchar(50) ,
	email varchar(50) not null,
	senha varchar(30) not null,
	imagem text,
	telefone varchar(25)
	);
	
	CREATE TABLE tb_administradores (
	id_administrador integer PRIMARY KEY auto_increment,
	nome VARCHAR(30) not null,
	cpf INTEGER (11) not null,
	email varchar (50),
	senha varchar(15) not null
	);
	
	CREATE TABLE tb_cartoes (
	id_conta integer not null,
	id_cartao integer not null PRIMARY KEY auto_increment,
	tipo VARCHAR(30) not null,	
	numero INTEGER(10) not NULL,
	validade INTEGER(6) not NULL,
	code INTEGER(10) not NULL,
	saldo VARCHAR(30),
	limite VARCHAR(30)
	);
	
	CREATE TABLE tb_contas (
	id_conta integer not null PRIMARY KEY auto_increment,
	id_cliente int not null,
	id_transacao int not null,
	limite int not null,
	numero_conta int not null,
	saldo int not null,
	tipo VARCHAR(30)
	);
	
	CREATE TABLE tb_pix(
	id_pix int not null primary key auto_increment,
	chave int not null,
	cpf_cnpj int not null,
	email varchar(50) not null,
	id_cliente varchar(30) not null,
	status VARCHAR(30) not null,
	telefone VARCHAR(11) not null
	);
	
	CREATE TABLE tb_transacoes (
	id_cliente integer not null,
	id_transacao int not null primary key auto_increment,
	data int(11) not null,
	tipo varchar(30) not null,
	valor int not null
	); 

	CREATE TABLE tb_parcelas(
	id_parcela integer not null primary key auto_increment,
	id_cartao int not null,
	data date not null
	);
	
	select * from tb_clientes;
	select * from tb_administradores;
	select * from tb_cartoes;
	select * from tb_contas;
	select * from tb_pix;
	select * from tb_transacoes;
	show tables; 