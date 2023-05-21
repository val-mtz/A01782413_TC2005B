DROP SCHEMA IF EXISTS tarea2;
CREATE SCHEMA tarea2;
USE tarea2;

CREATE TABLE Pais (
  nombre VARCHAR(100) PRIMARY KEY,
  numero_participantes INT NOT NULL,
  numero_medallas INT NOT NULL
);

CREATE TABLE Deportista (
  matricula INT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  sexo VARCHAR(10) NOT NULL,
  pais VARCHAR(100),
  FOREIGN KEY (pais) REFERENCES Pais(nombre)
);

CREATE TABLE Disciplina (
  identificador INT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  disciplina VARCHAR(100) NOT NULL
);

CREATE TABLE Prueba (
  identificador INT PRIMARY KEY,
  disciplina INT,
  fecha VARCHAR(100) NOT NULL,
  lugar VARCHAR(100) NOT NULL,
  num_deportistas_inscritos INT NOT NULL,
  naturaleza VARCHAR(100) NOT NULL,
  FOREIGN KEY (disciplina) REFERENCES Disciplina(identificador)
);

CREATE TABLE Clasificacion (
  UUID INT AUTO_INCREMENT PRIMARY KEY,
  deportista INT,
  prueba INT,
  rango INT NOT NULL,
  FOREIGN KEY (deportista) REFERENCES Deportista(matricula),
  FOREIGN KEY (prueba) REFERENCES Prueba(identificador)
);

CREATE TABLE Resultado (
  UUID INT AUTO_INCREMENT PRIMARY KEY,
  disciplina INT,
  ganadorOro INT,
  ganadorPlata INT,
  ganadorBronce INT,
  FOREIGN KEY (disciplina) REFERENCES Disciplina(identificador),
  FOREIGN KEY (ganadorOro) REFERENCES Deportista(matricula),
  FOREIGN KEY (ganadorPlata) REFERENCES Deportista(matricula),
  FOREIGN KEY (ganadorBronce) REFERENCES Deportista(matricula)
);
