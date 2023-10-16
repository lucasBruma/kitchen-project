import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, first_name, last_name, subject, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_MAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  const text = `
    From: ${first_name} ${last_name}

    Email: ${email}

    Message: ${message} 
    `;

  const mailOptions = {
    from: email,
    to: process.env.NODEMAILER_MAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `${subject}. Message from ${first_name} ${last_name}`,
    text: text,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
