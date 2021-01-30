INSERT INTO department (name)
VALUES ("Engineering"), ("Administration"), ("Student-Intern"); 

INSERT INTO role (title, salary, department_id)
VALUES ("Front-end Engineer", 60000.00, 1), ("Back-end Engineer", 68000.00, 1), ("Manager", 110000, 2), ("Intern", 32000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Birch",  1,  1), ("Sarah", "Shivers",  1,  1), ("Dolph", "Freely",  2,  1), ("Alberto", "Tunder",  2,  1), ("Jessica", "Stone",  3, null), ("Martina", "Lazlo",  3, null), ("Smokey", "Plessiasaur",  4,  4);