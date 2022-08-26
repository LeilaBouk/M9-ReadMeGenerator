// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.desc}
  <br>

  ## Table of Contents
  <br>
  [Installation](#inst)
  <br>
  [Usage](#use)
  <br>
  [Contribution](#con)
  <br>
  [Test](#tst)
  <br>
  [Questions](#qst)
  <br>

  <a name="inst"/>
  ##Installation Instructions
  ${data.install}
  <br>
  
  <a name="use"/>
  ##Usage
  ${data.usage}
  <br>

  <a name="con"/>
  ##Contributing
  ${data.contribute}
  <br>

  <a name="tst"/>
  ##Tests
  ${data.test}
  <br>

  <a name="qst"/>
  ##Questions
  <br>
  [GitHub:${data.github}](https://github.com/${data.github})
  <br>
  You can reach me here: ${data.email};

  ${data.emoji}

`;
}

module.exports = generateMarkdown;
