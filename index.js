var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "employee_db"
});

connection.connect(function(err) {
  if (err) throw err;
    runPrompts();
});

function runPrompts() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Emloyees by Department",
            "View All Employees by Role",
            "Add Employee",
            "Add Role",
            "Add Department",
            "Update Employee Roles"
        ]
    })
    .then(function(answer) {
        switch(answer.action) {
        
        case "View All Employees":
            viewAll();
            break;
       
        case "View All Employees by Department":
            viewAllDept();
            break;
        
        case "View All Employees by Role":
            viewAllRole();
            break;

        case "Add Employee":
            addEmploy();
            break;

        case "Add Role":
            addRole();
            break;

        case "Add Department":
            addDept();
            break;

        case "Update Employee Roles":
            updateRoles();
            break;
        }
    })
}
