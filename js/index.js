function addRecipe() {
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    
    const ingredients = [];
    if (document.getElementById('fruit').checked) ingredients.push('Fruit');
    if (document.getElementById('vegetables').checked) ingredients.push('Vegetables');
    if (document.getElementById('Grains').checked) ingredients.push('Grains');
    if (document.getElementById('dairy').checked) ingredients.push('Dairy');
    
    const type = document.getElementById('type').value;
    
    const recipe = {
        email: email,
        date: date,
        ingredients: ingredients,
        type: type
    };
    
    sessionStorage.setItem('recipe', JSON.stringify(recipe));
    
    const reply = document.getElementById('reply');
    reply.innerHTML = '<li>Recipe added!</li>';
}
