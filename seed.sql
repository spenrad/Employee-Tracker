INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Birch",  22,  2), ("Sarah", "Shivers",  22,  2), ("Dolph", "Freely",  44,  4), ("Alberto", "Tunder",  44,  4), ("Jessica", "Stone",  8, null), ("Martina", "Lazlo",  8, null), ("Smokey", "Plessiasaur",  99,  4);

INSERT INTO role (title, salary, department_id)
VALUES ("Front-end Engineer", 60000.00, 2), ("Back-end Engineer", 68000.00, 2), ("Manager", 110000, 1), ("Intern", 32000, 00);

INSERT INTO department (name)
VALUES ("Engineering"), ("Administration"), ("Student-Intern"); 