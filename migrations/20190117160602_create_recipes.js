exports.up = function(knex, Promise) {
    return knex.schema.createTable(table => {
        table.increments();
        table.string('name').notNullable();
        table.string('directions').notNullable();
        table
            .integer('dish_id')
            .unsigned()
            .references('id')
            .inTable('dishes');
    });
};

exports.down = function(knex, Promise) {};
