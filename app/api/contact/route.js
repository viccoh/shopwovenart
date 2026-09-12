import { NextResponse } from "next/server";

// Stub contact handler so the form works out of the box in dev.
// Wire this up to a real email service before going live — e.g. Resend,
// Postmark, or SMTP via nodemailer — and send to your support inbox.
export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  console.log("New contact message:", { name, email, message });

  // TODO: replace with a real email send, e.g.:
  // await resend.emails.send({
  //   from: "Shopwovenart <hello@shopwovenart.com>",
  //   to: "hello@shopwovenart.com",
  //   subject: `New message from ${name}`,
  //   text: message,
  //   reply_to: email
  // });

  return NextResponse.json({ ok: true });
}
