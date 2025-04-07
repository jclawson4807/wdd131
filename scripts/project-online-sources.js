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

    populateArticles();
});

onlinesourcesButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "onlinesources");

    populateArticles();
});

researchhelpsButton.addEventListener('click', () => {
    localStorage.setItem("articleFilter", "researchhelps");

    populateArticles();
});

const main = document.querySelector("main");

const articles = [
    {
        articleType: "onlinesources",
        articleTitle: "Family Search",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "family-search-homepage-300-248.webp",
        articleImageAlt: "Family Search homepage",
        paragraphs: [
            {
                referenceURL: "https://www.familysearch.org",
                referenceText: "FamilySearch",
                paragraphText: "is a multi-functional website provided by the Church of Jesus Christ of Latter - day Saints though FamilySearch International.  The functionality provided on FamilySearch is vast, and new features are provided frequently.  FamilySearch is free to use, and the access to the site is not restricted to members of the Church of Jesus Christ of Latter-day Saints."
            },
            {
                paragraphText: "FamilySearch provides a full-featured tree builder, along with access to billions of searchable records including census, marriage, death, and other vital records.  The tree tool includes a source management feature with source citation tracking.Users can search a shared global family tree, and add names to the tree.  There are also tools for merging duplicate person records."
            },
            {
                paragraphText: "FamilySearch also provides access to special record collections. For example, there are Immigration records, African American records, US and Canadian Census records, and more.  FamilySearch has an amazing AI enhanced Indexing tool, which allows volunteers to extract information from source records and make that information available to other users of the system.  This information allows records to be found using the various search engines built into the site.  Additionally, FamilySearch includes beginner friendly tools such as guided tree building tools, research hints, and virtual memory books to which users can add images and stories about their family members."
            },
            {
                paragraphText: "We will provide how-to articles and tutorials for our users focused on learning how to use FamilySearch, which is one of the premiere resources for family history researchers."
            }
        ]
    },
    {
        articleType: "onlinesources",
        articleTitle: "American Ancestors",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "american-ancestors-homepage-300-247.webp",
        articleImageAlt: "American Ancestors",
        paragraphs: [
            {
                referenceURL: "https://www.americanancestors.org",
                referenceText: "American Ancestors",
                paragraphText: "is a family history tree building site, which also provides links to other research resources. American Ancestors also provides resources to teach users how to do family history research, a live chat with experienced researches, and more. One of the linked resources procides searchable access to over 1.4 billion searchable names."
            },
            {
                paragraphText: "American Ancestors has multiple collections of family history records, including two collections related to Colonial US research, including records for Mayflower Decendents.  American Ancestors has both free and paid services.  This site can also be used to connect to professional researchers."
            }
        ]
    },
    {
        articleType: "onlinesources",
        articleTitle: "Find My Past",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "find-my-past-homepage-300-247.webp",
        articleImageAlt: "Find My Past",
        paragraphs: [
            {
                referenceURL: "https://www.findmypast.com",
                referenceText: "Find My Past",
                paragraphText: "is a family history tree and research site.  While it incldues some US research materials, Find My Past is primarily focused on research using resources from the United Kingdom.  Find My Past has an excellent collection of newpaper records, as well as census and other common sources."
            },
            {
                paragraphText: "Find My Past also includes information about research related to British Royal genealogy.  Find My Past also has research resources for Australian, Irish, and other European sources.  Find My Past has both free and paid services."
            }
        ]
    }
]

function generateArticleParagraph(paragraph) {
    let returnString = "<p>";

    if (Object.hasOwn(paragraph, "referenceURL")) {
        returnString = returnString + `<a href="${paragraph.referenceURL}">${paragraph.referenceText}</a> `;
    }

    returnString = returnString + `${paragraph.paragraphText}</p>`;

    return returnString;
}

function generateArticleSection(article) {
    let returnString = `<section class="article">
            <div class="article-header">
                <img src="images/${article.authorImage}" alt="Author Image" width="100" loading="lazy">
                <p><span class="article-title">${article.articleTitle}</span><span class="article-author">${article.authorName}</span></p>
            </div>
            <div class="article-body">`;

    if (Object.hasOwn(article, "articleImage")) {
        returnString = returnString + `<img src="images/${article.articleImage}" alt="${article.articleImageAlt}" width="300" loading="lazy"></img> `;
    }

    article.paragraphs.forEach(paragraph => {
        returnString = returnString + generateArticleParagraph(paragraph);
    });

    returnString = returnString + "</div></section>";

    return returnString
}

function populateArticles() {
    main.innerHTML = "";

    let filter = window.localStorage.getItem("articleFilter");

    if (filter == "familyinfo") {
        familyinfoButton.classList.add('active');
        onlinesourcesButton.classList.remove('active');
        researchhelpsButton.classList.remove('active');
    } else if (filter == "onlinesources") {
        familyinfoButton.classList.remove('active');
        onlinesourcesButton.classList.add('active');
        researchhelpsButton.classList.remove('active');
    } else if (filter == "researchhelps") {
        familyinfoButton.classList.remove('active');
        onlinesourcesButton.classList.remove('active');
        researchhelpsButton.classList.add('active');
    }

    const newArticles = articles.filter((article) => article.articleType == filter);

    newArticles.forEach(article => {
        let returnString = generateArticleSection(article);

        main.innerHTML = main.innerHTML + returnString;
    });
}

populateArticles();





