
const Manager = require ('./lib/Manager');
const Engineer = require ('./lib/Engineer');
const Intern = require ('./lib/Intern');
const inquirer = require ('inquirer');
const fs = require ('fs');


const managerInfo = () => {
        return inquirer
        .prompt([
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
        .then((answer) => {
            const manager = new Manager()
            manager.name = answer.name
            manager.id = answer.id
            manager.email = answer.email
            manager.officeNumber = answer.officeNumber
            teamOption();
        })
    }

const teamOption = () => {
        return inquirer
        .prompt(
            {
                type: "list",
                name: "teamOption",
                message: "choose a team member",
                choices: ["Engineer", "Intern", "finish building my team"]
            }
        )
        .then((answer) => {
            if (answer.teamOption === "Engineer") {
                engineerInfo();
            } else if (answer.teamOption  === "Intern" ) {
                internInfo();
            } else teamPage();
        })
       
}

const engineerInfo = () => {
        return inquirer
        .prompt([
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
        .then((answer) => {
            const engineer = new Engineer()
            engineer.name = answer.name
            engineer.id = answer.id
            engineer.email = answer.email
            engineer.officeNumber = answer.officeNumber
        })
    }

  const internInfo = () => {
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
        .then((answer) => {
            const intern = new Intern()
            intern.name = answer.name
            intern.id = answer.id
            intern.email = answer.email
            intern.officeNumber = answer.officeNumber
        })
    }

    const generateHTML = ({name, id}) =>
    `
    ${name}
    ${id}
    `;

    const teamPage  = () => {
        fs.writeFile('./dist/index.html', generateHTML(), (err) =>
        err ? console.log(err) : console.log("Success!"))
    };

    managerInfo();


