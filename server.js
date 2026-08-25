import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${name}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5174, () => {
  console.log("Server running on port 5174");
});