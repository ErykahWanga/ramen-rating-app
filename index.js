const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 4, comment: "Very flavorful!" }
];

function displayRamens() {
    const menu = document.getElementById('ramen-menu');
    if (!menu) return;
    menu.innerHTML = '';
    ramens.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        img.alt = ramen.name;
        img.onclick = () => showDetails(ramen);
        if (menu) {
            menu.appendChild(img);
        } else {
            console.error("Menu element not found.");
        }
    });
}

function showDetails(ramen) {
    const nameElem = document.getElementById('ramen-name');
    const restaurantElem = document.getElementById('ramen-restaurant');
    const imageElem = document.getElementById('ramen-image');
    const ratingElem = document.getElementById('ramen-rating');
    const commentElem = document.getElementById('ramen-comment');
    const ratingInput = document.getElementById('edit-rating');
    const commentInput = document.getElementById('edit-comment');
    const updateButton = document.getElementById('update-button');
    const deleteButton = document.getElementById('delete-button');

    if (!nameElem || !restaurantElem || !imageElem || !ratingElem || !commentElem || !ratingInput || !commentInput || !updateButton || !deleteButton) {
        console.error("One or more elements are missing in showDetails function.");
        return;
    }

    nameElem.innerText = ramen.name;
    restaurantElem.innerText = ramen.restaurant;
    imageElem.src = ramen.image;  
    imageElem.alt = ramen.name;
    ratingElem.innerText = `Rating: ${ramen.rating}`;
    commentElem.innerText = ramen.comment;
    ratingInput.value = ramen.rating;
    commentInput.value = ramen.comment;

    // ✅ Ensure update button correctly modifies the ramen details
    updateButton.onclick = () => {
        const newRating = Number(ratingInput.value);
        const newComment = commentInput.value.trim();

        if (!newRating || newComment === "") {
            alert("Please enter a valid rating and comment.");
            return;
        }

        ramen.rating = newRating;
        ramen.comment = newComment;

        showDetails(ramen); // Refresh displayed details
        displayRamens(); // Refresh the list
    };

    // ✅ Fix Delete Button
    deleteButton.onclick = () => {
        const index = ramens.indexOf(ramen);
        if (index > -1) {
            ramens.splice(index, 1);
            displayRamens();
            if (ramens.length) showDetails(ramens[0]);
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    displayRamens();
    if (ramens.length) showDetails(ramens[0]);

    const form = document.getElementById('new-ramen-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Form submitted!");

        const nameInput = document.getElementById('new-name');
        const restaurantInput = document.getElementById('new-restaurant');
        const imageInput = document.getElementById('new-image');
        const ratingInput = document.getElementById('new-rating');
        const commentInput = document.getElementById('new-comment');

        if (!nameInput || !restaurantInput || !imageInput || !ratingInput || !commentInput) {
            console.error("One or more input fields are missing from the HTML.");
            return;
        }

        const name = nameInput.value.trim();
        const restaurant = restaurantInput.value.trim();
        const image = imageInput.value.trim();
        const rating = Number(ratingInput.value.trim());
        const comment = commentInput.value.trim();

        if (!name || !restaurant || !image || !rating || !comment) {
            alert("Please fill in all fields!");
            return;
        }

        const newRamen = { id: ramens.length + 1, name, restaurant, image, rating, comment };
        ramens.push(newRamen);
        displayRamens();
        setTimeout(() => showDetails(newRamen), 100);
        e.target.reset();
    });
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