exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('recipes')
        .truncate()
        .then(function() {
            // Inserts seed entries
            return knex('recipes')
                .insert([
                    {
                        name: 'Baked Chicken Schnitzel',
                        dish_id: 1,
                        directions:
                            "['Preheat oven to 425 degrees F (220 degrees C). Line a large baking sheet with aluminum foil and drizzle olive oil over foil. Place baking sheet in preheated oven.', 'Preheat oven to 425 degrees F (220 degrees C). Line a large baking sheet with aluminum foil and drizzle olive oil over foil. Place baking sheet in preheated oven. ', 'Mix flour and paprika together on a large plate. Beat eggs with salt and pepper in a shallow bowl. Mix bread crumbs and lemon zest together on a separate large plate. Dredge each chicken piece in flour mixture, then egg, and then bread crumbs mixture and set aside in 1 layer on a clean plate. Repeat with remaining chicken. ', 'Mix flour and paprika together on a large plate. Beat eggs with salt and pepper in a shallow bowl. Mix bread crumbs and lemon zest together on a separate large plate. Dredge each chicken piece in flour mixture, then egg, and then bread crumbs mixture and set aside in 1 layer on a clean plate. Repeat with remaining chicken. ', 'Bake in the preheated oven for 5 to 6 minutes. Flip chicken and continue baking until no longer pink in the center and the breading is lightly browned, 5 to 6 minutes more. An instant-read thermometer inserted into the center should read at least 165 degrees F (74 degrees C). ']",
                    },
                ])
                .then(() => {
                    return knex('dishes')
                        .truncate()
                        .then(() => {
                            return knex('dishes')
                                .insert([{ name: 'Schnitzel' }])
                                .then(() => {
                                    return knex('ingredients')
                                        .truncate()
                                        .then(() => {
                                            return knex('ingredients')
                                                .insert([
                                                    { name: 'Olive oil' },
                                                    { name: 'Chicken breast' },
                                                    { name: 'Salt' },
                                                    { name: 'Black pepper' },
                                                    {
                                                        name:
                                                            'All purpose flour',
                                                    },
                                                    { name: 'Paprika' },
                                                    { name: 'Egg' },
                                                    {
                                                        name:
                                                            'Seasoned bread crumbs',
                                                    },
                                                    { name: 'Lemon, zested' },
                                                ])
                                                .then(() => {
                                                    return knex(
                                                        'recipesingredients'
                                                    )
                                                        .truncate()
                                                        .then(() => {
                                                            return knex(
                                                                'recipesingredients'
                                                            ).insert([
                                                                {
                                                                    ingredient_id: 1,
                                                                    recipe_id: 1,
                                                                    quantity: 1,
                                                                    unit:
                                                                        'tablespoon',
                                                                },
                                                                {
                                                                    ingredient_id: 2,
                                                                    recipe_id: 1,
                                                                    quantity: 6,
                                                                    unit:
                                                                        'whole',
                                                                },
                                                                {
                                                                    ingredient_id: 3,
                                                                    recipe_id: 1,
                                                                    quantity: 0,
                                                                    unit:
                                                                        'to taste',
                                                                },
                                                                {
                                                                    ingredient_id: 4,
                                                                    recipe_id: 1,
                                                                    quantity: 0,
                                                                    unit:
                                                                        'to taste',
                                                                },
                                                                {
                                                                    ingredient_id: 5,
                                                                    recipe_id: 1,
                                                                    quantity: 0.75,
                                                                    unit: 'cup',
                                                                },
                                                                {
                                                                    ingredient_id: 6,
                                                                    recipe_id: 1,
                                                                    quantity: 1,
                                                                    unit:
                                                                        'tablespoon',
                                                                },
                                                                {
                                                                    ingredient_id: 7,
                                                                    recipe_id: 1,
                                                                    quantity: 2,
                                                                    unit:
                                                                        'whole',
                                                                },
                                                                {
                                                                    ingredient_id: 8,
                                                                    recipe_id: 1,
                                                                    quantity: 2,
                                                                    unit: 'cup',
                                                                },
                                                                {
                                                                    ingredient_id: 9,
                                                                    recipe_id: 1,
                                                                    quantity: 1,
                                                                    unit:
                                                                        'whole',
                                                                },
                                                            ]);
                                                        });
                                                });
                                        });
                                });
                        });
                });
        });
};
