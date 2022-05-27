USE employee_db;

INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Performance');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 2),
    ('Lead Engineer', 150000, 3),
    ('Software Engineer', 120000, 4),
    ('Account Manager', 160000, 5),
    ('Accountant', 125000, 6),
    ('Legal Team Lead', 250000, 7),
    ('Lawyer', 190000, 8);
    ('Developer', 100000, 9)

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Alec', 'Baldwin', 1, 1),
    ('Indiana', 'Jones', 2, 1),
    ('Avatar', 'Aang', 3, 2),
    ('Kalvin', 'Clein', 4, 3),
    ('Juman', 'Ji', 5, 2),
    ('Moon', 'Knight', 6, 5),
    ('Aloy', 'Sobek', 7, 5),
    ('Tom', 'Holland', 8, 7),
    ('Zack', 'Effron', 9, 7),
    ('Kanye', 'West', 10, 4),
    ('Gordon', 'Ramsey', 11, 6);
