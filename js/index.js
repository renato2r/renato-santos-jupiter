
/********************** Footer *******************************************************/

const body = document.querySelector("body");
const footer = document.createElement("footer");
const today = new Date();
const thisYear = today.getFullYear();
const copyright = document.createElement("p");
const myName = "© Renato Santos";
copyright.textContent = `${myName} ${thisYear}. All rights reserved`;
copyright.classList.add("footer-style");
body.appendChild(footer);
body.appendChild(copyright);

/******************** Skills **********************************************************/

const skills = ["Javascript", "Html", "CSS", "GitHub", "SQL", "Data Analyst", "ERP"];
const skillsSection = document.getElementById("Skills");
const skillsList = skillsSection.querySelector("ul");

for(let i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}
