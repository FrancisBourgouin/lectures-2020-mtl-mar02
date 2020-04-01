DROP TABLE bottles;
DROP TABLE spirits;

CREATE TABLE bottles(
   id serial PRIMARY KEY,
   name TEXT NOT NULL,
   age INT NOT NULL,
   price FLOAT NOT NULL,
   volume INT NOT NULL,
   spirit_id INT NOT NULL
);

CREATE TABLE spirits(
    id serial PRIMARY KEY,
    name TEXT NOT NULL,
    subtype TEXT NOT NULL,
    description TEXT NOT NULL
);

INSERT INTO spirits (name, subtype, description) VALUES ('Whisky', 'Scotch', 'From Scotland'); 
INSERT INTO spirits (name, subtype, description) VALUES ('Whisky', 'Blend', 'Mix of multiple whiskys');
INSERT INTO spirits (name, subtype, description) VALUES ('Wine', 'Red', 'Well... Red wine, you know.');
INSERT INTO spirits (name, subtype, description) VALUES ('Wine', 'White', 'Well... White wine, you know.');
INSERT INTO spirits (name, subtype, description) VALUES ('Gin', 'Gin', 'Well... I dont know.');
INSERT INTO spirits (name, subtype, description) VALUES ('Vodka', 'Potato-Based', 'Well... I dont know.');


INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Hibiki',12, 49.99, 33, 2);
INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Hibiki',18, 89.99, 33, 2);
INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Hibiki',21, 189.99, 33, 2);
INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Macallan',18, 119.99, 40, 1);
INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Saint-Emilion',10, 79.99, 20, 3);
INSERT INTO bottles (name, age, price, volume, spirit_id) VALUES ('Grey Goose',5, 49.99, 40, 6);