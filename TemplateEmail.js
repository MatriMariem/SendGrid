const sgMail = require('@sendgrid/mail');
require('dotenv').config()


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  template_id: process.env.TEMPLATE_ID,
  from: 'meriemmatri1994@gmail.com',
  to: 'mariem.matri@holbertonschool.com',
  dynamic_template_data: {
  name: "Mariem",
  lastname: "Matri",
  age: 27,
  country: "Tunisia"
},
};

sgMail.send(msg, (error, response) => {
    if (error) {
      console.log("There is an error", error);
    } else {
      console.log("Email is Successfully sent!")
    }
  })
