// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const headerContainer = document.querySelector('.header-container');


function Header(){
    //create elements
    const container = document.createElement('div');
        const topSpan = document.createElement('span');
        const h1 = document.createElement('h1');
        const bottomSpan = document.createElement('span');

    //setup structure

    container.appendChild(topSpan);
    container.appendChild(h1);
    container.appendChild(bottomSpan);

    //assign classes

    container.classList.add('header');
    topSpan.classList.add('date');
    bottomSpan.classList.add('temp');


    //set content

    topSpan.textContent = 'SMarch 28,2019';
    h1.textContent = 'Lambda Times';
    bottomSpan.textContent = '98°';

return container;

}

headerContainer.appendChild(Header());
