const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

// Email configuration
const transporter = nodemailer.createTransport({
  service: "Gmail", // Or use another email provider
  auth: {
    user: "kdmehetre2@gmail.com", // Replace with your email
    pass: "112233", // Replace with your password or app-specific password
  },
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: "admin-email@example.com", // Admin email address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
