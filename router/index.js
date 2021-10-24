module.exports = app => {
    const tutorials = require("../controller");

    let router = require("express").Router()

    // Create a new tutorial
    router.post("/", tutorials.create)

    app.use("/api/tutorials", router)
}