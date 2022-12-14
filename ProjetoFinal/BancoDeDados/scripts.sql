CREATE DATABASE db_zero_to_hero;


USE db_zero_to_hero;

CREATE TABLE ussers(
	id INT NOT NULL PRIMARY KEY auto_increment,
    telefone INT NOT NULL,
    rua VARCHAR(100),
    bairro VARCHAR(100),
    cpf VARCHAR(30),
    cidade VARCHAR(100),
    nome VARCHAR(100) NOT NULL,
    cep VARCHAR(30) NOT NULL,
    numero VARCHAR(10),
	email VARCHAR(10)
);

CREATE TABLE bolo(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    observacao VARCHAR(200),
    tema VARCHAR(100),
    andar INT DEFAULT 1
);

CREATE TABLE sabor(
	id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    massa VARCHAR(200) NOT NULL,
    calda VARCHAR(100) NOT NULL,
    recheio VARCHAR(100) NOT NULL
);

CREATE TABLE pedido(
	id INT NOT NULL PRIMARY KEY,
    data_entrega TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_pedido DATE,
    hora_entrega TIME
);

CREATE TABLE comments(
    id INT NOT NULL auto_increment primary key,
    id_user INT NOT NULL,
	comentario VARCHAR(100),
	curtir INT,
	descurtir INT,
    FOREIGN KEY (id_user) REFERENCES ussers(id)
);

CREATE TABLE ussers_pedido(
	id_pedido INT NOT NULL,
    id_ussers INT NOT NULL,
    forma_pagamento VARCHAR(40),
    troco DECIMAL(10,2) DEFAULT 0.00,
    valor_pago DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id),
    FOREIGN KEY (id_ussers) REFERENCES ussers(id)
);


CREATE TABLE pedido_bolo(
	id_pedido INT NOT NULL,
    id_bolo INT NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedido(id),
    FOREIGN KEY (id_bolo) REFERENCES bolo(id)
);

CREATE TABLE bolo_sabor(
	id_sabor INT NOT NULL,
    id_bolo INT NOT NULL,
    FOREIGN KEY (id_sabor) REFERENCES sabor(id),
    FOREIGN KEY (id_bolo) REFERENCES bolo(id)
);