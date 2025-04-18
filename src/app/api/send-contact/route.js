import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, message } = body;

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
    from: `"Vlocodeu Website" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `New Contact Message from ${name}`,
    html: `
      <h2>New Message from Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (err) {
    console.error("📧 Contact Form Error:", err);
    return new Response(JSON.stringify({ error: "Email failed" }), {
      status: 500,
    });
  }
}
