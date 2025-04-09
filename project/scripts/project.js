const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const homeButton = document.querySelector('#home');
const familyinfoButton = document.querySelector('#familyinfo');
const onlinesourcesButton = document.querySelector('#onlinesources');
const researchhelpsButton = document.querySelector('#researchhelps');

const familyinfoP = document.querySelector('#familyinfo-p');
const onlinesourcesP = document.querySelector('#onlinesources-p');
const researchhelpsP = document.querySelector('#researchhelps-p');

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

researchhelpsButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "researchhelps");
    window.location.replace("project-articles.html");
});

familyinfoP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");
    window.location.replace("project-articles.html");
});

onlinesourcesP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");
    window.location.replace("project-articles.html");
});

researchhelpsP.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "researchhelps");
    window.location.replace("project-articles.html");
});

const sendMeResearchTipsButton = document.querySelector("#send-me-research-tips");

sendMeResearchTipsButton.addEventListener('click', () => {

    const emailAddressInput = document.querySelector("#email");

    const emailAddress = emailAddressInput.value.trim();

    localStorage.setItem("emailAddress", emailAddress);

    window.location.replace("joined-mailing-list.html");
});

