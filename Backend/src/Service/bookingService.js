const nodemailer = require('nodemailer');
const bookingService = require('../Model/booking');

const sendEmail = async (userId, bookingData, bookingRef) => {
  const user = await bookingService.findUserById(userId);
  if (!user) throw new Error("User not found");

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMPT_MAIL,
      pass: process.env.SMPT_APP_PASS
    }
  });

  const mailOptions = {
    from: `"${process.env.SMPT_MAIL}" <${process.env.SMPT_MAIL}>`,
    to: user.email,
    subject: 'Booking Confirmation',
    html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 30px;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 10px; padding: 30px; box-shadow: 0 0 10px rgba(0,0,0,0.05);">
      <h2 style="color: #1f2937;">Hello ${user.name},</h2>
      <p style="font-size: 16px; color: #4b5563;">
        We're excited to let you know that your booking has been <strong style="color: #10b981;">confirmed</strong>.
      </p>
      
      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
      
      <h3 style="color: #111827; margin-bottom: 10px;">Booking Details</h3>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #374151;">Booking Ref:</td>
          <td style="padding: 10px; color: #374151;">${bookingRef}</td>
        </tr>
        <tr style="background-color: #f3f4f6;">
          <td style="padding: 10px; font-weight: bold; color: #374151;">Vehicle:</td>
          <td style="padding: 10px; color: #374151;">${bookingData.vehicle.vehicle_name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; font-weight: bold; color: #374151;">Total Amount:</td>
          <td style="padding: 10px; color: #374151;">₹${bookingData.pricing.totalPayable}</td>
        </tr>
      </table>

      <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

      <p style="font-size: 15px; color: #6b7280;">
        If you have any questions, feel free to contact us. We're here to help 24/7.
      </p>

      <p style="font-size: 14px; color: #9ca3af;">
        — The Rental Team
      </p>
    </div>
    <p style="text-align: center; font-size: 12px; color: #9ca3af; margin-top: 20px;">
      © ${new Date().getFullYear()} Rental Services. All rights reserved.
    </p>
  </div>
`
  };


  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${user.email}`);
  } catch (error) {
    console.error("❌ Email sending error:", error.message);
    throw new Error("Email could not be sent.");
  }
};

module.exports = { sendEmail };
