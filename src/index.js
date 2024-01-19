// write your code here 
fetch('http://localhost:3000/ramens')
.then(resp => resp.json())
.then(data => renderRamen(data))

// fetch the data 
// create js variables
// query select or create where they will go in HTML(DOM)
// Attach event listeners
// Assign data to the DOM elements
// Append the new eleemnts to the DOM

function renderRamen(ramenArr){

const ramenCon = document.querySelector('#ramen-menu')

ramenArr.forEach((ramenObj) => {
    const image = document.createElement('img')
    image.src = ramenObj.image
    ramenCon.appendChild(image)
    })


}
