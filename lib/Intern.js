const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    internInfo(){
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Intern's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Intern's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Intern's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Intern's school?"
            },
        ])
    }

    getSchool () {
        return this.school
    }

    getRole () {
        return 'Intern'
    }
}

module.exports = Intern;