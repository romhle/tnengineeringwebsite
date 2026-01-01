import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"TN Engineering Website" <${process.env.SMTP_USER}>`,
    to: "sales@tnengineering.co.za",
    subject: "New Quote Request",
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone}</p>
      <p><strong>Service:</strong> ${data.service}</p>
      <p><strong>Message:</strong><br/>${data.message}</p>
    `,
  });

  return NextResponse.json({ success: true });
}
