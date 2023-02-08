// // See all ramen images in the div with the id 
// of ramen-menu. When the page loads, request the data 
// from the server to get all the ramen objects. 
// Then, display the image for each of the ramen using
//  an img tag inside the #ramen-menu div.
// const divInfo = document.getElementById('ramen-detail');
const divMenu = document.getElementById('ramen-menu');
const imageElement = document.querySelector('.detail-image');
const nameElement = document.querySelector('.name');
const restaurantElement = document.querySelector('.restaurant');
const ratingElement = document.getElementById('rating-display');
const commentsElement = document.getElementById('comment-display');
const createInput = document.getElementById('new-ramen')

document.addEventListener("DOMContentLoaded", function() {
    renderRamen();
});


//fetch Get:
function renderRamen(){
    fetch('http://localhost:3000/ramens')
    .then(response => response.json())
    .then(data => {
        data.forEach(ramen => ramenDisplay(ramen))
    })
};

function ramenDisplay(ramen){
    // const divMenu = document.getElementById('ramen-menu');
    const img = document.createElement('img');
    img.src = ramen.image;
    img.className = 'ramen-img';
    
    img.addEventListener('click', () => {ramenClick(ramen)})
        
    divMenu.appendChild(img);
}
    
    
    function ramenClick(ramen){
     
        imageElement.src = ramen.image;
        nameElement.innerText = ramen.name;
        restaurantElement.innerTextColor = ramen.restaurant;
        ratingElement.innerText = ramen.rating;
        commentsElement.innerText = ramen.comment;
 
}
createInput.addEventListener('submit', (e) => {
   e.preventDefault()
   
   //data body:
   const newRamenData =
    
        {
        name: e.target.name.value,
        restaurant: e.target.restaurant.value,
        image: e.target.image.value,
        restaurant: e.target.restaurant.value,
        rating : e.target.rating.value,
        comment : e.target['new-comment'].value
        }

       
       //POST

       fetch('http://localhost:3000/ramens', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'},

        body: JSON.stringify(newRamenData)
       })
       .then(response => response.json())
       .then(data => ramenDisplay(data))

    })






