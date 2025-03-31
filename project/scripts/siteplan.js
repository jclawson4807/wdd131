:root {
    --body-font: Domine;
    --header-footer-background-color: #1d4d73;
    --header-footer-nav-text-color: #fff;
    --header-font: Roboto;
    --header-font-size: 1.5em;
    --nav-background-color: #000000;
    --main-and-card-background-color: #ffffff;
    --main-aside-text-color: #000;
    --hr-color: #a3a3a3;
    --header-height: 7.15em;
    --nav-height: 3em;
    --main-max-width: 800px;
    --main-min-width: 250px;
    --footer-height: 8.2em;
    --figure-height: 200px;
    --figure-width: 250px;
    --nav-font: Roboto;
    --highlight-text-color: #f3f437;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0px;
    font-family: var(--body-font), serif;
    font-weight: 300;
    line-height: 1.7em;
    min-width: var(--main-min-width);
}

header,
footer,
nav {
    background-color: var(--header-footer-background-color);
    color: var(--header-footer-nav-text-color);
    font-family: var(--header-font), sans-serif;
}

header {
    padding: 20px 20px 0px 20px;
}

h1 {
    text-align: left;
    font-size: 1.5rem;
    margin-left: 1rem;
}

h2 {
    font-size: 1.2rem;
    color: navy;
    text-align: left;
    margin: 1rem;
}

nav {
    max-width: 800px;
    margin: 1rem auto;
}

/* small view navigation */
#menu {
    font-size: 1.5rem;
    border: 0;
    background: none;
    color: #000;
    position: absolute;
    top: 1rem;
    right: 1rem;
}

#menu::before {
    content: "☰";
}

#menu.open::before {
    content: "X";
}

.navigation {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    background-color: #333;
    color: #fff;
}

.navigation a {
    display: none;
    padding: 1rem;
    text-align: center;
    text-decoration: none;
    color: #fff;
}

.navigation a:hover {
    background-color: #bbb;
    color: #333;
    font-weight: 700;
}

/* when the button is clicked - the open class is toggled (added/removed) */
.open a {
    display: block;
}

.active::before {
    content: "📍";
    /* just a wayfinding symbol for the user */
}

main {
    max-width: var(--main-max-width);
    margin: 0 auto;
    background-color: var(--main-and-card-background-color);
    color: var(--main-aside-text-color);
    margin: auto;
    padding: 20px;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 50px auto;
    gap: 1rem;
}

main h2 {
    text-align: center;
    color: var(--header-footer-background-color);
    grid-column: span 1;
}

figure {
    background-color: var(--main-and-card-background-color);
    border: 1px solid var(--nav-background-color);
}

figure img {
    width: 100%;
}

figcaption {
    color: var(--header-footer-background-color);
    width: 100%;
    padding: 10px;
    margin: 0px;
    font-size: 0.75rem;
}

footer {
    padding: 10px;
    text-align: center;
}

footer p {
    width: 100%;
    padding: 5px;
}

.highlight {
    color: var(--highlight-text-color);
}