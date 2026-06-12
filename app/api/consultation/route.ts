import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, date, time, topic } = body;

    // Validate input
    if (!name || !email || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Send email to Keramion
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "ingo@keramion.com",
      subject: `New Consultation Request from ${name}`,
      html: `
        <h2>New Consultation Booking</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Requested Date:</strong> ${date}</p>
        <p><strong>Requested Time:</strong> ${time}</p>
        <p><strong>Topic:</strong> ${topic}</p>
      `,
      replyTo: email,
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Consultation Request Received - Keramion",
      html: `
        <h2>Consultation Request Received</h2>
        <p>Hi ${name},</p>
        <p>Thank you for booking a consultation with Keramion. We will confirm your appointment for ${date} at ${time} within 2 hours.</p>
        <p>If you have any questions, please don't hesitate to reply to this email.</p>
        <p>Best regards,<br>The Keramion Team</p>
      `,
    });

    return NextResponse.json(
      { message: "Consultation booked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error booking consultation:", error);
    return NextResponse.json(
      { error: "Failed to book consultation" },
      { status: 500 }
    );
  }
}
