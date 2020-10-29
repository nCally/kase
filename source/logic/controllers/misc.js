const Email = require('../methods/emails');
// send email for techub
// interim solution

let emailsend = new Email();

module.exports = {

async sendemail(req, res){
  let message = req.body;

  await emailsend.sendEmail(message);

  res.status(200).json({
    message:'sent'
  })
},

}