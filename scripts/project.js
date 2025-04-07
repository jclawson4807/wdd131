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

homeButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "none");
    window.location.replace("project.html");
});

familyinfoButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "familyinfo");
    window.location.replace("project-online-sources.html");
});

onlinesourcesButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");
    window.location.replace("project-online-sources.html");
});

researchhelpsButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "researchhelps");
    window.location.replace("project-online-sources.html");
});

