const sgMail = require('@sendgrid/mail');
require('dotenv').config()
const moment= require('moment')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const time = moment().add(3, 'minutes').unix();

const msg = {
  send_at: time,
  from: {
    email: 'meriemmatri1994@gmail.com',
    name: 'Mariem Matri'
  },
  to: [
    {
      email: 'mariem.matri@holbertonschool.com',
      name: 'your supposed name'
    },
    'meriemmatri1994@gmail.com'
  ],
  cc: [
    {
      email: 'mariem@lami.world',
    }
  ],
  bcc:
  'ilyesjihenmeriem@yahoo.fr'
,

  subject: 'Subject of Email to Many recipients',
  text: 'Can you see each others?',
};

sgMail.send(msg, (error, response) => {
    if (error) {
      console.log("There is an error", error);
    } else {
      console.log("Email is Successfully sent!")
    }
  })
