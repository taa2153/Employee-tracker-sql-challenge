//DEPENDENCIES
const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'employee_db'
});
//STATE

connection.connect(function (err) {
    if (err) throw err;
    initialAction();
})

console.table(
    "\n------------ EMPLOYEE TRACKER ------------\n"
)

const promptUser = () => {
    inquirer.prompt([
        {
          name: 'choices',
          type: 'list',
          message: 'Please select an option:',
          choices: [
            'View All Employees',
            'Add Employee',
            'View All Roles',
            'Update Employee Role',,
            'View All Departments',
            'Add Role',
            'Add Department',
            'End'
            ]
        }
      ])
      .then(function ({ task }) {
        switch (task) {
        case "View All Employees":
            viewAllEmployees();
            break;
        
        case "View All Roles":
            viewAllRoles();
            break;
        
        case "View All Departments":
             viewAllDepartments();
             break;

        case "Update Employee Role":
            updateEmployeeRole();
            break;
      
        case "Add Employee":
            addEmployee();
            break;
        case "Add Department":
            addDepartment();
            break;
  
        case "Add Role":
            addRole();
            break;
  
        case "end":
            connection.end();
            break;
        }
      });
  }
//FUNCTIONS

// --------------------VIEW---------------------
// VIEW ALL EMPLOYEES
// VIEW ALL ROLES
// VIEW ALL DEPARTMENTS
//-------------------ADD------------------------
// ADD ROLE
// ADD EMPLOYEE
// ADD DEPARTMENTS
//-----------------UPDATE------------------------
// UPDATE EMPLOYEE ROLE
//------------------QUIT--------------------------
// QUIT