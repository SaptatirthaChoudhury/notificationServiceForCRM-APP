const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");

/**
 * Initializing the DB connection
 */
mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
    console.log("error while connecting to DB");
});
db.once("open", () => {
    console.log("connected to Mongo DB successfully")

});
/**
 * Stitch the router to server.js
 */
const notificationServiceRoute = require("./routes/notification.route");

notificationServiceRoute(app);

/**
 * Attach the cron file also
 */
require("./schedulers/emailScheduler");






app.listen(8000, () => {         // TODO : Move this port num to the config folder and .env file
    console.log("Server started");
})