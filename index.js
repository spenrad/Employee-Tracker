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
            "View All Departments",
            "View Employee Roles",
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
       
        case "View All Departments":
            viewAllDept();
            break;
        
        case "View Employee Roles":
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
    var query = "SELECT e.first_name 'First Name', e.last_name 'Last Name', role.title 'Postion', role.salary 'Salary', department.name 'Department', CONCAT(m.first_name, ' ', m.last_name) 'Manager' ";
    query += "FROM employee AS e LEFT JOIN role ON e.role_id = role.ID ";
    query += "LEFT JOIN department ON role.department_id = department.id ";
    query += "LEFT JOIN employee as m ON e.manager_id = m.role_id";
    
    connection.query(query, function (err, res) {
        console.table('\n', res);
        runPrompts();
    });
};

function viewAllDept() {
    var query = "SELECT department.name 'Departments' FROM department";
    connection.query(query, function (err, res) {
        console.table('\n', res);
        runPrompts();
    });
};

function viewAllRole() {
    var query = "SELECT role.title 'Postions', role.salary 'Salary', department.name 'Department' ";
    query += "FROM role LEFT JOIN department ON role.department_id = department.id";
    connection.query(query, function (err, res) {
        console.table('\n', res);
        runPrompts();
    });
};

function addEmploy() {
    inquirer.prompt([
        {
            name: "first_name",
            type: "input",
            message: "What is the employee's first name?"
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?"
        },
        {
            name: "role_id",
            type: "input",
            message: "What is the employee's role ID number?"
        },
        {
            name: "manager_id",
            type: "input",
            message: "What is the employee's manager ID number?"
        }
    ])
    .then(function(answer) {
        connection.query("INSERT INTO employee SET ?", { 
            first_name : answer.first_name,
            last_name : answer.last_name,
            role_id : answer.role_id,
            manager_id : answer.manager_id
        }, function (err, res){
            if (err) throw err;
            console.table('\n', viewAll(res));
            runPrompts();
        });
    });
}