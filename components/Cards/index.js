// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// let articles = [];
// let bootstrap = [];
// let javascript = [];
// let jquery = [];
// let node = [];
// let technology = [];
// let topicArray = [];



axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    console.log(Object.values(response.data.articles));
    articles = response.data.articles;
    console.log(articles);

    //try for in, pull all articles from data.articles[i];
    // articles.forEach(item =>{
    //     topicArray.push(item);
    // })
    // console.log(topicArray);
    // articles = Array.from(response.data.articles);
    // console.log(articles); 
    // for (let i=0;i<articles.length;i++){
    //     console.log(articles[i]);
    //     topicArray.push(articles[i]);
    //   }
    //   console.log(topicArray);
    //   return topicArray;

    const bootstrap = Array.from(articles.bootstrap);
    console.log(bootstrap);
    const javascript = Array.from(articles.javascript);
    console.log(javascript);
    const jquery = Array.from(articles.jquery);
    console.log(jquery);
    const node = Array.from(articles.node);
    console.log(node);
    const technology = Array.from(articles.technology);
    console.log(technology);

    bootstrap.forEach(item =>{
        const newBoot = createCard(item);
        cardContainer.appendChild(newBoot);
    })
    javascript.forEach(item =>{
        const newJS = createCard(item);
        cardContainer.appendChild(newJS);
    })
    jquery.forEach(item =>{
        const newJQ = createCard(item);
        cardContainer.appendChild(newJQ);
    })
    node.forEach(item =>{
        const newNode = createCard(item);
        cardContainer.appendChild(newNode);
    })
    technology.forEach(item =>{
        const newTech = createCard(item);
        cardContainer.appendChild(newTech);
    })


      
})
.catch(error =>{
    console.log(error);
})



const cardContainer = document.querySelector('.cards-container');
function createCard(obj){
    //create elements
    const card = document.createElement('div');
        const headline = document.createElement('div');
        const author = document.createElement('div');
            const imgContainer = document.createElement('div');
                const image = document.createElement('img');
            const span = document.createElement('span');

    //create structure

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    author.appendChild(span);
    imgContainer.appendChild(image);

    //assign classes

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    //assign content
    
    headline.textContent = obj.headline;
    image.src = obj.authorPhoto;
    span.textContent = `By ${obj.authorName}`;




    return card;
}