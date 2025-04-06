const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

const main = document.querySelector("main");

const articles = [
    {
        articleType: "OnlineSources",
        articleTitle: "Family Search",
        authorName: "James Clawson",
        authorImage: "author-image.webp",
        articleImage: "family-search-homepage-300-248.webp",
        articleImageAlt: "Family Search homepage",
        paragraphs: [
            {
                referenceURL: "https://www.familysearch.org",
                referenceText: "FamilySearch",
                paragraphText: "is a multi-functional website provided by the Church of Jesus Christ of Latter - day Saints though FamilySearch International.The functionality provided on FamilySearch is vast, and new features are provided frequently.FamilySearch is free to use, and the access to the site is not restricted to members of the Church of Jesus Christ of Latter-day Saints."
            },
            {
                paragraphText: "FamilySearch provides a full-featured tree builder, along with access to billions of searchable records including census, marriage, death, and other vital records.The tree tool includes a source management feature with source citation tracking.Users can search a shared global family tree, and add names to the tree.There are also tools for merging duplicate person records."
            },
            {
                paragraphText: "FamilySearch also provides access to special record collections. For example, there are Immigration records, African American records, US and Canadian Census records, and more.FamilySearch has an amazing AI enhanced Indexing tool, which allows volunteers to extract information from source records and make that information available to other users of the system.This information allows records to be found using the various search engines built into the site.Additionally, FamilySearch includes beginner friendly tools such as guided tree building tools, research hints, and virtual memory books to which users can add images and stories about their family members."
            },
            {
                paragraphText: "We will provide how-to articles and tutorials for our users focused on learning how to use FamilySearch, which is one of the premiere resources for family history researchers."
            }
        ]
    }
]

function generateArticleParagraph(paragraph) {
    let returnString = "<p>";

    if (Object.hasOwn(paragraph, "referenceURL") && Object.hasOwn(paragraph, "referenceText")) {
        returnString = returnString + `<a href="${paragraph.referenceURL}">${paragraph.referenceText}</a> `;
    }

    returnString = returnString + `${paragraph.paragraphText}</p>`;

    return returnString;
}

function generateArticleSection(article) {
    let returnString = `<section class="article">
            <div class="article-header">
                <img src="images/${article.authorImage}" alt="Author Image" width="100">
                <p><span class="article-title">${article.articleTitle}</span><span class="article-author">${article.authorName}</span></p>
            </div>
            <div class="article-body">`;

    article.paragraphs.forEach(paragraph => {
        returnString = returnString + generateArticleParagraph(paragraph);
    });

    returnString = returnString + "</div></section>";

    return returnString
}

const newArticles = articles.filter((article) => article.articleType == "OnlineSources");

articles.forEach(article => {
    console.log(1);
    let returnString = generateArticleSection(article);

    main.innerHTML = main.innerHTML + returnString;
});

// const productNameSelect = document.querySelector("#product-name");

// productNameSelect.innerHTML = null;
// const option = document.createElement("option");
// option.disabled = true;
// option.selected = true;
// option.value = "";
// option.innerHTML = "Select a product... &#9662";

// productNameSelect.appendChild(option);

// products.forEach(product => {
//     const option = document.createElement("option");
//     option.id = product.id;
//     option.textContent = product.name;

//     productNameSelect.appendChild(option);
// });


