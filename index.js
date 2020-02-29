var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	  service: 'gmail',
	  auth: {
	      user: 'alseus13@gmail.com',
	      pass: 'Assalam13'
	  }
});

var mailOptions = {
	  from: 'alseus13@gmail.com',
	  to: 'nightart13@hotmail.com',
	  subject: 'Sending Email using Node.js',
	  text: 'Test send Emails by nodejs'
};

transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	      console.log(error);
	    } else {
	        console.log('Email sent: ' + info.response);
	    }
});
