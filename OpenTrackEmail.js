const sgMail = require('@sendgrid/mail');
require('dotenv').config()


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  from: 'meriemmatri1994@gmail.com',
  to: 'mariem.matri@holbertonschool.com',
  subject: 'Open Tracking check result',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  tracking_settings: {
    open_tracking: {
      enable: true
    }
  }

};

sgMail.send(msg, (error, response) => {
    if (error) {
      console.log("There is an error", error);
    } else {
      console.log("Email is Successfully sent!")
    }
  })
