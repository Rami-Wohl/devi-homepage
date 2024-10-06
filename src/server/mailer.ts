import nodemailer from "nodemailer";
import type Mail from "nodemailer/lib/mailer";
import { env } from "~/env";

export async function sendMail(name: string, email: string, message: string) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
          setting service as 'gmail' is same as providing these setings:
    
          host: "smtp.gmail.com",
          port: 465,
          secure: true
          
          If you want to use a different email provider other than gmail, you need to provide these manually.
          Or you can go use these well known services and their settings at
          https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
    auth: {
      user: env.EMAIL_ADDRESS,
      pass: env.EMAIL_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: env.EMAIL_ADDRESS,
    to: env.EMAIL_ADDRESS,
    subject: `New message from ${name}`,
    text: `${name} (${email}) sent you: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          console.error(err, mailOptions);
          reject(err);
        }
      });
    });

  try {
    await sendMailPromise();
    console.log("Email sent");
    return;
  } catch (err) {
    return err;
  }
}
