import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  console.log("📩 /api/request-quote called");

  try {
    // 1️⃣ Parse request body
    let data;
    try {
      data = await req.json();
      console.log("✅ Parsed request body:", data);
    } catch (err) {
      console.error("❌ Failed to parse JSON body", err);
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    // 2️⃣ Validate required fields
    if (!data.name || !data.email || !data.message) {
      console.error("❌ Missing required fields", data);
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // 3️⃣ Log env vars presence (NOT values)
    console.log("🔍 SMTP ENV CHECK:", {
      SMTP_HOST: !!process.env.SMTP_HOST,
      SMTP_PORT: !!process.env.SMTP_PORT,
      SMTP_USER: !!process.env.SMTP_USER,
      SMTP_PASS: !!process.env.SMTP_PASS,
    });

    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_PORT ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASS
    ) {
      console.error("❌ Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server email configuration error" },
        { status: 500 }
      );
    }

    // 4️⃣ Create transporter
    console.log("📡 Creating SMTP transporter…");

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 5️⃣ Verify SMTP connection (VERY IMPORTANT)
    try {
      await transporter.verify();
      console.log("✅ SMTP connection verified");
    } catch (err) {
      console.error("❌ SMTP verification failed", err);
      return NextResponse.json(
        { error: "Email server connection failed" },
        { status: 500 }
      );
    }

    // 6️⃣ Send email
    console.log("✉️ Sending email to sales@tnengineering.co.za");

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

    console.log("✅ Email sent successfully");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🔥 UNHANDLED ERROR in request-quote route:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
