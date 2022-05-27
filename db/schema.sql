DROP DATABASE IF EXISTS employee_db;

-- Create employee database --
CREATE DATABASE employee_db;

-- Select employee database as active
USE employee_db;

DROP TABLE IF EXISTS department;

-- Creating employee_db tables -- 
CREATE TABLE department (
    id      INT     PRIMARY KEY     AUTO_INCREMENT NOT NULL,
    name    VARCHAR(30)                            NOT NULL,
);

DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
    id      INT     PRIMARY KEY     AUTO_INCREMENT NOT NULL,
    title           VARCHAR(30),
    salary          DECIMAL,
    department_id   INT,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
    id      INT     PRIMARY KEY     AUTO_INCREMENT NOT NULL,
    first_name  VARCHAR(30)                        NOT NULL,
    last_name   VARCHAR(30)                        NOT NULL,
    role_id     INT,
    manager_id  INT,
    FOREIGN KEY(role_id) REFERENCES roles(id),
    FOREIGN KEY(manager_id) REFERENCES employees(id)
)