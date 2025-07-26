const bookingService = require('../Service/bookingService');
const sendBookingConfirmation = async (req, res) => {
  const { userId, bookingData, bookingRef } = req.body;

  try {
    await bookingService.sendEmail(userId, bookingData, bookingRef);
    res.status(200).json({ message: 'Booking confirmation email sent.' });
  } catch (error) {
    console.error("Email sending failed:", error);
    res.status(500).json({ error: 'Failed to send booking email' });
  }
};
module.exports ={sendBookingConfirmation}