import { NextResponse } from "next/server";

// Verifies a Paystack transaction reference server-side, using the secret
// key. Never verify payment success using only the client-side popup
// callback — always confirm with this endpoint (or a webhook) before
// marking an order as paid and fulfilling it.
export async function POST(request) {
  const { reference } = await request.json();

  if (!reference) {
    return NextResponse.json({ error: "Missing reference" }, { status: 400 });
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "PAYSTACK_SECRET_KEY is not configured on the server" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`
        },
        cache: "no-store"
      }
    );
    const data = await res.json();

    if (!res.ok || data?.data?.status !== "success") {
      return NextResponse.json(
        { verified: false, detail: data },
        { status: 400 }
      );
    }

    // TODO: at this point, save the order to your database/order system
    // using data.data (amount, customer email, metadata, reference) and
    // trigger fulfillment / a confirmation email.

    return NextResponse.json({ verified: true, data: data.data });
  } catch (err) {
    return NextResponse.json(
      { error: "Could not reach Paystack", detail: String(err) },
      { status: 502 }
    );
  }
}
