const db = require("./db-config.js")

module.exports = ({
    find,
    findById,
    findSteps,
    add,
    update,
    remove
})

function find() {
    return db.select("*").from("schemes");
}

function findById(id) {
    return db("schemes")
    .where({ id })
    .first()
}

function findSteps(id) {
    return db("steps")
    .where({ scheme_id: id })
}

function add(scheme) {
    return db("schemes")
    .insert(scheme)
    .then(ids => {
        return findById(ids[0])
    })
}

function update(id, changes) {
    return db("schemes")
    .where({ id })
    .update(changes)
}

function remove(id) {
    return db("schemes")
    .where({ id })
    .del();
}