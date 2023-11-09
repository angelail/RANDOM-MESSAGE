const messages = ['Oatmeal with PB and frozen strawberries', 'Avocado toast and eggs', 'Protein chia pudding and a smoothie', 'Matcha latte and wrap', 'Spinach and cottage cheese on toast'];

function messageGenerator() {
    const randomBF = messages[Math.floor(Math.random()*messages.length)];
    console.log('Your breakfast today is ' + randomBF + ' !');
}