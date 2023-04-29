DROP DATABASE IF EXISTS employees_information;
CREATE DATABASE employees_information;

USE employees_information;


CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    departmentname VARCHAR(255) NOT NULL,
    PRIMARY KEY (id) 
);

CREATE TABLE rol (
    id INT NOT NULL AUTO_INCREMENT,
    jobtitle VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,    
    PRIMARY KEY (id), 
    FOREIGN KEY (department_id) REFERENCES department(id)      
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    rol_id INT NOT NULL,
    manager_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (rol_id) REFERENCES rol(id)

);


