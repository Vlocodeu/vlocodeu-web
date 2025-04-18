import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Sevai Delete Request" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Delete Request from ${name}`,
    html: `
      <h2>Sevai Network – Delete Account Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Reason:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
    });
  }
}
