const sgMail = require('@sendgrid/mail');
require('dotenv').config()


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  from: {
    email: 'meriemmatri1994@gmail.com',
    name: 'Baby Girl'
  },
  to: 'mariem.matri@holbertonschool.com',
  subject: 'Subject of Email',
  text: 'Checking name',
  html: 'My name is <h3>Mariem Matri</h3>',
};

sgMail.send(msg, (error, response) => {
    if (error) {
      console.log("There is an error", error);
    } else {
      console.log("Email is Successfully sent!")
    }
  })
