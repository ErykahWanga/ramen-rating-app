const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" }
];

function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    menu.innerHTML = '';
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.onclick = () => showDetails(ramen);
        menu.appendChild(img);
    });
}

function showDetails(ramen) {
    document.getElementById('ramen-name').innerText = ramen.name;
    document.getElementById('ramen-restaurant').innerText = ramen.restaurant;
    document.getElementById('ramen-image').src = ramen.image;
    document.getElementById('ramen-rating').innerText = `Rating: ${ramen.rating}`;
    document.getElementById('ramen-comment').innerText = ramen.comment;

    document.getElementById('edit-rating').value = ramen.rating;
    document.getElementById('edit-comment').value = ramen.comment;

    document.getElementById('update-button').onclick = () => {
        ramen.rating = document.getElementById('edit-rating').value;
        ramen.comment = document.getElementById('edit-comment').value;
        showDetails(ramen);
    };

    document.getElementById('delete-button').onclick = () => {
        const index = ramens.indexOf(ramen);
        if (index > -1) {
            ramens.splice(index, 1);
            displayRamens();
            if (ramens.length) showDetails(ramens[0]);
        }
    };
}

document.getElementById('new-ramen-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newRamen = {
        id: ramens.length + 1,
        name: document.getElementById('new-name').value,
        restaurant: document.getElementById('new-restaurant').value,
        image: document.getElementById('new-image').value,
        rating: document.getElementById('new-rating').value,
        comment: document.getElementById('new-comment').value
    };
    ramens.push(newRamen);
    displayRamens();
    showDetails(newRamen);
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    if (ramens.length) showDetails(ramens[0]);
});
  

//psudo code
// 1. create a form for new ramen
// Initialize an array of ramen objects
// Each object contains id, name, restaurant, image, rating, and comment

// Function to display all ramen images in the menu
// Get ramen menu container
// Clear previous menu items
// Loop through each ramen and create an image element
// Create an image element
// Set image attributes
// Add event listener to show details when clicked
// Append image to menu

// Function to show ramen details
// Display ramen name, restaurant, image, rating, and comment
// Pre-fill rating and comment form inputs

// Set event listener for update button
// Update rating and comment with new values
// Refresh displayed details

// Set event listener for delete button
// Find ramen index in the array
// Remove ramen from array if found
// Refresh ramen menu
// Show first ramen if any remain, otherwise clear details

// Event listener for adding new ramen
// Prevent default form submission
// Create a new ramen object using input values
// Add new ramen to the array
// Refresh menu and display the new ramen details
// Reset the form

// When the page loads, display all ramen and show first ramen details
// If there are ramens in the list, show the first one
// Otherwise, clear the details section