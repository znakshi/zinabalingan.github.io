// Select all images in the gallery
const images = document.querySelectorAll('section img');

// Add a click event listener to each image
images.forEach(image => {
    image.addEventListener('click', () => {
        alert(`You clicked on: ${image.alt}`);
    });
});
