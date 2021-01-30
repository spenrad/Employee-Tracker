Employee Tracker
====

# Description
A simple CLI that will help you keep track of Employees in your office and update information about them.

----

# Code

The most fun piece of code in this project is the code that generates the full table of Employees.
```
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
```

Here you can see that the SQL query we are creating a very long string to fetch information from our database. Here we are joining 3 tables together and adding aliases to information found in the tables. You can see how although "Manager" is in the 'employee' table, handling the manager's name uses 'm.'.. this ensures that we do not overwrite any information where 'employee.' occurs

# Installation
In order to use the Employee Tracker once you've cloned down the repository simple do an 'npm install' to fetch the dependencies and you'll be ready to initialize the app by typing 'node app.js' into your terminal.

----

# Project Link
[Project Repository](https://github.com/spenrad/Employee-Tracker) <br>
[Video Demonstration](https://drive.google.com/file/d/16oV3ok1b9KfmuxAl-yVJTC5ro5VAQJOu/view?usp=sharing)

----

# Author
Spencer Christy<br>
[GitHub](https://github.com/spenrad)<br>
[LinkedIn](https://www.linkedin.com/in/spencer-christy-543b84b3/)<br>

----