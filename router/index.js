module.exports = app => {
    const tutorials = require("../controller");

    let router = require("express").Router()

    // Create a new tutorial
    router.post("/", tutorials.create)

    // retrieve all
    router.get("/", tutorials.findAll)

    // updata data by id
    router.put("/:id", tutorials.update)

    // retrieve all data with condition published == true
    router.get("/published", tutorials.findAllPublished)

    // retrieve data by id
    router.get("/:id", tutorials.findOne)

    // delete data by id
    router.delete("/:id", tutorials.delete)

    app.use("/api/tutorials", router)
}