const messages = ['oatmeal with PB and frozen strawberries', 'avocado toast and eggs', 'protein chia pudding and a smoothie', 'matcha latte and wrap', 'spinach and cottage cheese on toast'];

function messageGenerator() {
    const randomBF = messages[Math.floor(Math.random()*messages.length)];
    const flyOutElement = document.querySelector('.fly-out-element');
    document.getElementById("message").textContent = 'Your breakfast today is ' + randomBF + '!';
}

document.getElementById("generateBtn").addEventListener('click', (messageGenerator) => {
    flyOutElement.style.animation = 'fly-out 1s ease forwards';
});