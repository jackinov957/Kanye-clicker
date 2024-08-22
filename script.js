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
    dollar.src = 'dollar.png';
    dollar.className = 'dollar';

    // Position the dollar image where the click occurred
    dollar.style.left = `${event.clientX - 15}px`;
    dollar.style.top = `${event.clientY - 15}px`;

    document.body.appendChild(dollar);

    // Animate the dollar floating up and fading out
    setTimeout(() => {
        dollar.style.transform = 'translateY(-100px)';
        dollar.style.opacity = '0';
    }, 10);

    // Remove the dollar after the animation
    setTimeout(() => {
        dollar.remove();
    }, 1000);
});

// Function to create a falling image
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

// Create a new falling image every 2 seconds
setInterval(createFallingImage, 2000);
