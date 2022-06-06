const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const Employee = require("./lib/employee")
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

team = [];

const generateEngineerHTML = ( engineer, employee ) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" type="text/css" href="assets/style.css" />
      <title>Team Profile Generator</title>
    </head>
<body>
<div class="card" style="width: 18rem">
<div class="card-body">
  <h5 class="card-title">John Bell</h5>
  <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Role:${engineer.getRole()}</li>
    <li class="list-group-item">Email:${engineer.getemail()}</li>
    <li class="list-group-item">Github:${engineer.getGithub()}</li>
  </ul>
</div>
</div>
</body>
</html>`;
};

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
        team.push(employee).then(
          fs.writeFile("/dist/team.html", generateEngineerHTML(team), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("Successfully opened index.html!");
            }
          })
        );
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
