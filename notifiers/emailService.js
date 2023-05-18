/**
* This file will contain the sample code for sending the email notification
*/
const nodemailer = require("nodemailer");

module.exports = nodemailer.createTransport({
    port: 465,
    // host: "smtp.gmail.com",
    service: "gmail",
    auth: {
        user: "saptatirtha@gmail.com",
        pass: "bgsxmeoeoxjamrzi"
    },
    secure: true,
});