const messages = ['oatmeal with PB and frozen strawberries', 'avocado toast and eggs', 'protein chia pudding and a smoothie', 'matcha latte and wrap', 'spinach and cottage cheese on toast'];

function messageGenerator() {
    const randomBF = messages[Math.floor(Math.random()*messages.length)];
    document.getElementById("message").textContent = 'Your breakfast today is ' + randomBF + '!';
}

document.getElementById("generateBtn").addEventListener("click", messageGenerator);