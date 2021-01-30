// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");
require("console.table");

// Connection
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


// On connection, runs the Inquirer Prompts
connection.connect(function(err) {
  if (err) throw err;
    runPrompts();
});

// Inquirer Prompts
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
    // Switch Statements Containing Case Functions
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

// Case Functions

// View All Employees
function viewAll() {
    var query = "SELECT e.first_name AS 'First Name', e.last_name AS 'Last Name', role.title 'Postion', role.salary AS 'Salary', department.name AS 'Department', CONCAT(m.first_name, ' ', m.last_name) AS Manager ";
    query += "FROM employee AS e LEFT JOIN role ON e.role_id = role.ID ";
    query += "LEFT JOIN department ON role.department_id = department.id ";
    query += "Left JOIN employee as m ON e.manager_id = m.role_id";
    
    connection.query(query, function (err, res) {
        console.table('\n', res);
        runPrompts();
    }) 
}

