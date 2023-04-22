// Import inquirer library for user prompts
const inquirer = require("inquirer");
// Import path library for creating result directory
const path = require("path");
// Import fs library for generating HTML file
const fs = require("fs");
// Import Manager class
const Manager = require("./lib/Manager");
// Import Engineer class
const Engineer = require("./lib/Engineer");
// Import Intern class
const Intern = require("./lib/Intern");

// Log welcome message
console.log("WELCOME to Team Profile Generator");
// Set result directory path
const RESULT_DIR = path.resolve(__dirname, "result");
// Set result file path
const resultPath = path.join(RESULT_DIR, "teamProfil.html");
// Import render function for creating HTML string
const render = require("./src/createTeam");
// Array to store team member objects
const teamMembers = [];
// Function for prompting user to choose an employee category
const chooseEmployee = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "eType",
        message: "Choose an employee category to create:",
        choices: ["Manager", "Engineer", "Intern", "No additional employees."],
        default: "Manager",
      },
    ])
    .then((answer) => {
      if (answer.eType === "No additional employees.") {
        createHTML();
      } else {
        inputGeneralInfo(answer);
      }
    });
};
// Function for prompting user to input general information
const inputGeneralInfo = (answer) => {
  inquirer
    .prompt([
      {
        name: "name",
        message: "Name: ",
      },
      {
        name: "id",
        message: "id: ",
      },
      {
        name: "email",
        message: "Email: ",
      },
    ])
    .then((basicInfo) => {
      inputSpecialDetails(answer, basicInfo);
    });
};
// Function for prompting user to input special details based on the chosen employee category
const inputSpecialDetails = (answer, basicInfo) => {
  switch (answer.eType) {
    case "Manager":
      inquirer
        .prompt([
          {
            name: "officeNumber",
            message: "Office number: ",
          },
        ])
        .then((specificInfo) => {
          // Create Manager instance with general information and special details
          const aManger = new Manager(
            basicInfo.name,
            basicInfo.id,
            basicInfo.email,
            specificInfo.officeNumber
          );
          // Add Manager instance to teamMembers array
          teamMembers.push(aManger);
          // Call chooseEmployee function again for more employee options
          chooseEmployee();
        });
      break;
    case "Engineer":
      inquirer
        .prompt([
          {
            name: "github",
            message: "GitHub username: ",
          },
        ])
        .then((specificInfo) => {
          const anEngineer = new Engineer(
            basicInfo.name,
            basicInfo.id,
            basicInfo.email,
            specificInfo.github
          );
          teamMembers.push(anEngineer);
          chooseEmployee();
        });
      break;
    case "Intern":
      inquirer
        .prompt([
          {
            name: "school",
            message: "School: ",
          },
        ])
        .then((specificInfo) => {
          const anIntern = new Intern(
            basicInfo.name,
            basicInfo.id,
            basicInfo.email,
            specificInfo.school
          );
          teamMembers.push(anIntern);
          chooseEmployee();
        });
      break;
  }
};

const createHTML = () => {
  // Creates the HTML file with team member information
  const html = render(teamMembers);
  // Check if the result directory exists, if not, create it
  let dir = "./result";

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  // Write the generated HTML code to the result file
  fs.writeFile(resultPath, html, (error) => {
    // Handle errors and display success message
    if (error) {
      console.log("There was an error: ", error);
    } else {
      console.log("Your HTML file has been successfully created!");
      console.log("Thank you for using the Team Profile Generator");
    }
  });
};
// Start the process of generating the team profiles by choosing an employee
chooseEmployee();
