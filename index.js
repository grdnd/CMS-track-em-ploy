const db = require("./db");
const { prompt } = require("inquirer");

function init() {
  menu();
}

function menu() {
  prompt([
    {
      name: "menu",
      message: "Please choose an action: ",
      type: "list",
      choices: [
        "View All Employees",
        "View Employees By Department",
        "View Employees By Manager",
        "Add Employee",
        "Remove Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Roles",
        "Add Role",
        "Remove Role",
        "View All Departments",
        "Add Department",
        "Remove Department",
        "View Department Budget Total",
        "Quit",
      ],
    },
  ]).then((menu) => {
    console.log(menu);
    console.log(menu.menu);
    switch (menu.menu) {
      case "View All Employees":
        viewEmployees();
        break;
      case "View Employees By Department":
        viewEmpDept();
        break;
      case "View Employees By Manager":
        viewEmpManager();
        break;
      case "Add Employee":
        addEmployee();
        break;
      case "Remove Employee":
        removeEmployee();
        break;
      case "Update Employee Role":
        updateEmployeeRole();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "Add Role":
        addRole();
        break;
      case "Remove Role":
        removeRole();
        break;
      case "View All Departments":
        viewDepartments();
        break;
      case "Add Department":
        addDepartment();
        break;
      case "Remove Department":
        removeDepartment();
        break;
      case "View Department Budget Total":
        viewDepartmentBudgets();
        break;
      case "Quit":
        quit();
        break;
    }
  });
}

function viewEmployees() {
  db.findAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.log("\n");
      console.table(employees);
    })
    .then(() => menu())
    .catch((error) => {
      if (error) {
        console.log(error);
      }
    });
}

function viewEmpDept() {
  console.log("You viewed employees by department");
}

function viewEmpManager() {
  console.log("you viewed employees by manager");
}

function addEmployee() {}

function removeEmployee() {}

function updateEmployeeRole() {}

function viewRoles() {}

function addRole() {}

function removeRole() {}

function viewDepartments() {}

function addDepartment() {}

function removeDepartment() {}

function viewDepartmentBudgets() {}

init();
