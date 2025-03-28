const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },


    {
        templeName: "Oakland California Temple",
        location: "Oakland, California, United States",
        dedicated: "1962, November, 17",
        area: 80157,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/400x250/01-Oakland-Temple-Exterior-2236889.jpg"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah, United States",
        dedicated: "2016, March, 20",
        area: 85084,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/2018/400x250/Provo-City-Center-Temple03.jpg"
    },
    {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah, United States",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-lds-1059079-wallpaper.jpg"
    },
    {
        templeName: "Chicago Illinois Temple",
        location: "Glennview, Illinois, United States",
        dedicated: "1985, August, 9",
        area: 37062,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/400x250/Chicago-Temple_0784.jpg"
    }
];


const homeButton = document.querySelector('#home');
const oldButton = document.querySelector('#old');
const newButton = document.querySelector('#new');
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

homeButton.addEventListener('click', () => {
    populateTempleCards(temples);
});

oldButton.addEventListener('click', () => {

    const oldTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) < 1900);

    populateTempleCards(oldTemples);
});

newButton.addEventListener('click', () => {

    const newTemples = temples.filter((temple) => parseInt(temple.dedicated.substring(0, 4)) > 2000);

    populateTempleCards(newTemples);
});

largeButton.addEventListener('click', () => {

    const largeTemples = temples.filter((temple) => temple.area > 90000);

    populateTempleCards(largeTemples);
});

smallButton.addEventListener('click', () => {

    const smallTemples = temples.filter((temple) => temple.area < 10000);

    populateTempleCards(smallTemples);
});


function generateTempleCard(temple) {
    return `<figure>
            <figcaption>
                <h2>${temple.templeName}</h2>
                <p><strong>Location: </strong>${temple.location}</p>
                <p><strong>Dedicated: </strong>${temple.dedicated}</p>
                <p><strong>Size: </strong>${temple.area} sq ft</p>
            </figcaption>
            <img src="${temple.imageUrl}"
                alt="Picture of the ${temple.templeName}" loading="lazy" width="400" height="250">
        </figure>`;
}

function populateTempleCards(temples) {
    const mainElement = document.querySelector("main");

    mainElement.innerHTML = "<h2>Home</h2>";

    for (let i = 0; i < temples.length; i++) {
        mainElement.innerHTML = mainElement.innerHTML + generateTempleCard(temples[i]);
    }
}

populateTempleCards(temples);