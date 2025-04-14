const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const homeButton = document.querySelector('#home');
const familyinfoButton = document.querySelector('#familyinfo');
const onlinesourcesButton = document.querySelector('#onlinesources');
const toolsButton = document.querySelector('#tools');
const researchhelpButton = document.querySelector('#researchhelp');

const familyinfoP = document.querySelector('#familyinfo-p');
const onlinesourcesP = document.querySelector('#onlinesources-p');
const toolsP = document.querySelector('#tools-p');

homeButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
});

familyinfoButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");
    window.location.replace("project-articles.html");
});

onlinesourcesButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");
    window.location.replace("project-articles.html");
});

toolsButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "tools");
    window.location.replace("project-articles.html");
});

researchhelpButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("request-research-help.html");
});

familyinfoP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");
    window.location.replace("project-articles.html");
});

onlinesourcesP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");
    window.location.replace("project-articles.html");
});

toolsP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "tools");
    window.location.replace("project-articles.html");
});

const sendMeResearchTipsButton = document.querySelector("#send-me-research-tips");

sendMeResearchTipsButton.addEventListener('click', () => {

    const emailAddressInput = document.querySelector("#email");

    const emailAddress = emailAddressInput.value.trim();

    localStorage.setItem("emailAddress", emailAddress);

    window.location.replace("joined-mailing-list.html");
});

