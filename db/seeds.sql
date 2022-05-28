USE employee_db;

INSERT INTO departments
    (name)
VALUES
    ('Executive'),
    ('Media'),
    ('Blocking'),
    ('Choreography'),
    ('Documents'),
    ('Finance'),
    ('Recruitment'),
    ('Team Ambassador'),
    ('Basic');

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('Executive Director', 250000, 1),
    ('Artistic Director', 200000, 2),
    ('Media Coordinator', 150000, 3),
    ('Team Historian', 120000, 4),
    ('Captain', 160000, 5),
    ('Marketing Chair', 125000, 6),
    ('Treasurer', 180000, 7),
    ('Human Resources Chair', 80000, 8),
    ('Team Member');

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Alec', 'Baldwin', 8, NULL),
    ('Indiana', 'Jones', 7, 1),
    ('Avatar', 'Aang', 7, NULL),
    ('Kalvin', 'Clein', 4, 3),
    ('Juman', 'Ji', 4, NULL),
    ('Moon', 'Knight', 6, 5),
    ('Aloy', 'Sobek', 7, NULL),
    ('Tom', 'Holland', 5, 7),
    ('Zack', 'Effron', 5, NULL),
    ('Kanye', 'West', 1, NULL),
    ('Gordon', 'Ramsey', 2, NULL);
