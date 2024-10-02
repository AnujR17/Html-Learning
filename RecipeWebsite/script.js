document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        
    const isExpanded = mainNav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
    });

    // Smooth scrollingeffect
    document.addEventListener('click', function (e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Search functionality
    const searchForm = document.querySelector('.search-form');
    const recipeGrid = document.getElementById('recipe-grid');

    if (searchForm && recipeGrid) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = document.getElementById('search-input').value.toLowerCase();
            const recipes = recipeGrid.querySelectorAll('.recipe-card');

            recipes.forEach(recipe => {
                const title = recipe.querySelector('h4').textContent.toLowerCase();
                const description = recipe.querySelector('p').textContent.toLowerCase();
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    recipe.style.display = '';
                    recipe.style.opacity = '1';
                } else {
                    recipe.style.opacity = '0';
                    setTimeout(() => {
                        recipe.style.display = 'none';
                    }, 500);
                }
            });
        });
    }

    // Recipe detail page
    const recipeContent = document.getElementById('recipe-content');
    if (recipeContent) {
        const urlParams = new URLSearchParams(window.location.search);
        const recipeId = urlParams.get('id');
        
        if (recipeId) {
            fetchRecipe(recipeId);
        }
    }

    function fetchRecipe(id) {
        let recipe;
        switch (id) {
            case 'pani-puri':
                recipe = {
                    title: 'Pani Puri',
                    image: 'https://imgs.search.brave.com/_hgZGrizorU6S3lZLBhnSeve5rtnX_bu0UmsbZ2Faro/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU5/NTgyNzkzL3Bob3Rv/L3BhYW5pLXB1cmku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUJUeGlZSnVjNmZz/VE5mLUVzazY0UGow/UHhITEdyQlhHT0l5/R0J2bHFmZ289',
                    description: 'Crispy hollow puris filled with spicy tangy water, potatoes, and chickpeas.',
                    prepTime: '30 minutes',
                    servings: '4',
                    ingredients: [
                        '20 puri shells',
                        '2 potatoes, boiled and mashed',
                        '1 cup chickpeas, cooked',
                        '1 onion, finely chopped',
                        '2 cups mint leaves',
                        '1 cup tamarind pulp',
                        '1 tbsp chaat masala',
                        'Salt to taste'
                    ],
                    instructions: [
                        'Prepare the pani (water) by blending mint leaves, tamarind pulp, and spices.',
                        'Mix mashed potatoes, chickpeas, and chopped onions for the filling.',
                        'Make a small hole in each puri shell.',
                        'Fill the puri with the potato mixture.',
                        'Dip in the prepared pani and serve immediately.'
                    ]
                };
                break;
            case 'vada-pav':
                recipe = {
                    title: 'Vada Pav',
                    image: 'https://imgs.search.brave.com/cJ5_CaO-tkW99PKw3ncQDYzUNt-OYO8FGJwCc2P2FhE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTM5/ODA2Njk4L3Bob3Rv/L25ldy1kZWxoaS1p/bmRpYS1qdW5lLTA4/LXZhZGEtcGF2LWp1/bmN0aW9uLXJlc3Rh/dXJhbnQtZmFtb3Vz/LXZhZGEtcGF2LWF0/LXNhdHlhLW5pa2V0/YW4taW4tbmV3Lmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1v/Tkpja3RydHJEdDN1/N1h3SmNTT1VWakw1/TGxoZzZKZ2NMMUlU/OWMtTVZBPQ',
                    description: 'Spicy potato fritter in a soft bun with chutneys, Mumbai\'s favorite street food.',
                    prepTime: '40 minutes',
                    servings: '4',
                    ingredients: [
                        '4 pav (soft buns)',
                        '4 large potatoes, boiled and mashed',
                        '1 cup gram flour (besan)',
                        '1 tsp mustard seeds',
                        '1 tsp turmeric powder',
                        '2 green chilies, finely chopped',
                        'Oil for frying',
                        'Salt to taste'
                    ],
                    instructions: [
                        'Mix mashed potatoes with spices to make the filling.',
                        'Make small balls from the potato mixture.',
                        'Prepare a batter with gram flour and spices.',
                        'Dip potato balls in the batter and deep fry until golden brown.',
                        'Slice pav buns and place the fried vada inside.',
                        'Serve with green chutney and tamarind chutney.'
                    ]
                };
                break;
                case 'aloo-tikki':
                    recipe = {
                        title: 'Aloo Tikki',
                        image: 'https://imgs.search.brave.com/JuvhgT5Tx6cDfq0UMUhdUO8LGTUNmjLiqFgt8xQgPes/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzM5Lzk2LzIx/LzM2MF9GXzczOTk2/MjE0N19TcW4xS0lJ/UnpFOGNEb2hOWDJD/Y3V2TGxCc2xXVUdl/Ni5qcGc',
                        description: 'Aloo Tikki is a popular Indian street food made from mashed potatoes and spices, pan-fried to crispy perfection. It’s served with chutneys or stuffed in burgers for a delicious snack.',
                        prepTime: '20 minutes',
                        servings: '4',
                        ingredients: [
                            '2 cups puffed rice (murmura)',
                            '1/2 cup sev (fried gram flour noodles)',
                            '1 medium onion, finely chopped',
                            '1 medium tomato, finely chopped',
                            '1 boiled potato, diced',
                            '2 tablespoons tamarind chutney',
                            '1 tablespoon green chutney (mint-coriander)',
                            '1 teaspoon chaat masala',
                            '1 green chili, finely chopped (optional)',
                            'Fresh coriander, chopped',
                            'Salt to taste',
                            'Lemon juice, to taste'
                        ],
                        instructions: [
                            'In a large bowl, combine puffed rice, chopped onions, tomatoes, and boiled potato.',
                            'Add tamarind chutney, green chutney, and chaat masala. Mix well to coat all the ingredients.',
                            'Add sev, chopped green chili, and fresh coriander.',
                            'Squeeze lemon juice over the mixture and toss everything together.',
                            'Serve immediately in bowls or paper cones for an authentic street food experience.'
                        ]
                    };
                    break;
                    case 'bhel-puri':
                        recipe = {
                            title: 'Bhel Puri',
                            image: 'https://imgs.search.brave.com/-yTBxyx1oc9ZfWZZVCXVMxJl7bGPeyhzs9mhlNo65o0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/NzY5ODc3Ny9waG90/by9iaGVsLXB1cmku/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUQ4ZVV6N0VDM0dE/OU96QUhzNGJsU002/NzZmSnNIcWROU1hq/VzBVTXVZRTA9',
                            description: 'Bhel Puri is a refreshing, tangy, and spicy snack made with puffed rice, chutneys, and crunchy sev. It’s one of the most loved street food items in India, perfect for a quick bite.',
                            prepTime: '10 minutes',
                            servings: '4',
                            ingredients: [
                                '4 pav (soft buns)',
                                '4 large potatoes, boiled and mashed',
                                '1 cup gram flour (besan)',
                                '1 tsp mustard seeds',
                                '1 tsp turmeric powder',
                                '2 green chilies, finely chopped',
                                'Oil for frying',
                                'Salt to taste'
                            ],
                            instructions: [
                                'Mix mashed potatoes with spices to make the filling.',
                                'Make small balls from the potato mixture.',
                                'Prepare a batter with gram flour and spices.',
                                'Dip potato balls in the batter and deep fry until golden brown.',
                                'Slice pav buns and place the fried vada inside.',
                                'Serve with green chutney and tamarind chutney.'
                            ]
                        };
                        break;
                case 'pav-bhaji':
                    recipe = {
                            title: 'Pav Bhaji',
                            image: 'https://imgs.search.brave.com/CvnfJv9ScDLFojWaa8uA1_QYVKTjjsQvmlxQ1H9x7Ko/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA0LzcwLzg5LzEy/LzM2MF9GXzQ3MDg5/MTI3MF9uUUpPZ1Za/TTRYZDdyTk8yc2xh/bkZpcjB0VGNtUzkw/ci5qcGc',
                            description: 'A spicy mashed vegetable curry served with buttered bread rolls.',
                            prepTime: '45 minutes',
                            servings: '4',
                            ingredients: [
                                '4 pav (soft buns)',
                                '2 potatoes, boiled and mashed',
                                '1 cup mixed vegetables (carrots, p eas, cauliflower), chopped',
                                '2 tomatoes, chopped',
                                '1 onion, finely chopped',
                                '2 tbsp butter',
                                '2 tbsp pav bhaji masala',
                                'Salt to taste'
                            ],
                            instructions: [
                                'Cook mixed vegetables until soft, then mash them.',
                                'In a pan, sauté onions in butter until golden brown.',
                                'Add tomatoes and cook until mushy.',
                                'Add mashed vegetables, pav bhaji masala, and salt. Cook for 10 minutes.',
                                'Toast the pav buns with butter.',
                                'Serve the bhaji hot with buttered pav on the side.'
                            ]
                    };
                    break;
            case 'frankie':
                recipe = {
                    title: 'Frankie',
                    image: 'https://c8.alamy.com/comp/M4BDFM/indian-street-veg-roll-frankie-stuffed-with-vegetables-close-up-on-M4BDFM.jpg',
                    description: 'Indian-style wrap filled with spicy potato or paneer, vegetables, and chutneys.',
                    prepTime: '30 minutes',
                    servings: '4',
                    ingredients: [
                        '4 large chapatis or tortillas',
                        '2 cups mashed potatoes or crumbled paneer',
                        '1 onion, finely chopped',
                        '1 tomato, finely chopped',
                        '1/2 cup bell peppers, finely chopped',
                        '2 tbsp oil',
                        '1 tsp cumin seeds',
                        '1 tsp garam masala',
                        'Green chutney and tamarind chutney',
                        'Salt to taste'
                    ],
                    instructions: [
                        'Heat oil and sauté cumin seeds until they splutter.',
                        'Add vegetables and cook until soft.',
                        'Add mashed potatoes or paneer, garam masala, and salt. Cook for 5 minutes.',
                        'Warm the chapatis or tortillas.',
                        'Spread green chutney and tamarind chutney on each chapati.',
                        'Place the filling in the center and roll tightly.',
                        'Serve hot, optionally wrapped in foil for easy handling.'
                    ]
                };
                break;
            default:
                recipe = null;
        }

        if (recipe) {
            displayRecipe(recipe);
        } else {
            recipeContent.innerHTML = '<p>Recipe not found.</p>';
        }
    }

    function displayRecipe(recipe) {
        recipeContent.innerHTML = `
            <h2>${recipe.title}</h2>
            <div class="recipe-meta">
                <span>⏱️ ${recipe.prepTime}</span>
                <span>👤 ${recipe.servings} servings</span>
            </div>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <section class="recipe-description">
                <h3>Description</h3>
                <p>${recipe.description}</p>
            </section>
            <section class="recipe-ingredients">
                <h3>Ingredients</h3>
                <ul>
                    ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                </ul>
            </section>
            <section class="recipe-instructions">
                <h3>Instructions</h3>
                <ol>
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </section>
        `;
    }
});