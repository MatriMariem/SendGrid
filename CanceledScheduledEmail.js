const sgMail = require('@sendgrid/mail');
require('dotenv').config()
const moment= require('moment')


sgMail.setApiKey(process.env.SENDGRID_API_KEY);


const time = moment().add(1, 'minutes').unix();

const msg = {
  send_at: time,
  batch_id: process.env.BATCH_ID,
  from: {
    email: 'meriemmatri1994@gmail.com',
    name: 'Mariem Matri'
  },
  to: [
    {
      email: 'mariem.matri@holbertonschool.com',
      name: 'your name'
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

  subject: 'Subject of the canceled Email',
  text: 'You should not really receive this unless the cancellation/pausing is deleted',
};

sgMail.send(msg, (error, response) => {
    if (error) {
      console.log("There is an error", error);
    } else {
      console.log("Email is Successfully sent!")
    }
  })
