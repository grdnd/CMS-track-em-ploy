DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  id    INT         PRIMARY KEY     AUTO_INCREMENT  NOT NULL,
  name  VARCHAR(30)                                 NOT NULL
);

DROP TABLE IF EXISTS roles;

CREATE TABLE roles (
  id            INT             PRIMARY KEY       AUTO_INCREMENT,
  title         VARCHAR(30)     UNIQUE                  NOT NULL,
  salary        DECIMAL                                 NOT NULL,
  department_id INT                                     NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id         INT    PRIMARY KEY     AUTO_INCREMENT      NOT NULL,
  first_name VARCHAR(30)                                NOT NULL,
  last_name  VARCHAR(30)                                NOT NULL,
  role_id    INT                                        NOT NULL,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles(id),
  FOREIGN KEY (manager_id) REFERENCES employees(id)
);
