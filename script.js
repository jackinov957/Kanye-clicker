// Function to create falling images
function createFallingImage() {
    const fallingImage = document.createElement('img');
    const images = ['biteass.webp', 'kanyebear.png'];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    fallingImage.src = randomImage;
    fallingImage.className = 'falling-image';

    // Position the image randomly on the left side
    fallingImage.style.left = `${Math.random() * 100}%`;
    fallingImage.style.top = `-50px`; // Start above the screen

    document.getElementById('left-side').appendChild(fallingImage);

    // Animate the image falling down and fading out
    requestAnimationFrame(() => {
        fallingImage.style.top = `100%`; // Move to the bottom of the screen
        fallingImage.style.opacity = '0'; // Fade out
    });

    // Remove the image after it falls
    setTimeout(() => {
        fallingImage.remove();
    }, 5000); // Duration of the animation
}

// Create multiple falling images every 1 second
setInterval(() => {
    createFallingImage();
    createFallingImage(); // Create two images at once
}, 1000);

// Handle click events on Kanye image
document.getElementById('kanye').addEventListener('click', function(event) {
    // You can add more interactions here if needed
});

// Create multiple falling images every 1 second
setInterval(() => {
    createFallingImage();
    createFallingImage(); // Create two images at once
}, 1000);
