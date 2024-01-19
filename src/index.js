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
    const ramenImage = document.createElement('img')
    ramenImage.src = ramenObj.image
    ramenCon.appendChild(ramenImage)

//details on click
ramenImage.addEventListener('click', (e)=> handleClickEvent(e))
function handleClickEvent(e){
    //where they go


    const nameLoc = document.querySelector('.name')
    const imageLoc = document.querySelector('.detail-image')
    const restLoc = document.querySelector('.restaurant')
    const ratingLoc = document.getElementById('rating-display').textContent = ramenObj.rating
    const commentLoc = document.querySelector('#comment-display')
    //give the variables the info
    nameLoc.textContent = ramenObj.name
    restLoc.textContent = ramenObj.restaurant
    imageLoc.src = ramenObj.image
    // ratingLoc.textContent = ramenObj.rating
    commentLoc.textContent = ramenObj.comment


//end of click event func
            }
//end of forEach
    })

//end of renderRamen
}

//Add new ramen after form is submitted
const form = document.querySelector('#new-ramen')
form.addEventListener('submit', (e) => handleNewRamen(e))

    function handleNewRamen(e){
    
    e.preventDefault()

    // const newRamenCon = document.querySelector('#new-ramen')

    // const newName = document.querySelector('#new-name')
    // const newRestaurant = document.querySelector('#new-restaurant')
    // const newImage = document.querySelector('#new-image')
    // const newRating = document.querySelector('#new-rating')
    // const newComment = document.querySelector('#new-comment')
    const newRamen = {

            name : e.target.name.value,
            restaurant : e.target.restaurant.value,
            image : e.target.image.value,
            rating : e.target.rating.value,
            comment : e.target['new-comment'].value

            }
    console.log(newRamen)
renderRamen([newRamen])
    }
 

