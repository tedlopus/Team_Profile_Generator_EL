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
            }.then( answer => {
                switch (answer.member) {
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
                type: "list",
                name: "member",
                message: "Please add a team member, otherwise select exit.",
                choices:[
                    "Add Engineer",
                    "Add Intern",
                    "Exit",
                ],
            }


        ])
    };






};