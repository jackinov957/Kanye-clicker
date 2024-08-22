let dollars = 0;
const kanye = document.getElementById('kanye');
const score = document.getElementById('score');

kanye.addEventListener('click', function(event) {
    // Increment the dollar count
    dollars++;
    score.textContent = `Dollars: ${dollars}`;

    // Create a new dollar image
    const dollar = document.createElement('img');
    dollar.src = 'dollar.jpeg';
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
