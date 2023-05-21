USE tarea2;

-- 1. Apellidos y nombre de los participantes de nacionalidad mexicana
SELECT apellidos, nombre FROM Deportista WHERE pais = 'México';

-- 2. Apellidos, nombre y puntos acumulados de los participantes de USA
SELECT d.apellidos, d.nombre, SUM(c.rango) AS puntos_acumulados FROM Deportista AS d
INNER JOIN Clasificacion AS c ON d.matricula = c.deportista
WHERE d.pais = 'USA' GROUP BY d.matricula;

-- 3. Apellidos y nombre de los participantes que se clasificaron en primer lugar en al menos una competencia
SELECT DISTINCT d.apellidos, d.nombre FROM Deportista AS d
INNER JOIN Clasificacion AS c ON d.matricula = c.deportista 
WHERE c.rango = 1;

-- 4. Nombre de las competencias en las que intervinieron los participantes mexicanos
SELECT d.nombre
FROM Prueba AS p
INNER JOIN Disciplina AS d ON p.disciplina = d.identificador
INNER JOIN Resultado AS r ON p.identificador = r.disciplina
INNER JOIN Deportista AS dep ON (r.ganadorOro = dep.matricula OR r.ganadorPlata = dep.matricula OR r.ganadorBronce = dep.matricula)
WHERE dep.pais = 'México';

-- 5. Apellidos y nombre de los participantes que nunca se clasificaron en primer lugar en alguna competencia
SELECT d.apellidos, d.nombre
FROM Deportista AS d
WHERE d.matricula NOT IN (
    SELECT c.deportista
    FROM Clasificacion c
    WHERE c.rango = 1
);

-- 6. Apellidos y nombre de los participantes que siempre se clasificaron en alguna competencia
SELECT d.apellidos, d.nombre
FROM Deportista AS d
WHERE d.matricula IN (
    SELECT c.deportista
    FROM Clasificacion AS c
    GROUP BY c.deportista
    HAVING COUNT(DISTINCT c.prueba) = (SELECT COUNT(*) FROM Prueba)
);

-- 7. Nombre de la competencia que aporta el máximo de puntos
-- Para que la consulta regrese algún resultado es necesario modificar el rango (los puntos) de una de las pruebas
UPDATE Clasificacion
SET rango = 3
WHERE prueba = 1;

SELECT d.nombre
FROM Prueba AS p 
INNER JOIN Clasificacion AS c ON p.identificador = c.prueba
INNER JOIN Disciplina AS d ON p.disciplina = d.identificador
GROUP BY p.identificador, d.nombre
HAVING SUM(c.rango) = (
    SELECT MAX(total_puntos)
    FROM (SELECT p.identificador, SUM(c.rango) AS total_puntos
			FROM Prueba p
			INNER JOIN Clasificacion c ON p.identificador = c.prueba
			GROUP BY p.identificador) AS puntos_totales
);

-- 8. Países (nacionalidades) que participaron en todas las competencias
SELECT d.pais
FROM Deportista AS d
GROUP BY d.pais
HAVING COUNT(DISTINCT d.matricula) = (
    SELECT COUNT(*) FROM Prueba
);

-- 9. Nueva consulta con función AVG en una sola tabla
SELECT AVG(total_medallas) AS promedio_medallas
FROM (SELECT d.matricula, COUNT(c.rango) AS total_medallas
		FROM Deportista AS d
		JOIN Clasificacion AS c ON d.matricula = c.deportista
		JOIN Prueba AS p ON c.prueba = p.identificador
		JOIN Disciplina AS dp ON p.disciplina = dp.identificador
		WHERE d.pais IN ('México', 'USA', 'Brasil', 'Canadá')
		GROUP BY d.matricula) AS medalla_deportista;

-- 10. Nueva consulta con GROUP BY en dos tablas
SELECT p.nombre AS pais, COUNT(d.matricula) AS num_deportistas
FROM Pais AS p
JOIN Deportista d ON p.nombre = d.pais GROUP BY p.nombre;

-- 11. Nueva consulta con LEFT JOIN, ORDER BY, GROUP BY y LIMIT en tres tablas
SELECT d.nombre, COUNT(c.prueba) AS num_medallas
FROM Deportista AS d
LEFT JOIN Clasificacion AS c ON d.matricula = c.deportista
GROUP BY d.nombre
ORDER BY num_medallas DESC
LIMIT 10;

-- 12. Nueva consulta con INNER JOIN y LIKE en tres tablas
SELECT dep.nombre, dep.apellidos, d.nombre AS disciplina, dep.pais
FROM Deportista AS dep
JOIN Clasificacion AS c ON dep.matricula = c.deportista
JOIN Prueba AS p ON c.prueba = p.identificador
JOIN Disciplina AS d ON p.disciplina = d.identificador
WHERE d.disciplina LIKE '%natación%';