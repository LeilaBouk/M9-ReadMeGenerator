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

  ##Description

  ##Table of Contents
  [Installation](#inst)
  [Usage](#use)
  [Contribution](#con)
  [Test](#tst)
  [Questions](#qst)

  <a name="inst"/>
  ##Installation Instructions
  ${data.install}

  <a name="use"/>
  ##Usage
  ${data.usage}

  <a name="con"/>
  ##Contributing
  ${data.contribute}

  <a name="tst"/>
  ##Tests
  ${data.test}

  <a name="qst"/>
  ##Questions

  [GitHub:${data.github}](https://github.com/${data.github})

  You can reach me here: ${data.email};

  ${data.emoji}

`;
}

module.exports = generateMarkdown;
