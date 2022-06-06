const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const employeeHTML = require("./src/employee");
const engineerHTML = require("./src/engineer");
const internHTML = require("./src/intern");
const managerHTML = require("./src/manager");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

team = [];

const runGenerator = () => {
  const addMember = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "member",
          message: "Please add a team member, otherwise select exit.",
          choices: ["Add Engineer", "Add Intern", "Exit"],
        },
      ])
      .then((choice) => {
        switch (choice.member) {
          case "Add Engineer":
            addEngineer();
            break;

          case "Add Intern":
            addIntern();
            break;

          default:
            exit();
        }
      });
  };

  const addEngineer = () => {
    inquirer
      .prompt([
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
        },
      ])
      .then((input) => {
        const employee = new Engineer(
          input.engineerName,
          input.engineerEmail,
          input.engineerGithub
        );
        team.push(employee)
        
        
          fs.writeFile("team.html", engineerHTML(team), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully opened index.html!");
            }
          })

        addMember();
      });
  };

  const addIntern = () => {
    inquirer
      .prompt([
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
        },
      ])
      .then((input) => {
        const employee = new Intern(
          input.internName,
          input.internEmail,
          input.internSchool
        );
        team.push(employee);
        
        fs.writeFile("team.html", engineerHTML(team), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully opened index.html!");
            }
          });

        addMember();
      });
  };

  const exit = () => {
    fs.open("/dist/index.html", "w", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully opened index.html!");
      }
    });

    console.log("\nGoodbye!");
    process.exit(0);
  };

  addMember();
};

runGenerator();
