USE employees;
INSERT INTO departments
(name)
VALUES
("sales"),
("engineering"),
("finance"),
("legal");
INSERT INTO roles
(title,salary,department_id)
VALUES
("sales lead", 150000, 1),
("sales person", 100000, 1),
("lead engineer", 200000, 2),
("engineer", 180000, 2),
("account manager", 240000, 3),
("accountant", 170000, 3),
("legal team lead", 210000, 4),
("lawyer", 250000, 4);
INSERT INTO employees
(first_name,last_name,role_id,manager_id)
VALUES
("James", "Windsor", 1, NULL), 
("Kyile", "Trump", 2, 1), 
("Bob", "Townshend", 3, NULL), 
("Lucy", "Windsor", 4, 3), 
("Donald", "Trump", 5, NULL), 
("Mike", "Pence", 6, 5), 
("Larry", "David", 7, NULL), 
("Mike", "Pompeo", 8,7);