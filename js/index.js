
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

/***************************************************************************************/

/****************** Form Messages *****************************************************/

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event){
    event.preventDefault();
    const userName = event.target.userName.value;
    const userEmail = event.target.userEmail.value;
    const userMessage = event.target.userMessage.value;

    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${userEmail}">${userName}</a>: <span>${userMessage}</span>`;

    const removeButton = document.createElement("button");
    removeButton.innerText = "remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function () {
        const entry = removeButton.parentNode; // found <li> father
        entry.remove(); // Remove message
    });

    // Add remove button to the list
    newMessage.appendChild(removeButton);

    // Add new message
    messageList.appendChild(newMessage);

    messageForm.reset();
})

/********************************************************************************************/