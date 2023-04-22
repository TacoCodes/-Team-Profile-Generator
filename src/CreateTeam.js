// Import the "path" and "fs" modules
const path = require("path");
const fs = require("fs");
// Resolve the directory containing HTML templates
const dirTemplates = path.resolve(__dirname, "../templates");
// The main render function takes an array of employee objects and generates HTML
const render = employees => {
  const html = [];
   // Get HTML for Manager employees and push to html array
  html.push(employees
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => genManager(manager))
  );
  // Get HTML for Engineer employees and push to html array
  html.push(employees
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => genEngineer(engineer))
  );
  // Get HTML for Intern employees and push to html array
  html.push(employees
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => genIntern(intern))
  );
  // Generate the main HTML template and return it
  return genMain(html.join(""));

};
// Generates HTML for a Manager employee
const genManager = manager => {
  // Read the Manager HTML template file
  let template = fs.readFileSync(path.resolve(dirTemplates, "manager.html"), "utf8");
  // replaces the placeholders in the template with values from the manager object
  template = genPlaceholder(template, "name", manager.getName());
  template = genPlaceholder(template, "role", manager.getRole());
  template = genPlaceholder(template, "email", manager.getEmail());
  template = genPlaceholder(template, "id", manager.getId());
  template = genPlaceholder(template, "officeNumber", manager.getOfficeNumber());
  // Return the generated HTML
  return template;
};
// Generates HTML for an Engineer employee
const genEngineer = engineer => {
  // reads the engineer.html template file from the templates directory
  let template = fs.readFileSync(path.resolve(dirTemplates, "engineer.html"), "utf8");
  // replaces the placeholders in the template with values from the engineer object
  template = genPlaceholder(template, "name", engineer.getName());
  template = genPlaceholder(template, "role", engineer.getRole());
  template = genPlaceholder(template, "email", engineer.getEmail());
  template = genPlaceholder(template, "id", engineer.getId());
  template = genPlaceholder(template, "github", engineer.getGithub());
  // returns the generated html
  return template;
};
// Generates HTML for an Intern employee
const genIntern = intern => {
 // reads the intern.html template file from the templates directory
  let template = fs.readFileSync(path.resolve(dirTemplates, "intern.html"), "utf8");
  // replaces the placeholders in the template with values from the intern object
  template = genPlaceholder(template, "name", intern.getName());
  template = genPlaceholder(template, "role", intern.getRole());
  template = genPlaceholder(template, "email", intern.getEmail());
  template = genPlaceholder(template, "id", intern.getId());
  template = genPlaceholder(template, "school", intern.getSchool());
  return template;
};

const genMain = html => {
  // reads the index-manual.html template file from the templates directory
  const template = fs.readFileSync(path.resolve(dirTemplates, "index-manual.html"), "utf8");
  // replaces the "team" placeholder in the template with the generated html from the employee objects
  return genPlaceholder(template, "team", html);
};

const genPlaceholder = (template, placeholder, value) => {
// creates a regular expression to match the placeholder in the template string
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  // replaces the placeholder with the provided value and returns the result
  return template.replace(pattern, value);
};

module.exports = render;