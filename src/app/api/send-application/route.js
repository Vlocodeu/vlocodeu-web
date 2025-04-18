import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const {
    firstName,
    lastName,
    email,
    phone,
    experience,
    description,
    fileName,
    fileData,
  } = body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Vlocodeu Careers" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_TO,
    subject: `Application from ${firstName} ${lastName}`,
    html: `
      <h2>New Application</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Experience:</strong> ${experience} years</p>
      <p><strong>Description:</strong><br/>${description}</p>
    `,
    attachments: [
      {
        filename: fileName,
        content: fileData.split("base64,")[1],
        encoding: "base64",
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ success: true });
  } catch (err) {
    console.error("📧 Error sending email:", err);
    return new Response(JSON.stringify({ error: "Failed to send" }), {
      status: 500,
    });
  }
}
