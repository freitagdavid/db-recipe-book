const db = require('../knexfile');

exports.getAll = async db => {
    if (!db) {
        throw 'err: db argument is required';
    }
    return db('dishes');
};

exports.addDish = async (dish, db) => {
    console.log(dish, db);
    if (!dish) {
        throw `err: Expected {dish: <dish name>} instead got ${dish}`;
    }
    if (!db) {
        throw 'err: db argument is required';
    }
    return db('dishes').insert(dish);
};

exports.getDish = async (id, db) => {
    if (!id) {
        throw 'err: Id argument is required';
    }
    if (!db) {
        throw 'err: db argument is required';
    }
    return db('dishes').where('id', 'like', id);
};
