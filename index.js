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
