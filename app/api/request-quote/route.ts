import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Basic validation (important for production)
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. smtp.hostinger.com
      port: Number(process.env.SMTP_PORT), // usually 465 or 587
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER, // sales@tnengineering.co.za
        pass: process.env.SMTP_PASS, // email password
      },
    });

    await transporter.sendMail({
      from: `"TN Engineering Website" <${process.env.SMTP_USER}>`,
      to: "sales@tnengineering.co.za",
      replyTo: data.email,
      subject: "New Quote Request – TN Engineering",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "-"}</p>
        <p><strong>Service:</strong> ${data.service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote request error:", error);
    return NextResponse.json(
      { error: "Failed to send quote request" },
      { status: 500 }
    );
  }
}
