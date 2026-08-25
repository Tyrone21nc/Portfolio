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
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: subject,
      text: `
            <h1>Message:</h1>
            <p>${message}</p>

            
            <h2>Name: ${name}</h2>
            <h2>Email: ${email}</h2>
            <h2>Phone: ${phone}</h2>
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