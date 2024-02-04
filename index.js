const mysql = require("mysql2")
const inquirer = require("inquirer")
require("console.table")
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // TODO: Add MySQL password here
        password: '',
        database: 'employees'
    },
    console.log(`welcome to employee trackers.`)
);
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "departmentname",
            message: "Enter department name: "
        }
    ]).then(({ departmentname }) => {
        db.query("INSERT INTO departments (name) VALUES (?);", departmentname, function (err, data) {
            if (err) err;
            console.table(data);
            init()
        })
    })
}
function addrole() {
    let departmentList = []
    db.query("SELECT * FROM DEPARTMENTS", function (err, data) {
        if (err) throw err;
        data.forEach(emp => {
            departmentList.push({
                name: emp.name,
                value: emp.id
            })
        })
        console.log(departmentList)
        inquirer.prompt([
            {
                type: "input",
                name: "rolename",
                message: "Enter role name: "
            },

            {
                type: "input",
                name: "salary",
                message: "Enter salary: "
            },
            {
                type: "list",
                name: "department_id",
                message: "Select department: ",
                choices: departmentList
            },

        ]).then(({ rolename, salary, department_id }) => {
            db.query("INSERT INTO roles (title,salary,department_id) VALUES  (?,?,?);", [rolename, salary, department_id], function (err, data) {
                if (err) throw err;
                console.table(data);
                init()
            })
        })
    })
}
function addemployee() {
    let roleList = []
    db.query("SELECT * FROM ROLES", function (err, data) {
        if (err) throw err;
        data.forEach(role => {
            roleList.push({
                name: role.title,
                value: role.id
            })
        })
        console.log(roleList)
        inquirer.prompt([
            {
                type: "input",
                name: "firstname",
                message: "Enter employee name: "
            },

            {
                type: "input",
                name: "lastname",
                message: "Enter employee last name: "
            },
            {
                type: "list",
                name: "role_id",
                message: "Select role: ",
                choices: roleList
            },
            {
                type: "input",
                name: "manager_id",
                message: "Select role: ",
            
            },
        ]).then(({ firstname, lastname, role_id, manager_id }) => {
            db.query("INSERT INTO employees (first_name,last_name,role_id,manager_id)VALUES (?,?,?,?);", [ firstname, lastname, role_id, manager_id], function (err, data) {
                if (err) throw err;
                console.table(data);
                init()
            })
        })
    })
}
function viewdepartment() {
    db.query("SELECT * FROM DEPARTMENTS", function (err, data) {
        if (err) throw err;
        console.table(data)
        init()
    })
}
function viewemployee() {
    db.query("SELECT * FROM employees", function (err, data) {
        if (err) throw err;
        console.table(data)
        init()
    })
}
function viewrole() {
    db.query("SELECT * FROM roles", function (err, data) {
        if (err) throw err;
        console.table(data)
        init()
    })
}
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "What would you like to do?",
            choices: [
                "Add Department",
                "Add employee",
                "Add role",
                "view Department",
                "view employee",
                "view role",
                "update role",
                "Exit App"
            ]
        }
    ]).then(({ options }) => {
        switch (options) {
            case "Add Department":
                addDepartment();
                break;
            case "Add employee":
                addemployee();
                break;
            case "Add role":
                addrole();
                break;
            case "view Department":
                viewdepartment();
                break;
            case "view employee":
                viewemployee();
                break;
            case "view role":
                viewrole();
                break;
            case "update role":
                updaterole();
                break;
            default:
                db.end();
                process.exit(0)
        }
    })
}

init()