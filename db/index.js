// import db connection
const connection = require("../config/connection");

class DB {
  // save connection to db
  constructor(connection) {
    this.connection = connection;
  }

  // view all employees data
  findAllEmployees() {
    return this.connection
      .promise()
      .query(
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title, departments.name AS departments, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id LEFT JOIN employees manager on manager.id = employees.manager_id;"
      );
  }

  // view all manager data
  findAllPossibleManagers(employeeId) {
    return this.connection
      .promise()
      .query(
        "SELECT id, first_name, last_name FROM employees WHERE id != ?",
        employeeId
      );
  }

  // add employees
  createEmployee(employees) {
    return this.connection
      .promise()
      .query("INSERT INTO employees SET ?", employees);
  }

  // remove employees by id
  removeEmployee(employeeId) {
    return this.connection
      .promise()
      .query("DELETE FROM employees WHERE id = ?", employeeId);
  }

  // update employees's roles
  updateEmployeeRole(employeeId, roleId) {
    return this.connection
      .promise()
      .query("UPDATE employees SET role_id = ? WHERE id = ?", [
        roleId,
        employeeId,
      ]);
  }

  // update employees manager
  updateEmployeeManager(employeeId, managerId) {
    return this.connection
      .promise()
      .query("UPDATE employees SET manager_id = ? WHERE id = ?", [
        managerId,
        employeeId,
      ]);
  }

  // view all roles
  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT roles.id, roles.title, departments.name AS departments, roles.salary FROM roles LEFT JOIN departments on roles.department_id = departments.id;"
      );
  }

  // add new roles
  createRole(roles) {
    return this.connection.promise().query("INSERT INTO roles SET ?", roles);
  }

  // remove roles
  removeRole(roleId) {
    return this.connection
      .promise()
      .query("DELETE FROM roles WHERE id = ?", roleId);
  }

  // view all departments
  findAllDepartments() {
    return this.connection
      .promise()
      .query("SELECT departments.id, departments.name FROM departments;");
  }

  // view dept budget
  viewDepartmentBudgets() {
    return this.connection
      .promise()
      .query(
        "SELECT departments.id, departments.name, SUM(roles.salary) AS utilized_budget FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments on roles.department_id = departments.id GROUP BY departments.id, departments.name;"
      );
  }

  // Create a new departments
  createDepartment(departments) {
    return this.connection
      .promise()
      .query("INSERT INTO departments SET ?", departments);
  }

  // Remove a departments
  removeDepartment(departmentId) {
    return this.connection
      .promise()
      .query("DELETE FROM departments WHERE id = ?", departmentId);
  }

  // Find all employees in a given departments, join with roles to display roles titles
  findAllEmployeesByDepartment(departmentId) {
    return this.connection
      .promise()
      .query(
        "SELECT employees.id, employees.first_name, employees.last_name, roles.title FROM employees LEFT JOIN roles on employees.role_id = roles.id LEFT JOIN departments departments on roles.department_id = departments.id WHERE departments.id = ?;",
        departmentId
      );
  }

  // Find all employees by manager, join with departments and roles to display titles and departments names
  findAllEmployeesByManager(managerId) {
    return this.connection
      .promise()
      .query(
        "SELECT employees.id, employees.first_name, employees.last_name, departments.name AS departments, roles.title FROM employees LEFT JOIN roles on roles.id = employees.role_id LEFT JOIN departments ON departments.id = roles.department_id WHERE manager_id = ?;",
        managerId
      );
  }
}

module.exports = new DB(connection);
