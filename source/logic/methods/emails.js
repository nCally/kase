
const nodemailer = require('nodemailer')
const Email = require('email-templates')

class Emails {

  transporter(){
    return nodemailer.createTransport({
      host:process.env.NM_HOST,
      port:Number(process.env.NM_PORT),
      auth: {
        user: process.env.NM_USERNAME,
        pass: process.env.NM_PASSWORD,
      }
    })
  }

  composer(){
    return new Email({
      message: {
        from:'Techub Website <contact@mrcally.com>',
        priority:'normal'
      },
      send:true,
      transport:this.transporter()
    })
  }

  async sendEmail(details){
    let { name, email, phone, msg } = details;

    try {
      
    this.composer().send({
      template:'techub',
      message: {
        to:'info@techub.no'
      },
      locals: {
        name, email, phone, msg
      }
    })

    } catch (e) {
      throw e;
    }
  }

}

module.exports = Emails;