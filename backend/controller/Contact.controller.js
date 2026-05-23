const { asyncController } = require("../helper/asyncController");
const nodemailer = require("nodemailer");
const { apiResponse } = require("../helper/apiResponse");

exports.createContactController = asyncController(async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODE_GMAIL,
      pass: process.env.NODE_PASS,
    },
  });

  await transporter.sendMail({
    from: email,
    to: process.env.NODE_GMAIL,
    subject: `🚀 New Contact Message from ${name}`,
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>

<body style="
  margin:20px;
  padding:20px;
  background:#070B14;
  font-family:Arial, sans-serif;
">

  <div style="
    max-width:650px;
    margin:40px auto;
    background:rgba(255,255,255,0.03);
    border:1px solid rgba(255,255,255,0.08);
    border-radius:24px;
    overflow:hidden;
    box-shadow:0 0 40px rgba(236,72,153,0.08);
  ">

    <!-- Top Gradient -->
    <div style="
      background:linear-gradient(90deg,#ec4899,#8b5cf6,#3b82f6);
      padding:3px;
    "></div>

    <!-- Header -->
    <div style="
      padding:40px 35px 20px;
      text-align:center;
    ">

      <h1 style="
        color:white;
        font-size:32px;
        margin:0;
        font-weight:700;
      ">
        🚀 New Contact Message
      </h1>

      <p style="
        color:rgba(255,255,255,0.55);
        margin-top:12px;
        font-size:15px;
        line-height:1.7;
      ">
        ${name} contacted you from Mock interview.
      </p>
    </div>

    <!-- Content -->
    <div style="
      padding:20px 35px 40px;
    ">

      <!-- Card -->
      <div style="
        background:rgba(255,255,255,0.04);
        border:1px solid rgba(255,255,255,0.08);
        border-radius:20px;
        padding:24px;
      ">

        <!-- Name -->
        <div style="margin-bottom:24px;">
          <p style="
            color:#ec4899;
            margin:0 0 8px;
            font-size:13px;
            letter-spacing:1px;
            text-transform:uppercase;
          ">
            Full Name
          </p>

          <h2 style="
            color:white;
            margin:0;
            font-size:22px;
            font-weight:600;
          ">
            ${name}
          </h2>
        </div>

        <!-- Email -->
        <div style="margin-bottom:24px;">
          <p style="
            color:#8b5cf6;
            margin:0 0 8px;
            font-size:13px;
            letter-spacing:1px;
            text-transform:uppercase;
          ">
            Email Address
          </p>

          <a
            href="mailto:${email}"
            style="
              color:white;
              text-decoration:none;
              font-size:18px;
            "
          >
            ${email}
          </a>
        </div>

        <!-- Message -->
        <div>
          <p style="
            color:#3b82f6;
            margin:0 0 12px;
            font-size:13px;
            letter-spacing:1px;
            text-transform:uppercase;
          ">
            Message
          </p>

          <div style="
            background:rgba(255,255,255,0.03);
            border:1px solid rgba(255,255,255,0.06);
            border-radius:16px;
            padding:20px;
            color:rgba(255,255,255,0.75);
            line-height:1.8;
            font-size:15px;
          ">
            ${message}
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div style="
        margin-top:28px;
        text-align:center;
      ">
        <p style="
          color:rgba(255,255,255,0.35);
          font-size:13px;
          line-height:1.7;
        ">
          This email was sent from your Mock contact system.
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`,
  });
  if(!transporter) {
    return apiResponse(res, 500, "Failed to send message");
  }else{
      return apiResponse(res, 200, "Message sent successfully");
  }
});
