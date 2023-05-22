

const notificationController = require("../controllers/notification.controller");


module.exports = (app) => {

    /**
     * Insert a new notification request
     * POST /notifyservice/api/v1/notifications
     *     
     * */
    app.post("/notifyservice/api/v1/notifications", notificationController.acceptNotificationRequest)


    /**
     * Get the notification status -> if the email notification was sent or not
     */
    app.get("/notifyservice/api/v1/notifications/:id", notificationController.getNotificationDetails)
}  