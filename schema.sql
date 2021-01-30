DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

USE employee_db;


CREATE TABLE department (
  ID INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE role (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT(10) NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (department_id) REFERENCES department(ID)
);

CREATE TABLE employee (
  ID INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT(10) NOT NULL,
  manager_id INT(10) NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (role_id) REFERENCES role(ID),
  FOREIGN KEY (manager_id) REFERENCES role(ID)
);