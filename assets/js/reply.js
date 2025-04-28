<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Appointment Received</title>
  <style>
    body, p, h2, a {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    }
  </style>
</head>
<body style="background-color: #f4f6f9; margin: 0; padding: 20px; color: #333;">
  <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; margin: auto; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
    <h2 style="color: #1a3a6e; font-size: 24px; margin-bottom: 20px;">📩 We Got Your Appointment Request!</h2>

    <p style="font-size: 16px; margin-bottom: 15px;">Hey <strong>{{user_name}}</strong> 👋,</p>

    <p style="font-size: 16px; margin-bottom: 15px;">
      Thank you for reaching out to us at <strong>COMPUS BUSINESS CONSULTING SERVICES</strong>! 🚀<br><br>
      We’ve officially received your appointment request — and trust me, it’s safe and sound with us. 🙌
    </p>

    <div style="margin: 20px 0; background: #e0e5ec; height: 1px;"></div>

    <p style="font-size: 16px; margin-bottom: 10px;"><strong>🛎️ SERVICE TYPE:</strong> {{service_type}}</p>
    <p style="font-size: 16px; margin-bottom: 10px;"><strong>📅 APPOINTMENT DATE:</strong> {{appointment_date}}</p>
    <p style="font-size: 16px; margin-bottom: 20px;"><strong>⏰ TIME:</strong> {{appointment_time}}</p>

    <br>

    <p style="font-size: 16px; font-weight: 600; color: #1a3a6e;">- TEAM COMPUS ✨</p>

    <div style="margin-top: 30px; text-align: center; font-size: 14px; color: #6c757d;">
      <hr style="border: none; border-top: 1px solid #e0e5ec; margin: 20px 0;">
      <p style="margin: 0;">🚀 <a href="http://www.compusindia.com" style="color: #1a3a6e; text-decoration: none;">www.compusindia.com</a></p>
    </div>
  </div>
</body>
</html>
