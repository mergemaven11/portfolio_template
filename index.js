// Template literal:
const skills = 'Python, Django, React, React Native, JavaScript, and many other libraries/framework. I consider myself a "Forever Student" always ready and willing to learn something new!';
const site = '"https://github.com/tobias2023"';
const github = `<a href=${site} target="_blank">GitHub</a>`;

// JavaScript Arrow function here to toggle between content
const displayText = (selection) => {
  if (selection === 'about') {
    document.getElementById('displaySection').innerHTML =
      'I am a software developer from Ohio, I have an associates in Information technology, In my free time I enjoy all things tech, from gaming to building something that functions!';
  } else if (selection === 'skills') {
    document.getElementById(
      'displaySection'
    ).innerHTML = `I am familiar with ${skills}`;
  } else {
    document.getElementById(
      'displaySection'
    ).innerHTML = `Check out some of my projects: ${github}`;
  }
};

function test() {
  console.log('Testing to see if the javascript is working externally');
}
