const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const homeButton = document.querySelector('#home');
const familyinfoButton = document.querySelector('#familyinfo');
const onlinesourcesButton = document.querySelector('#onlinesources');
const researchhelpsButton = document.querySelector('#researchhelp');

const pageIdentifierName = document.querySelector("#page-identifier-name");

const main = document.querySelector("main");

homeButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("project.html");
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

if (window.localStorage.getItem("emailAddress") === null) {
    window.location.replace("project.html");
}
else {
    let storedEmailAddress = window.localStorage.getItem("emailAddress");

    const emailAddressSpan = document.querySelector("#email-address");
    emailAddressSpan.textContent = storedEmailAddress;

};



