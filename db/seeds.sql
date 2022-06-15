INSERT INTO department (department_name)
VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Legal');

INSERT INTO role (title, department_id, salary)
VALUES
('Sales Lead', 100000, 1),
('Salesperson', 80000, 1),
('Lead Engineer', 150000, 2),
('Software Engineer', 120000, 2),
('Account Manager', 160000, 3),
('Accountant', 125000, 3),
('Legal Team Lead', 250000, 4),
('Lawyer', 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, department_id)
VALUES
('John', 'Doe', 1, 1),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, 2),
('Kevin', 'Tupik', 4, 2),
('Kunal', 'Signh', 5, 3),
('Malia', 'Brown', 6, 3),
('Sarah', 'Lourde', 7, 4),
('Tom', 'Allen', 8, 4),
