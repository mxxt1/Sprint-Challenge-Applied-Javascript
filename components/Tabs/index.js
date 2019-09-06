// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// ****************Get Request Output***********************************/
// response.data.topics <--- array
// API Request:  
// {data: {…}, status: 200, statusText: "OK", headers: {…}, config: {…}, …}
// config: {url: "https://lambda-times-backend.herokuapp.com/topics", method: "get", headers: {…}, transformRequest: Array(1), transformResponse: Array(1), …}
// data:
// topics: Array(5)
// 0: "javascript"
// 1: "bootstrap"
// 2: "technology"
// 3: "jquery"
// 4: "node.js"

//********************Work*********************************/

//component
const tabParent = document.querySelector('.topics');
// console.log(tabParent);

//component function
function makeTab(topic){
    //create element
    const tab = document.createElement('div');
    //add class
    tab.classList.add('tab');
    //add content
    tab.textContent = topic; //`${topic}`;

    tab.addEventListener('click', e=>{
        console.log(`tab clicked`);
        tab.classList.toggle('active-tab');
    })
    //return
    return tab;

}
//axios get request
axios.get('https://lambda-times-backend.herokuapp.com/topics')
//console.log response or error
.then(response =>{
    // console.log(`API Request: `,response);
    // console.log(response.data.topics);
    //create array from response
    const tA = Array.from(response.data.topics);
    //create new tabs from response data
    tA.forEach(item =>{
        const newTab = makeTab(item);
        tabParent.appendChild(newTab);
    })
})
.catch(error =>{
    console.log(`Error: `,error);
})




