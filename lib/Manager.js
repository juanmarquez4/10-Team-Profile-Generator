const inquirer = require('inquirer');
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    managerInfo(){
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Manager's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Manager's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Manager's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Manager's office number?"
            },

        ])
    }

    getRole() {
        return 'Manager'
    }
}


module.exports = Manager;