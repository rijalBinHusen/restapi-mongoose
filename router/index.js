module.exports = app => {
    const tutorials = require("../controller");

    let router = require("express").Router()

    // Create a new tutorial
    router.post("/", tutorials.create)

    // retrieve all
    router.get("/", tutorials.findAll)

    // updata data by id
    router.put("/:id", tutorials.update)

    app.use("/api/tutorials", router)
}