USE tarea2;

INSERT INTO Pais (nombre, numero_participantes, numero_medallas) VALUES
('México', 100, 5),
('USA', 80, 10),
('España', 50, 8),
('Brasil', 70, 3),
('Canadá', 60, 6),
('Francia', 40, 4),
('Australia', 30, 7),
('Alemania', 25, 2),
('China', 90, 9),
('Japón', 70, 7),
('Italia', 55, 3),
('Rusia', 65, 5);

INSERT INTO Deportista (matricula, nombre, apellidos, sexo, pais) VALUES
(1, 'Juan', 'Pérez', 'M', 'México'),
(2, 'María', 'González', 'F', 'México'),
(3, 'John', 'Smith', 'M', 'USA'),
(4, 'Emily', 'Johnson', 'F', 'USA'),
(5, 'Carlos', 'García', 'M', 'España'),
(6, 'Ana', 'Martínez', 'F', 'España'),
(7, 'Paulo', 'Silva', 'M', 'Brasil'),
(8, 'Julia', 'Ferreira', 'F', 'Brasil'),
(9, 'David', 'Lee', 'M', 'Canadá'),
(10, 'Sophia', 'Martin', 'F', 'Canadá'),
(11, 'Luc', 'Dupont', 'M', 'Francia'),
(12, 'Emma', 'Lefevre', 'F', 'Francia');

INSERT INTO Disciplina (identificador, nombre, disciplina) VALUES
(1, '100M nado libre', 'Natación'),
(2, 'Salto alto', 'Atletismo'),
(3, 'Ciclismo de ruta', 'Ciclismo'),
(4, 'Lanzamiento de disco', 'Atletismo'),
(5, 'Boxeo', 'Deportes de Combate'),
(6, 'Gimnasia rítmica', 'Gimnasia'),
(7, 'Salto con pértiga', 'Atletismo'),
(8, 'Tenis de mesa', 'Tenis'),
(9, 'Tiro con arco', 'Tiro Deportivo'),
(10, 'Vóley playa', 'Vóley'),
(11, 'Lanzamiento de martillo', 'Atletismo'),
(12, 'Saltos ornamentales', 'Natación');

INSERT INTO Prueba (identificador, disciplina, fecha, lugar, num_deportistas_inscritos, naturaleza) VALUES
(1, 1, '2023-08-01', 'Piscina Olímpica', 8, 'Eliminatoria'),
(2, 1, '2023-08-02', 'Piscina Olímpica', 4, 'Final'),
(3, 2, '2023-08-03', 'Estadio Olímpico', 12, 'Eliminatoria'),
(4, 2, '2023-08-04', 'Estadio Olímpico', 6, 'Final'),
(5, 3, '2023-08-05', 'Circuito de carretera', 10, 'Eliminatoria'),
(6, 3, '2023-08-06', 'Circuito de carretera', 5, 'Final'),
(7, 4, '2023-08-07', 'Estadio Olímpico', 8, 'Eliminatoria'),
(8, 4, '2023-08-08', 'Estadio Olímpico', 4, 'Final'),
(9, 5, '2023-08-09', 'Ring de boxeo', 6, 'Eliminatoria'),
(10, 5, '2023-08-10', 'Ring de boxeo', 3, 'Final'),
(11, 6, '2023-08-11', 'Gimnasio Olímpico', 8, 'Eliminatoria'),
(12, 6, '2023-08-12', 'Gimnasio Olímpico', 4, 'Final');

INSERT INTO Clasificacion (deportista, prueba, rango) VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 2),
(5, 3, 1),
(6, 3, 2),
(7, 4, 1),
(8, 4, 2),
(9, 5, 1),
(10, 5, 2),
(11, 6, 1),
(12, 6, 2);

INSERT INTO Resultado (disciplina, ganadorOro, ganadorPlata, ganadorBronce) VALUES
(1, 1, 2, 3),
(2, 3, 4, 5),
(3, 5, 6, 7),
(4, 7, 8, 9),
(5, 9, 10, 11),
(6, 11, 12, 1);
