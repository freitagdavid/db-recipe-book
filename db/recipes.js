exports.getAll = async db => {
    if (!db) {
        throw 'err: db argument is required';
    }
    return db
        .select('recipes.*', 'dishes.name as dish')
        .from('dishes')
        .join('recipes', 'dishes.id', 'recipes.dish_id');
};
