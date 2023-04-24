DROP DATABASE IF EXISTS employees_information;
CREATE DATABASE employees_information;

USE employees_information;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY manager_id,
    role_id INT NOT NULL,
    FOREIGN KEY role_id,
    salary_id INT NOT NULL,
    FOREIGN KEY salary_id,
    department_id INT NOT NULL,    
    FOREIGN KEY department_id,
    PRIMARY KEY (id)
);

--Needs a bit of work
CREATE TABLE manager(
    id INT NOT NULL AUTO_INCREMENT,
    employee_id INT NOT NULL,
    FOREIGN KEY employee_id,
    PRIMARY KEY (id)
);
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    departmentName VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)    
);
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    jobTitle VARCHAR(255) NOT NULL,
    department_id INT NOT NULL,    
    FOREIGN KEY department_id,
    PRIMARY KEY (id)        
);
CREATE TABLE salary (
    id INT NOT NULL AUTO_INCREMENT,
    salarlyAmount VARCHAR(255) NOT NULL, 
    PRIMARY KEY (id)
);
CREATE TABLE finance (
    id INT NOT NULL AUTO_INCREMENT,
    department_id INT NOT NULL,
    FOREIGN KEY department_id,
    role TEXT NOT NULL,
    employee_id INT NOT NULL,
    FOREIGN KEY employee_id,
    PRIMARY KEY (id)
);

