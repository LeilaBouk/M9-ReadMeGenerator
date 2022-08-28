
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  [![license](https://img.shields.io/badge/license-${data.license}-lightblue)](https://shields.io)
  # ${data.title}

  ## Description
  ${data.desc}

  # Index

  [Installation](#Installation)

  [Usage](#Usage)

  [Contribution](#Contributing)

  [Test](#Tests)

  [License](#License)

  [Questions](#Questions)

  #

  ## Installation
  ${data.install}
  
  
  ## Usage
  ${data.usage}
  

  ## Contributing
  ${data.contribute}
  

  ## Tests
  ${data.test}

  ## License

  This project is covered under an ${data.license} license.
  
  ## Questions
  
  [GitHub:${data.github}](https://github.com/${data.github})
  
  You can reach me here: ${data.email};

  ## ${data.emoji}

`;
}

module.exports = generateMarkdown;
