import { NextResponse } from 'next/server';

// This is a stub. Wire it up to a real email service before going live —
// e.g. Resend (resend.com), SendGrid, or Nodemailer + an SMTP provider.
// For now it validates the payload and logs it server-side.
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    // TODO: replace with a real send, e.g.:
    // await resend.emails.send({
    //   from: 'portfolio@yourdomain.com',
    //   to: 'you@email.com',
    //   subject: `New message from ${name}`,
    //   text: message,
    //   reply_to: email,
    // });

    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
