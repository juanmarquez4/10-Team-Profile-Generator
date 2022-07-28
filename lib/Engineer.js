const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github; 
    }

    engineerInfo(){
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the Engineer's name?"
            },
            {
                type: "input",
                name: "id",
                message: "What is the Engineer's id?"
            },
            {
                type: "input",
                name: "email",
                message: "What is the Engineer's email?"
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the Manager's GitHub?"
            },
        ])
    }

    getGithub () {
        return this.github
    }

    getRole () {
        return 'Engineer'
    }
}

module.exports = Engineer;