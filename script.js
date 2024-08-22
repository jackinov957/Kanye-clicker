let dollars = 0;
const kanye = document.getElementById('kanye');
const score = document.getElementById('score');
const leftSide = document.getElementById('left-side');

kanye.addEventListener('click', function(event) {
    // Increment the dollar count
    dollars++;
    score.textContent = `Dollars: ${dollars}`;

    // Create a new dollar image
    const dollar = document.createElement('img');
    dollar.src = 'dollar.jpeg';
    dollar.className = 'dollar-image';

    // Position the dollar image where the click occurred
    dollar.style.left = `${event.clientX - 25}px`; // Adjust for image width
    dollar.style.top = `${event.clientY - 25}px`; // Adjust for image height

    document.body.appendChild(dollar);

    // Animate the dollar image floating up and fading out
    setTimeout(() => {
        dollar.style.transform = 'translateY(-100px)';
        dollar.style.opacity = '0';
    }, 10);

    // Remove the dollar image after the animation
    setTimeout(() => {
        dollar.remove();
    }, 5000);
});

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

    leftSide.appendChild(fallingImage);

    // Animate the image falling down and fading out
    setTimeout(() => {
        fallingImage.style.top = `100%`; // Move to the bottom of the screen
        fallingImage.style.opacity = '0';
    }, 10);

    // Remove the image after it falls
    setTimeout(() => {
        fallingImage.remove();
    }, 5000);
}

// Create multiple falling images every 1 second
setInterval(() => {
    createFallingImage();
    createFallingImage(); // Create two images at once
}, 1000);

