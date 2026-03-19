import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // --Basic validation--
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    // --Send email via Resend--
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // use this until you verify a domain
      to: "devdosedaily@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0d9488;">New Contact Form Submission</h2>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9fafb; padding: 16px; border-radius: 8px;">
            ${message}
          </p>
          <hr />
          <p style="color: #9ca3af; font-size: 12px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    // --Also save to Strapi--
    const strapiRes = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/messages`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: { name, email, message, sentAt: new Date().toISOString() },
        }),
      },
    );

    // --Check strapi response--
    console.log("Strapi save status:", strapiRes.status);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
