INSERT INTO department (name)
VALUES ("Engineering"), ("Administration"), ("Student-Intern"); 

INSERT INTO role (title, salary, department_id)
VALUES ("Front-end Engineer", 60000.00, 1), ("Back-end Engineer", 68000.00, 1), ("Front-End Manager", 110000, 2), ("Back-End Manager", 110000, 2), ("Intern", 32000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("James", "Birch",  1,  3), ("Sarah", "Shivers",  1,  3), ("Dolph", "Freely",  2,  4), ("Alberto", "Tunder",  2,  4), ("Jessica", "Stone",  3, null), ("Martina", "Lazlo",  4, null), ("Smokey", "Plessiasaur",  5,  4);