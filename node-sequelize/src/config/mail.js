


const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user:"noreply@syntizen.com", // generated ethereal user
    pass:"AmSMLUqPVI8v7cSv", // generated ethereal password
  },
});

// send mail with defined transport object
 


module.exports=transporter