const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  secure: true,
});

const sendContactmail = async (formData) => {
  try {
    const {
      firstName,
      lastName,
      phone,
      company,
      email,
      jobTitle,
      linkdin,
      message,
      agree,
    } = formData;

    const name = [firstName, lastName].filter(Boolean).join(" ") || "—";
    const safe = (v) => (v && String(v).trim() ? v : "—");

    const mailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Simple Contact Inquiry",
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Phone Number:</strong> ${safe(phone)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Company:</strong> ${safe(company)}</p>
        <p><strong>Job Title:</strong> ${safe(jobTitle)}</p>
        <p><strong>LinkedIn:</strong> ${
          linkdin && String(linkdin).trim()
            ? `<a href="${linkdin}" target="_blank" rel="noopener noreferrer">${linkdin}</a>`
            : "—"
        }</p>
        <p><strong>Agreed to Policy:</strong> ${agree ? "Yes" : "No"}</p>
        <p><strong>Requirements:</strong><br>${
          message && String(message).trim() ? message : "—"
        }</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Error sending contact email:", err);
    throw err;
  }
};


const sendRecruitermail = async (formData) => {
  try {
    const { name, phone, email, company, requirement, level } = formData;

    const safe = (v) => (v && String(v).trim() ? v : "—");

    const mailOptions = {
      from: `"Recruiter Request" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Recruiter Request Submission",
      html: `
        <h3>New Recruiter Request</h3>
        <p><strong>Name:</strong> ${safe(name)}</p>
        <p><strong>Phone Number:</strong> ${safe(phone)}</p>
        <p><strong>Email:</strong> ${safe(email)}</p>
        <p><strong>Company:</strong> ${safe(company)}</p>
        <p><strong>Requirement:</strong> ${safe(requirement)}</p>
        <p><strong>Position Level:</strong> ${safe(level)}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Recruiter email sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("❌ Error sending recruiter email:", err);
    throw err;
  }
};
module.exports = {
  sendContactmail,
  sendRecruitermail,
};
