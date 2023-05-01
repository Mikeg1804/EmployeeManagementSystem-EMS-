INSERT INTO department (departmentname)
VALUES ("marketing"), ("sales");

INSERT INTO rol (jobtitle, salary, department_id)
VALUES ("manager", 100000, 1), ("senior associate", 70000, 2);


INSERT INTO employee (firstname, lastname, rol_id, manager_id)
VALUES ("john", "roberts", 1, 1);