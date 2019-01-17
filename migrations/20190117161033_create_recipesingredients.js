exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipesingredients', table => {
        table.increments();
        table
            .string('ingredient_id')
            .unsigned()
            .references('id')
            .inTable('ingredients')
            .notNullable();
        table
            .string('recipe_id')
            .unsigned()
            .references('id')
            .inTable('recipes')
            .notNullable();
        table.float('quantity').notNullable();
        table.string('unit').notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipesingredients');
};
