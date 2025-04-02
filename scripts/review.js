let numVisits = Number(window.localStorage.getItem("numVisits")) || 0;

numVisits++;

localStorage.setItem("numVisits", numVisits);