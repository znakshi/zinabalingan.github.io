// JavaScript to add hover effect on hobbies

document.addEventListener('DOMContentLoaded', () => {
    const hobbies = document.querySelectorAll('section ul li');

    hobbies.forEach(hobby => {
        // Add hover effect when mouse is over the item
        hobby.addEventListener('mouseover', () => {
            hobby.style.backgroundColor = 'beige';
        });

        // Remove the hover effect when mouse leaves the item
        hobby.addEventListener('mouseout', () => {
            hobby.style.backgroundColor = '';
        });
    });
});
