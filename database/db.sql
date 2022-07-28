CREATE DATABASE database_medici;

USE database_medici;

CREATE TABLE usuario(
    id INT(11) NOT NULL,
    username VARCHAR(16) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE usuario
    ADD PRIMARY KEY (id);

ALTER TABLE usuario
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;

DESCRIBE usuario;

--links tables
CREATE TABLE pacientes(
    id INT(11) NOT NULL,
    nombre VARCHAR(150) NOT NULL,
    telefono VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    create_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id)  REFERENCES usuario(id)
);

ALTER TABLE pacientes
    ADD PRIMARY KEY (id);

ALTER TABLE pacientes
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1;


DESCRIBE pacientes;