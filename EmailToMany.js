const sgMail = require('@sendgrid/mail');
require('dotenv').config()


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
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
