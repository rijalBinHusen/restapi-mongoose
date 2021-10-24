// require model
const db = require("../models");
// const for document
const Tutorial = db.tutorials;

// create and save a new tutorial
exports.create = (req, res) => {
    // if no title
    if(!req.body.title) {
        res.status(400).send({
            message: "Content can't be empty!"
        })
        return;
    }
    // create a new tutorial
    const tutorial = new Tutorial({
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    })

    // Save to mongodb

    tutorial
        .save(tutorial)
        .then(data => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while save tutorial to database"
            })
        })
};


// find all tutorial in databasee
exports.findAll = (req, res) => {
    const title = req.query.title;
    let condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

    Tutorial.find(condition)
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occured while find all tutorial in database"
            })
        })
}

// update tutorial by id
exports.update = (req, res) => {

    if(!req.body) {
        return res.status(400).send({
            message: "Data to update can't be empty"
        })
    }

    const id = req.params.id;

    Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then((data) => {
            if(!data) {
                res.status(400).send({
                    message: `Can't update tutorial with id ${id}. Maybe tutorial was not found!`
                })
            }
            else res.send({ message: "Tutorial was updated successfully."})
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || `Failed to update tutorial with id ${id}`
            })
        })
}