--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE  Fruit (
    id INTEGER PRIMARY KEY NOT NULL,
    name TEXT NOT NULL,
    color TEXT DEFAULT NULL
);

INSERT INTO Fruit (name, color)
VALUES
    ('Fresas', 'rojo'),
    ('Kiwi', 'verde'),
    ('Mango', 'amarillo'),
    ('Naranja', 'naranja')
;

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE Fruit;
