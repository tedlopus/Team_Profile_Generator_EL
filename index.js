const fs = require('fs'); 
const inquirer = require('inquirer');

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { exit } = require('process');

team = [];

const runGenerator = () => {

    const addMember = () => {
        return inquirer.prompt ([
            {
                type: "list",
                name: "member",
                message: "Please add a team member, otherwise select exit.",
                choices:[
                    "Add Engineer",
                    "Add Intern",
                    "Exit",
                ],
            }.then( choice => {
                switch (choice.member) {
                    case "Engineer":
                        addEngineer();
                        break;

                    case "Intern":
                        addIntern();
                        break;
                    
                    default:
                        exit();
                }
            })
        ])
    };

    const addEngineer = () => {
        return inquirer.prompt ([
            {
                type: "input",
                name: "engineerName",
                message: "Please enter the engineer's name.",
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "Please enter the engineer's email.",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "Please enter the engineer's GitHub profile name.",
            }.then( input => {
                const employee = new Engineer (input.engineerName, input.engineerEmail, input.engineerGithub);
                team.push(employee);
                addMember();
            })
        ])
    };
    
    const addIntern = () => {
        return inquirer.prompt ([
            {
                type: "input",
                name: "internName",
                message: "Please enter the intern's name.",
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter the intern's email.",
            },
            {
                type: "input",
                name: "internSchool",
                message: "Please enter the intern's current school.",
            }.then( input => {
                const employee = new Intern (input.internName, input.internEmail, input.internSchool);
                team.push(employee);
                addMember();
            })
        ])
    };





};